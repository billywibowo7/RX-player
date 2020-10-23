$(document).ready(() => {
    $('#btn-register').on('click', () => {
        let name = $('input[name="name"]').val().trim();
        let email = $('input[name="email"]').val().trim();
        let password = $('input[name="password"]').val().trim();
        let confirmPassword = $('input[name="confirm-password"]').val().trim();
        let gender = $('input[name="gender"]:checked').val();
        let agreement = $('input[name="agreement"]').is(':checked');

        if (name.length === 0) {
            alert("Name can't be empty!");
            return;
        }

        if (name.length < 3) {
            alert('Name must contain at least 3 characters!');
            return;
        }

        if (email.length === 0) {
            alert("Email can't be empty!");
            return
        }

        if (email.length < 6 || !email.includes('@') || !email.includes('.')) {
            alert('Please input a valid email!');
            return;
        }

        if (password.length === 0) {
            alert("Password can't be empty!");
            return
        }

        if (password.length < 6) {
            alert('Password must contain at least 6 characters!');
            return;
        }

        if (confirmPassword.length === 0) {
            alert("Confirm password can't be empty!");
            return
        }

        if (password !== confirmPassword) {
            alert("Password and confirm password don't match!");
            return;
        }

        if (gender === undefined) {
            alert("Please select a gender!");
            return;
        }

        if (!agreement) {
            alert("You need to agree to terms and conditions!");
            return;
        }

        $('#form-register').trigger('reset');
        alert('Register success!');
    });
});