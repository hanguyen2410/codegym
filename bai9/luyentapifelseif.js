let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
let pass = prompt('Password?', '');
if (pass == '123') {
    alert ('Welcome!');
} else if (pass = null) {
    alert ('Canceled.');
} else {
    alert ('Wrong password');
}
} else if (userName = null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}