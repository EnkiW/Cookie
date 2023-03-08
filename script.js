let name = prompt("Будь ласка, введіть ваше ім'я:");
let age = prompt("Будь ласка, введіть ваш вік:");
document.cookie = "name=" + name + ";";
document.cookie = "age=" + age + ";";

let cookies = document.cookie.split(";");
for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
    }
    if (cookie.indexOf("name=") == 0) {
        document.write("<p>Ім'я: " + cookie.substring("name=".length, cookie.length) + "</p>");
    }
    if (cookie.indexOf("age=") == 0) {
        document.write("<p>Вік: " + cookie.substring("age=".length, cookie.length) + "</p>");
    }
}