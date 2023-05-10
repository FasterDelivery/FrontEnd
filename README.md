<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GabrielPenise/netglobal">
    <img src="https://t3.ftcdn.net/jpg/04/73/02/64/360_F_473026422_k3XjtqTh0Br3Iw8IfhlB9c72n9dqi9n5.jpg" alt="Logo" width="300">
  </a>

<h3 align="center"> APLICACION FAST DELIVERY </h3>

  <p align="center">
    Proyecto aceleración P5
    <br />
    <a href="https://github.com/GabrielPenise/netglobal"><strong>Explora nuestro proyecto »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#stack-de-tecnologías">Stack de tecnologías</a></li>
      </ul>
    </li>
    <li><a href="#roadmap"> Git Flow</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre el proyecto

<img src="https://i.pinimg.com/originals/2e/f2/f3/2ef2f3289430a49cfbd483bf44dd2f17.jpg" alt="Logo" width="60" id="sobre-el-proyecto">

Una empresa de logística de última milla tiene cientos de repartidores que al inicio del día reciben ~10 paquetes cada uno y que deberán ir repartiendo a lo largo de la jornada. 
La empresa debe poder monitorear la operación de repartidores, asignar o reasignar paquetes e intervenir en caso que haga falta para editar un envío para modificar el domicilio o reasignarle el envío a otro repartidor.


La aplicación contiene dos roles bien diferenciados:
Aplicación con rol de repartidores: los repartidores podrán registrarse y loguearse libremente y seleccionar los paquetes que entregará ese día con un máximo de 10.
Aplicación con rol de administrador: la empresa podrá ver la nómina de repartidores registrados, cuántos repartidores están activos con entregas en curso, cuántos paquetes tiene cada repartidor, crear, ver y editar los paquetes que se deben enviar.  

Features:
Geolocalizar al repartidor y mostrarle por dónde va en el mapa.
Sistema de puntos por paquetes repartidos y penalizaciones por no completar entregas


<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>

### Stack de tecnologías

#### Back

- NodeJS
- Express
- Sequelize
- Postgres
- JWT
- Docker
- Amazon Web Services

#### Front

- Next.js
- React
- Redux
- Tailwind CSS
- Axios
- Docker
- Amazon Web Services
- Cypress


<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>

<!-- GITFLOW DOCUMENTATION-->
## Git Flow

El flujo general de Gitflow es el siguiente:

<ol> 
  <li> Se crea una rama develop a partir de main. </li>
  <li> Se crea una rama release a partir de la develop. </li>
  <li> Se crean ramas feature a partir de la develop. </li>
  <li> Cuando se termina una rama feature, se fusiona en la rama develop. </li>
  <li> Cuando la rama release está lista, se fusiona en las ramas develop y main. </li>
  <li> Si se detecta un problema en main, se crea una rama hotfix a partir de main. </li>
  <li> Una vez terminada la rama hotfix, esta se fusiona tanto en develop como en main. </li>
</ol>

## Roadmap

<!-- WEB -->

- [ ] Caso 1
  - [ ] Sprint 1: Repositorio con la estructura inicial subido con el docker armado y semver implementado. Repositorio y gitflow debidamente documentado.
  - [ ] Sprint 2: Maquetado inicial de una de las dos aplicaciones (repartidor o backoffice)
  - [ ] Sprint 3: Maquetado inicial de la otra aplicación (Repartidor o backoffice) e incorporar registro y login a ambas.
  - [ ] Sprint 4: JWT implementado en el back y una primera integración desde el front que permita realizar una request “hello world”. También deberá estar definido el servicio de cloud que se utilizará. CI CD que verifique linter y tests antes de deployar.
- [ ] Caso 2
  - [ ] Sprint 1: Armar la estructura de datos que se utilizará en la base de datos. En caso de utilizar un ORM armar los modelos de datos a utilizar.
  - [ ] Sprint 2: Escribir los tests y mocks de las funciones y endpoints que se utilizarán 
  - [ ] Sprint 3: Escribir los endpoints de back
  - [ ] Sprint 4: Servicios orquestados y disponibilizados. Documentar endpoints.
- [ ] Caso 3
  - [ ] Sprint 1: Realizar component testing e integration testing en el front realizado.
  - [ ] Sprint 2: Iteración de código. 
  - [ ] Sprint 3: Iteración del front realizado incorporando SSR y server components.

<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>

<!-- CONTACT -->

## Contacto

- Belen Cécere- cecere3329@gmail.com
- Mateo Catalano - mate.catalano98@gmail.com
- Marcelo García- marcelogarcia91@gmail.com
- Alexis Bermúdez - cecere3329@gmail.com
- Gerardo Burgos - gerarburgos1987@gmail.com



<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>
