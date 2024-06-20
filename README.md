<h1 align="center">PROYECTO KAFKA</h1>
<br>
<B>RUBEN LOZANO SANCHEZ</B>

El flujo principal del proyecto consiste en que un productor envía mensajes a una cola de Kafka. Estos mensajes contienen información de usuarios, específicamente su ID y nombre. Un consumidor, suscrito a la cola de Kafka, recibe estos mensajes y los almacena en una base de datos relacional. Adicionalmente, el consumidor expone un endpoint /get para recuperar los datos almacenados.

<img width="566" alt="imagen (1)" src="https://github.com/rubens122/kafka-angular/assets/149151111/40af21a0-1dac-4d12-9374-786df1941bee" align="center">


-La base de datos relacional está conectada a un CRUD (Crear, Leer, Actualizar y Borrar) que permite la manipulación completa de los datos de los usuarios. Este CRUD proporciona operaciones para insertar nuevos usuarios, actualizar la información existente, borrar usuarios y listar todos los usuarios almacenados.

-Además, el consumidor se integra con una aplicación frontend desarrollada en Angular. Esta aplicación está conectada al CRUD y su función principal es mostrar los datos de los usuarios de manera gráfica en una página web, ofreciendo una interfaz intuitiva y amigable para la visualización y gestión de los datos.

-Todo el proyecto está conectado a SonarQube, una herramienta de análisis de código estático que evalúa la calidad del código fuente. SonarQube analiza el proyecto en busca de posibles errores, vulnerabilidades y malos olores en el código, asegurando que el desarrollo cumpla con los estándares de calidad y buenas prácticas de programación.
