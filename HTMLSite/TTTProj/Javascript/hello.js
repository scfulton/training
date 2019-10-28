function sayHello() {
    var username = prompt("Enter your name: ", "");
    if (confirm("Your name is " + username)) {
    // document.write("<h1>Hello, " + username + "!</h1>");
    alert("Hello, " + username + "!");
    } else {
    alert("Hello, world!");
    }
}