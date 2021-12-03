const fs = require('fs');


module.exports = {

    /** *
    * Retorna nuestros valores del JSON dado
    * @param {jsonName} jsonRoute
    * @param {jsonObject} jsonObject
    */
    getData(jsonName, nombre) {

        const json = require(`../../${jsonName}`)

        var pa = json[nombre]

        for (key in pa) {
            console.log(pa[key])
        }
        return "--------------------------------";
    },

    /** *
    * Retorna valor especifico del JSON dado
    * @param {jsonName} - jsonRoute
    * @param {jsonObject} - jsonObject
    * @param {searchParam} - searchParam
    */
    getParameter(jsonName, nombre, parametro) {

        const json = require(`../../${jsonName}`)

        if (!parametro) {

            return "Parametro no dado.";

        } else {

            var pa = json[nombre][parametro]

            return pa;
        }

    },

    /** *
    * Añade un juego al JSON
    * @param {jsonName} - jsonRoute
    * @param {value} - game name
    * @param {jsonObject} - jsonObject
    */
    addGame(jsonName, nombre, valor) {

        //const json = require(`./${jsonName}`)

        fs.readFile(jsonName, 'utf-8', function readFileCallback(err, data) {
            if (err) {
                return err;

            } else {
                obj = JSON.parse(data);

                obj[nombre] = ({ valor });
                json = JSON.stringify(obj, null, 4);

                fs.writeFile(jsonName, json, 'utf-8', function callback() { });

            }
            console.log("Listo!")

        });
    }
}


