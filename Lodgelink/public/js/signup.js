document.addEventListener('DOMContentLoaded', () => {
    //TO GET THE FORM
    const form = document.querySelector('.signup-form');

    //TO GET ALL INPUTS
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const repassInput = document.getElementById('repass');

    //TO GET ALL ERRORS
    const nameErr = document.querySelector('.name-err');
    const emailErr1 = document.querySelector('.email-err1');
    const emailErr2 = document.querySelector('.email-err2');
    const usernameErr1 = document.querySelector('.username-err1');
    const usernameErr2 = document.querySelector('.username-err2');
    const passErr = document.querySelector('.pass-err');
    const repassErr = document.querySelector('.repass-err');

    //CHECKING IF USERNAME EXISTS IN DB
    const checkUsernameExistence = async (username) => {
        const response = await fetch(`/api/check-username?username=${username}`);
        const data = await response.json();
        return data.exists;
    };
    //CHECKING IF MAIL EXISTS IN DB
    const checkEmailExistence = async (email) => {
        const response = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`);
        const data = await response.json();
        return data.exists;
    };


    //TO VALIDATE NAME
    const validateName = () => {
        if (nameInput.value.trim() === '') {
            nameErr.classList.remove('no-display'); //IF NAME LENGTH=0,SHOW ERROR
            return false;
        } else {
            nameErr.classList.add('no-display');  //IF NAMELENGTH>0,DO NOT SHOW ERROR
            return true;
        }
    };

    //TO VALIDATE EMAIL
    const validateEmail = async () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInputValue = emailInput.value.trim();
    
        // Check if email is empty
        if (emailInputValue === '') {
            emailErr1.classList.remove('no-display'); 
            emailErr2.classList.add('no-display');
            return false;
        }
    
        // Check if email matches the pattern
        if (!emailPattern.test(emailInputValue)) {
            emailErr1.classList.remove('no-display');
            emailErr2.classList.add('no-display');
            return false;
        }
    
        // Check if email exists in the database
        try {
            const exists = await checkEmailExistence(emailInput.value.trim());
            if (exists) {
                emailErr1.classList.add('no-display');
                emailErr2.classList.remove('no-display');
                return false;
            } else {
                emailErr1.classList.add('no-display');
                emailErr2.classList.add('no-display');
                return true;
            }
        } catch (error) {
            console.error('Error checking email existence:', error);
            emailErr1.classList.add('no-display');
            emailErr2.classList.add('no-display');
            return false;
        }
    };


    //TO VALIDATE USERNAME
    const validateUsername = async () => {
        //CHECK IF USERNAME IS EMPTY
        if (usernameInput.value.trim() === '') {
            usernameErr1.classList.remove('no-display');
            usernameErr2.classList.add('no-display');
            return false;
        } else {
            //CHECK IF IT ALREADY EXISTS IN DB
            const exists = await checkUsernameExistence(usernameInput.value.trim());
            if (exists) {
                usernameErr1.classList.add('no-display');
                usernameErr2.classList.remove('no-display');
                return false;
            } else {
                usernameErr1.classList.add('no-display');
                usernameErr2.classList.add('no-display');
                return true;
            }
        }
    };

    //TO VALIDATE PASSWORD
    const validatePassword = () => {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
        if (!passPattern.test(passwordInput.value)) {
            passErr.classList.remove('no-display');
            return false;
        } else {
            passErr.classList.add('no-display');
            return true;
        }
    };

    //TO VALIDATE REPASSWORD
    const validateRepass = () => {
        if (repassInput.value !== passwordInput.value) {
            repassErr.classList.remove('no-display');
            return false;
        } else {
            repassErr.classList.add('no-display');
            return true;
        }
    };

    //TO TRACK INPUTS DYNAMICALLY
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);
    repassInput.addEventListener('input', validateRepass);

    //TO CHECK CONDITIONS AFTER SUBMISSION
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = await validateEmail();
        const isUsernameValid = await validateUsername();
        const isPasswordValid = validatePassword();
        const isRepassValid = validateRepass();

        if (isNameValid && isEmailValid && isUsernameValid && isPasswordValid && isRepassValid) {
            form.submit();
        }
    });
});
