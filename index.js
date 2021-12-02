

// console.log(parsed.ventas)

module.exports = {

    getData(jsonName, nombre) {

        const json = require(`../../${jsonName}`)

        var parsed = json[nombre]
        
        for (key in parsed) {
            console.log(parsed[key])
        }
            return "--------------------------------";
    }

}

//TODO: MORE FUNCTIONS AS PARSEDATA OR GETDATAPERSTRING
