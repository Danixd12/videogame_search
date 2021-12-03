const fs = require('fs');


module.exports = {

    /** *
    * Retorna nuestros valores del JSON dado
    * @param {jsonName} jsonRoute
    * @param {jsonObject} jsonObject
    */
    getData(jsonName, nombre) {

        const json = require(`./${jsonName}`)

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
    * @param {jsonObject} - jsonObject
    */
   /* addValue(jsonName, objeto) {

        const json = require(`./${jsonName}`)

            fs.readFile(json, 'utf-8', function readFileCallback(err, data) {
                if (err) {
                    return err;

                } else {
                    obj = JSON.parse(data);

                    obj.table.push({ objeto });
                    json = JSON.stringify(obj);

                    fs.writeFile(jsonName, json, 'utf-8', callback);

                }
            }
        }  */ 
    }     
        
    
