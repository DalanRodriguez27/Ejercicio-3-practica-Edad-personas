import CL_Censo from "./CL_Censo.js";
import CL_ICenso from "./CL_ICenso.js";
import CL_IPersonas from "./CL_IPersonas.js";
import CL_Personas from "./CL_Personas.js";

let iCenso = new CL_ICenso(),
censo = new CL_Censo(),
salida = document.getElementById("salida");

let opc = 1;

while(opc == 1){
    let iPersonas = new CL_IPersonas(),
    e = iPersonas.leerEdad(),
    personas = new CL_Personas(e);

    censo.procesarPersona(personas);

    opc = iPersonas.solicitarOpcion();
}

salida.innerHTML=iCenso.reporteCenso(censo.promedioEdad());