const fs = require('fs');


module.exports = {

    /** *
    * Retorna nuestros valores del JSON dado
    * @param {jsonName} jsonRoute
    * @param {jsonObject} jsonObject
    * 
    * * Ejemplo: 
    * 
    * ```
    * console.log(data.getData("test/games.json", "GTA"))
    * ```
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
    * @param {jsonName} jsonRoute
    * @param {jsonObject} jsonObject
    * @param {searchParam} searchParam
    * 
    * * Ejemplo:
    * 
    * ```
    * console.log(data.getParameter("test/games.json", "Minecraft", "ventas"))
    * ```
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
    * Añade un juego al JSON y modifica uno ya existente
    * @param {jsonName} jsonRoute
    * @param {value} gameName
    * @param {jsonObject} jsonObject
    * 
    * * Ejemplo: 
    * 
    * ```
    * console.log(data.addGame("games.json", "GTA",{test: "test", valor: 5} ))
    * ```
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


