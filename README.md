# Git Commit using React/Hooks
### English: 
This website is intended for a technical test that demonstrates React knowledge. It makes requests to an API server. It has 3 main modules:
* Home: Shows the last three commits.
* Commit: Show all commits.
* Contact: Allows you to send a message to an email address configured in the API server.

### Español:
Este sitio web está destinado a una prueba técnica por la cual se demuestra conocimientos sobre React. El mismo realiza peticiones a un servidor API. Se tiene 3 módulos principales:
* Home: Muestra los tres últimos commit.
* Commit: Muestra todos los commits.
* Contact: Permite enviar un mensaje a una dirección de correo electrónico configurado en el servidor API.
## Comenzando
_Estas instrucciones te permitirán obtener una copia del proyecto para realizar las pruebas respectivas o continuar con su desarrollo._
## Requisitos
_Lo que necesitas para instalar el sitioweb en tu computadora local:_
* Instalar el [Servidor API](https://github.com/leoerickp/Git-Commit-APIServer.git). En el repositorio podrán encontrar la guía de instalación del Servidor API.
* Clonar el proyecto [Git Commit](https://github.com/leoerickp/Git-Commit.git).
## Instalación
_Dentro de la carpeta donde se clonó el proyecto:_
* instalar las dependencias:
```console
npm install
```
## Configuración
_De ser necesario se debe configurar la ruta del servidor API:_
* Modificar la variable **url** del archivo _./src/Global.tsx_, incluyendo la ruta y el puerto del servidor API:
```javascript
const Global = {
    url: 'http://localhost:3000/'
}

export default Global;
```
---------------
## Ejecución
_Dentro de la carpeta donde se clonó el proyecto:_
* Ejecutar como desarrollador:
```console
npm run dev
```
## Autor
* [Leo Erick Pereyra](https://github.com/leoerickp).
## Licencia
Este proyecto está bajo la licencia del HONOR.
## ¿Cómo luce la aplicación?
* [Ver en vivo](https://git-commit.netlify.app/)
![image](https://user-images.githubusercontent.com/112339552/199773794-5a3ed424-14ef-486c-bf78-6611f3937a94.png)
![image](https://user-images.githubusercontent.com/112339552/199774189-504a339d-a49c-4291-89b2-aea08c25ecbf.png)
![image](https://user-images.githubusercontent.com/112339552/199774339-fce67eee-5468-4d7e-97c5-6c43d778631d.png)