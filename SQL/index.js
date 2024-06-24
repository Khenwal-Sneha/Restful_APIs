const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const connection = mysql.createConnection({
    host: "localhost",
    user: "SnehaKhenwal",
    database: "tuts",
    password: "Anay@123"
});

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

//API for Home Page
app.get('/', (req, res) => {
    let q = "select count(id) from user";
    connection.query(q, (err, result) => {
        res.render("home.ejs", { number: result[0]["count(id)"] });
    });
});

//API to get user data
app.get("/user", (req, res) => {
    let q = "select id,email,name from user";
    connection.query(q, (err, users) => {
        res.render("users.ejs", { users });
    });
});

//API to get edit form
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    id = `"${id}"`
    let q = `select * from user where id=${id}`;
    connection.query(q, (err, user) => {
        res.render("edit.ejs", { user, id });
    });
})

      //to edit in database
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formpass, username: formusername } = req.body;
    id = `"${id}"`;
    let q = `select * from user where id=${id}`;
    connection.query(q, (err, users) => {
        let user = users[0];
        if (formpass != user["password"]) {
            res.send("error")
        }
        
        let q2 = `update user set name= "${formusername}" where id=${id}`;
        connection.query(q2, (err, result) => {
            let q3 = `select * from user`;
            connection.query(q3, (err, users) => {
                res.render("users.ejs", { users });
            })
        });
    });
});

//API to make new account
app.get("/newuser", (req, res) => {
    res.render("new.ejs");
})

app.post("/user", (req, res) => {
    let { username, email, id, password } = req.body;
    let q = `insert into user(name,email,id,password) values("${username}","${email}","${id}","${password}")`;
    connection.query(q, (err, result) => {
        let q3 = `select * from user `;
        connection.query(q3, (err, users) => {
            res.render("users.ejs", { users });
        })
    })
});


//API to delte account
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    id = `"${id}"`;
    let q = `select * from user where id=${id}`;
    connection.query(q, (err, result) => {
        let user = result[0];
        res.render("delete.ejs", { user });
    })
})

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    const { password: formpass, permi } = req.body;
    if (!formpass || !permi) {
        return res.status(400).send("Missing required fields");
    }
    let q1 = `select * from user where id="${id}"`;
    connection.query(q1, (err, users) => {
        let user = users[0];
        if (formpass === user["password"] && permi) {
            const q2 = `delete  from user where id="${id}"`;
            connection.query(q2, (err, result) => {
                if (err) {
                    console.error('Error executing delete query:', err);
                    return res.status(500).send("Internal Server Error");
                }
                res.send(`
                                <h3>Your account is successfully deleted</h3>
                                <form action="/">
                                    <button>Go to Home page</button>
                                </form>
                            `);
            });
        } else {
            res.status(403).send(`Invalid password or permission`);
        }
    })

});

//server
app.listen("8004", () => {
    console.log("listening at 8004");
})