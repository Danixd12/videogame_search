# GUÍA DE USO - videogame_search

## getData()

* Esta función nos retorna los datos de nuestro json que previamente contiene los datos del viedojuego.

Ejemplo:

```js
const v_api = require('videogame_search')

console.log(v_api.getData("games.json", "Minecraft"))
```

Siendo el primer argumento la ruta de nuestro JSON. Y siendo el segundo el nombre de nuestro videojuego.
***

Ejemplo del JSON:

```json
{
    "Minecraft": {
        "name": "Minecraft",
        "ventas": "7.000.000"
    }
}

```
