function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:

      
  }
  function Usuario(opciones){
    this.usuario = opciones.usuario || "pepito23";
    this.nombre = opciones.nombre || "pepe";
    this.email = opciones.email || "pepito@gmail.com";
    this.password = opciones.pass || "1234";

    this.saludar= function(){
      return "Hola, mi nombre es " + this.nombre
    }
}


  var opciones = new Usuario({usuario: "emma", nombre: "emmanuel", email: "emma14@gmail.com", pass: "5678"})
  console.log(opciones.saludar())



  function creaObj() { 
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:
  }

  function datosPersona(nom, ape, dni){
    this.nombre = nom || "emmanuel";
    this.apellido= ape || "Duarte";
    this.dni = dni || "1234567"
  }

  var persona1 = new datosPersona("emma", "duar", "548967")
  var persona2 = new datosPersona("joaquin", "quiroga", "548994267")
  console.log("Mi nombre es "+ persona1.nombre)
  console.log("Mi nombre es "+ persona2.nombre)

  
  
  function creaObj2() { 
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:
  }

  function Default(){
    this.nombre = "emmanuel";
    this.apellido = "Duarte";
    this.dni = "1234567"
  }
  var persona3 = new Default()
  var persona4 = new Default()
  console.log("Mi nombre por default es "+ persona3.nombre)
  console.log("Mi nombre por default es "+ persona4.nombre)

  function Computador() { 
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:
  }

  function computadora(){
    this.id = "joaquin";
    this.marca = "lenovo";
    this.procesador = "Intel i5";
    this.ram = "8 GB";
    this.ssd = "500 GB";

    this.datos = function(){
      return "Esta Computadora tiene un id"+ this.id + ", marca "+ this.marca+ ", procesador"+this.procesador+", ram"+this.ram+" y ssd"+this.ssd
    }

  }

  var persona5= new computadora()
  console.log("Iniciando Pc..."+ setTimeout(persona5.datos(), 3000))