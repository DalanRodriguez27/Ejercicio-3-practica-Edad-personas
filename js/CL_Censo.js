export default class CL_Censo{
    constructor(){
        this.cntPersonas = 0;
        this.acEdad = 0;
    }

    procesarPersona(personas){
        this.cntPersonas++;

        this.acEdad += Number(personas.edad);
    }

    promedioEdad(){
        if(this.cntPersonas > 0){
            return (this.acEdad/ this.cntPersonas) + " años";
        }
        else{
            return 0;
        }
    }
}