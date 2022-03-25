
# Proyecto desarrollado con serverless y Node JS

Este proyecto está desarrollado con el Framework Serverless de AWS (Api Gateway) usando Lambda para el el consumo de servicios.
Es´ta usando una conexión a una base de datos MySQL.

## Instalación
=> para iniciar la instalación se tiene que ejecutar el siguiente comando, en la carpeta base del proyecto.
   
   npm install

=> Este comando instalará todas las dependencias necesarias para la ejecución del servicio.

=> El proyecto fue desarrollado con Typescrypt el cual se tiene que realizar la compilación con el siguiente comando
  
  tsc

  la carpeta compilada es "dist", en el cual se encuentra toda la lógica de desarrollo y las funciones.

=> El proyecto incluye el pluging de "serverless-offline" en el pakete de serverless.yml el cual nos ayuda a testear los servicios en la máquina local.

=> para iniciar serverless en modo local ejecutar el siguiente comando.

  serverless offline

=> Este proyecto utiliza MySQL para el registro y lectura de datos, por el cual se requiere instalar el script que está en la carpeta base de este proyecto con el nombre de "jhuotleydata.sql" o tambien se puede ver en la siguiente dirección https://github.com/shirlasoftcode/reto-service/blob/main/jhuorleydata.sql


### Ruta de API
```
/// CONSUMO DE SERVICIOS USANDO MYSQL 

 1) [GET] /dev/user/list
    (response)
      {
        "message": "Operación exitosa",
        "success": true,
        "data": [
          {
            "id": 1,
            "nombre": "Jhuorley",
            "apellidos": "Quispicusi perez",
            "correo": "yordicito2014@gmail.com",
            "clave": "1234",
            "celular": "925457812",
            "direccion": "Jr valdez",
            "created_at": "2022-03-25T19:07:14.000Z"
          }
        ]
      }

2)  [GET] /dev/user/list/id/{id}
    (param) 
      {id} = valor numérico
    (response)
      {
        "message": "Operación exitosa",
        "success": true,
        "data": {
          "id": 1,
          "nombre": "Jhuorley",
          "apellidos": "Quispicusi perez",
          "correo": "yordicito2014@gmail.com",
          "clave": "1234",
          "celular": "925457812",
          "direccion": "Jr valdez",
          "created_at": "2022-03-25T19:07:14.000Z"
        }
      }

3)  [POST] /dev/user/insert
    (request) => datos que se envia
      {
        "nombre": "Maria",
        "apellidos": "Bastidas Luquesssss",
        "correo": "fsf@gmail.com",
        "clave": "12345",
        "celular": "925457812",
        "direccion": "jr"
      }
    (response)
      {
        "message": "Nuevo usuario registrado en el sistema",
        "success": true,
        "data": null
      }

4)  [PUT] /dev/user/update/{id}
    (param) {id} = valor numérico
    (request)
      {
        "nombre": "jhuorleycito",
        "apellidos": "Quispicusi perez",
        "correo": "yordicito@gmail.com",
        "clave": "1234",
        "celular": "925457812",
        "direccion": "Jr valdez"
      }
    (response)
      {
        "message": "Datos de usuario fueron actualizados",
        "success": true,
        "data": null
      }

/// CONSUMO DE SERVICIOS DE SWAPI

1)  [GET] /dev/people/list
    (response)
      {
        "message": "Operación exitosa",
        "success": true,
        "data": [
          {
            "nombre": "Luke Skywalker",
            "altura": "172",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojo": "blue",
            "anio_nacimiento": "19BBY",
            "genero": "male",
            "mundonatal": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/",
                "https://swapi.py4e.com/api/films/7/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/14/",
                "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/22/"
            ],
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/"
          }
        ]
      }

2)  [GET] /dev/people/list/id/{id}
    (param) {id} = valor numérico
    (response)
      {
        "message": "Operación exitosa",
        "success": true,
        "data": {
          "nombre": "Luke Skywalker",
          "altura": "172",
          "masa": "77",
          "color_pelo": "blond",
          "color_piel": "fair",
          "color_ojo": "blue",
          "anio_nacimiento": "19BBY",
          "genero": "male",
          "mundonatal": "https://swapi.py4e.com/api/planets/1/",
          "peliculas": [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
              "https://swapi.py4e.com/api/films/6/",
              "https://swapi.py4e.com/api/films/7/"
          ],
          "especies": [
              "https://swapi.py4e.com/api/species/1/"
          ],
          "vehiculos": [
              "https://swapi.py4e.com/api/vehicles/14/",
              "https://swapi.py4e.com/api/vehicles/30/"
          ],
          "naves_estelares": [
              "https://swapi.py4e.com/api/starships/12/",
              "https://swapi.py4e.com/api/starships/22/"
          ],
          "creado": "2014-12-09T13:50:51.644000Z",
          "editado": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.py4e.com/api/people/1/"
        }
      }

```
### Creditos
  Este proyecto fue desarrollado por 
  Jhuorley Quispicusi perez

