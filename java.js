console.log("hola bienvenidos a mi sitio");



let nombre = prompt("¿cual quieres que sea tu nombre de usuario?");
alert ("bienvenido a mi pagina " + nombre);

const NOMBREUSUARIO = nombre;
alert("tu nombre de usuario es " + NOMBREUSUARIO);
console.log("tu nombre de usuario es " + NOMBREUSUARIO);

let apellido = prompt("¿cual es tu apellido?");

let correo = prompt("¿cual es tu correo electronico?");

let contraseña = prompt("¿que contraseña quiere ingresar?");

let reingresocontraseña = prompt("confirma la contraseña");
if (contraseña != reingresocontraseña) {
    alert("las contraseñas no son iguales");
    
} else {
    alert("todo es correcto")
    
}

let edad = parseInt(prompt("¿cual es tu edad?"))
if (edad >= 18){
    console.log("puedes ingresar");
    alert("pasa a mi pagina rey/reina")
}
else{
    console.log("no puedes ingresar");
    alert("disculpa sos menor,no podes")
}

let numeropacientes = parseInt(prompt("¿cuanta gente voy a atender?"));
for (let turno = 1; turno <= numeropacientes; turno++) {
let nombre = prompt("¿como se llama el pasciente?" + turno + "?");
console.log("el pasciente" + nombre +  ", tiene el numero " + turno);
}

let diadelasemana = parseInt(prompt("ingresa un numero de la semana del 1 al 7"))
switch (diadelasemana) {
    case 1:
        alert("lunes")
        break;
    case 2:
        alert("martes")
        break;
    case 3:
        alert("miercoles")
        break;
    case 4:
        alert("jueves")
        break;
    case 5:
        alert("viernes")
        break;
    case 6:
        alert("sabado")
        break;
    case 7:
        alert("domingo")
        break;
    default:
        alert("el numero que ingresaste no es un dia de la semana")
        break;
}

function bienvenida() {
    console.log("hola,bienvenido como te va?");
}
function resta(numero1, numero2) {
    let resultadoresta = numero1 - numero2;
    alert("el resultado de la resta es ".concat(resultadoresta));
    console.log("el resultado de la resta es ".concat(resultadoresta));
}
let num1 = prompt("ingrese valor numero 1");
let num2 = prompt("ingrese valor numero 2");

resta(num1, num2);

class producto{
    constructor(nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    toString = function () {
        return this.nombre + "( $" + this.precio.toFixed(2) + ")";
    }
}

let misproductos = [];

let respuesta = "SI";

do {
    let nombre = prompt("ingrese el nombre del producto")
    let precio = prompt("ingrese el precio del producto")
    const unproducto = new producto(nombre,precio)
    misproductos.push(unproducto)
    console.log("la cantidad de productos que hay en mi lista ",misproductos.length);
    respuesta = prompt("¿quieres seguir agregando productos? si/no")
}  while (respuesta.toUpperCase() !== "NO");

console.log("esta es la lista de los productos que cargue ", misproductos);


misproductos.forEach((unproducto) =>{
    console.log("--> " + unproducto.toString());
})


let nombrebuscado = prompt("¿que producto estas buscando?")

let productohallado = misproductos.filter(
    (unproducto) => unproducto.nombre.includes(nombrebuscado.toUpperCase()
))

alert("la cantidad de producto que se hallaron en su nombre " + nombrebuscado + " son: " + productohallado.length)