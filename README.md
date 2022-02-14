# moviesChallenge

##commit 1##
-Creación de repositorio en Github "Movies Challenge"
-Creación de proyecto en Node con Movies_db
-Creación de rutas, controladores y vistas ( EJS )

##commit 2##
-Creación del Home-page del proyecto, debe mostrar el listado de todas las películas
Debe registrarse/loguearse si ya tiene cuenta
Si es adm puede agregar película desde la Home-page. 
Si es user le mostrará bienvenid@ + su nombre

FALTA LOGIN/REGISTER/PERFIL

##commit 3##
-Cada película tendrá un link que muestre el detalle completo.
 En el detalle deben verse los datos más el nombre del género al que pertenece y la lista de actores que trabajaron en ella.
(Implementar sequelize, crear modelos y establecer relaciones)

COMPLETO

##commit 4##
CRUD
-Agregar una nueva película, modificarla, eliminarla (paranoid)
-Colocar validaciones para los campos de formularios que son obligatorios

AGREGAR MAS CAMPOS
FALTA QUE SI ESTA VACIO ALGUN CAMPO ENTONCES LO MUESTRE sin ese campo
MEJORAR LA PREGUNTA DEL DELETE CON VENTANA

##commit 5##
Registro y login
-registrar a un usuario regular y a un usuario administrador para que luego puedan loguearse
en el sitio y mantenerse logueados durante toda la navegación. 
-Únicamente el administrador podrá acceder a las rutas del CRUD para crear, modificar o eliminar
películas. 
-El sistema debe permitir al usuario desloguearse (logout).


***La base de datos ya cuenta con una tabla “users” en la que podrás identificar al
usuario regular con el rol “0” (es el dato por defecto) y al administrador con un
número diferente a tu elección. Una vez registrado el usuario tendrás que modificar a
mano el número en la columna “rol” de la tabla.

BASE DE DATOS MODIFICADA. AGREGUE CAMPOS 0-USER 1-ADMIN

##commit 6##
Identificar al administrador 
-Creá los middlewares y ajustes necesarios para que únicamente un rol de
administrador pueda utilizar las funcionalidades del CRUD. (ADMINMIDDLEWARE)

-El usuario regular y los usuarios no logueados únicamente podrán acceder al listado
de películas y sus detalles.

##commit 7##
-Mejoro estilos y responsive