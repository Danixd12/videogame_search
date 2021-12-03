
module.exports = {

    /** *
    * Retorna nuestros valores del JSON dado
    * @param {jsonName} jsonRoute
    * @param {jsonObject} jsonObject
    */
    getData(jsonName, nombre) {

        const json = require(`../../${jsonName}`)

        var parsed = json[nombre]
        
        for (key in parsed) {
            console.log(parsed[key])
        }
            return "--------------------------------";
    },

    /** *
    * Retorna valor especifico del JSON dado
    * @param {jsonName} - jsonRoute
    * @param {jsonObject} - jsonObject
    * @param {param} - searchParam
    */
     getParameter(jsonName, nombre, parametro) {

        const json = require(`../../${jsonName}`)

        if (!parametro) {

            return "Parametro no dado.";

        } else {

            var parsed = json[nombre][parametro]

            return parsed;
        }
           
    }

}

//TODO: MORE FUNCTIONS AS PARSEDATA OR GETDATAPERSTRING
