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

## getParameter()

* Esta función nos retorna un valor específico de nuestro json que previamente contiene los datos del viedojuego.

Ejemplo:

```js
const v_api = require('videogame_search')

console.log(v_api.getParameter("games.json", "Minecraft", "ventas"))
```

Siendo el primer argumento la ruta de nuestro JSON. Y siendo el segundo el nombre de nuestro videojuego, el tercero el nombre de nuestro valor.
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

## addGame()

* Esta funcion añade o modifica un valor del JSON especificado.

Ejemplo:

```js
const v_api = require('videogame_search')

console.log(v_api.addGame("games.json", "Minecraft", {valor1: "valor1", valor2: "valor2"}))
```

Siendo el primer argumento la ruta de nuestro JSON. Y siendo el segundo el nombre de nuestro videojuego, el tercero nuestros valores.
***

Ejemplo del JSON resultante:

```json
{
    "Minecraft": {
    "valor": { 
        "valor1": "valor1",
        "valor2": "valor2"
        }
    },
}

```