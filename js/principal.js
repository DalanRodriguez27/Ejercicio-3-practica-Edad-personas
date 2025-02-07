import CL_Edad from "./CL_Edad.js";
import CL_Personas from "./CL_Personas.js";

let personas1 = new CL_Personas(15);
let personas2 = new CL_Personas(14);
let personas3 = new CL_Personas(19);
let personas4 = new CL_Personas(20);
let personas5 = new CL_Personas(16);
let personas6 = new CL_Personas(18);


let edad = new CL_Edad();

edad.procesarPersona(personas1);
edad.procesarPersona(personas2);
edad.procesarPersona(personas3);
edad.procesarPersona(personas4);
edad.procesarPersona(personas5);
edad.procesarPersona(personas6);

let salida = document.getElementById("salida");

salida.innerHTML =`
<br>El promedio de edad es: ${edad.promedioEdad()}`