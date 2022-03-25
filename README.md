
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
 1) [GET] /dev/user/list
    
    (response) respuesta de servicio
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
        },
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
```
### Creditos
  Este proyecto fue desarrollado por 
  Jhuorley Quispicusi perez

