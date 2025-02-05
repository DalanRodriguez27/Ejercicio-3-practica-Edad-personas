export default class CL_Personas{
    constructor(edad){
        this.edad = edad
    }

    set edad(e){
        return this._edad = e;
    }

    get edad(){
        return this._edad;
    }

    
}