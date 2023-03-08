document.cookie = "name = Олександр";
document.cookie = "age = 15";
const cookies = document.cookie.split(';');
let name, age;

for(let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if(cookie[0].trim() === 'name') {
        name = cookie[1].trim();
    } else if(cookie[0].trim() === 'age') {
        age = cookie[1].trim();
    }
}

console.log(`Моє ім'я: ${name}`);
console.log(`Мій вік: ${age}`);

