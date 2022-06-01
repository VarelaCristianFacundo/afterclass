let diaNacimiento = prompt("Ingrese su dia de nacimiento");
let mesNacimiento = prompt("Ingrese su mes de nacimiento");
let anioNacimiento = prompt ("Ingrese su año de nacimiento");

let cumple = diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento;

console.log(cumple);

let edad = calculateAge (cumple)

console.log(edad);


if (edad > 18)
{
    alert("Bienvenido")
}
else
{
    alert ("Usted es menor de edad")
}


// let nombre = prompt("Ingrese un nombre");
// let apellido = prompt ("Ingrese un apellido");

// let output = "Bienvenido " + nombre + " " + apellido;
// let login = document.getElementById("login")
// console.log(login);

// if (nombre == "Cristian")
// {
//     login.innerText = nombre;
//     alert(output);

// }
// else
// {
//     alert ("No estas registrado")
// }




// Función que calcula la edad en base a la fecha de nacimiento
function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}