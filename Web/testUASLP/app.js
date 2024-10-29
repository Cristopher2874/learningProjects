const member = require('./data'); //cuando tenga el js
const {members, registered} = require('./dataBase');

members.forEach(item=>{
    console.log(item);
})

console.log(registered);

//npm init -y
// listado de paquetes y versiones del proyecto
// dependencias, scripts
// npm install --dependencia}
// npm update / update --dependencia

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hello, World!",
    e: "oO",
    T: "U",
}));