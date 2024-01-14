document.getElementById('loging-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userMail = emailField.value;
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    // console.log(userMail);
if ((userMail =='hiren@gmail.com') && (userPassword == '123')) {

window.location.href = 'index.html';

}
})