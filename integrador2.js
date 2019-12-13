// Guada, en primer lugar quiero felicitarte porque tu trabajo es excelente. 
// Demostras la comprension y la capacidad de usar las 
// estructuras que fuimos aprendiendo en las ultimas semanas y se nota el esfuerzo
// por escribir un codigo claro y prolijo. 

// Te dejo observaciones a lo largo del codigo para mejorar. 


let usuarios = [
    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1, "Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"]
];

// Ese es un error pequeño en apariencia pero que tiene consecuencias. 
// Cuando declaramos una variable usando otra variable, como en este caso, 
// si usuarios.length cambia despues, el valor de "id" NO cambia. 
// Si agrego un usuario al listado, por ejemplo, usuarios.length sera 5, 
// pero id seguira siendo 4, ya que mantiene su valor al momento
// en el cual lo declaramos. 
// La consecuencia practica que tiene esto en tu codigo es que 
// todos los usuarios nuevos se agregan con el id 4. 
// Y en consecuencia, es imposible obtenerlos o eliminarlos. 
let id = usuarios.length;
let nombre = "";
let telefono = "";
let email = "";
let accion = "";
let volverAlMenu = "SI";

while (accion != "SALIR") {

    if (accion === "") {

        accion = prompt(`   
        ⚙️ SELECCIONE UNA OPERACIÓN:

        ➡️[AGREGAR] un usuario 👤
        ➡️[OBTENER] un usuario 🔎
        ➡️[LISTAR] todos los usuarios 📃
        ➡️[MODIFICAR] un usuario ✏️
        ➡️[ELIMINAR] un usuario 🗑️
        ➡️[SALIR] del programa 🚪
        `);
    } 

    volverAlMenu = volverAlMenu.toUpperCase()
    accion = accion.toUpperCase()

    //-------------------AGREGAR--------------------//
    if (accion === "AGREGAR") {

        nombre = prompt("Ingresá tu nombre");
        // esto es un detalle minimo, pero al convertir a Number lo que sea que el usuario escriba
        // sin otro chequeo, si escribo algo que no es convertible a un numero me queda NaN en el array de usuarios. 
        telefono = Number(prompt("Ingresá tu teléfono"));
        email = prompt("Ingresá tu email")

        let confirmaAgregar = prompt(`Has ingresado los siguientes datos:

        NOMBRE: ${nombre}
        TELÉFONO: ${telefono}
        EMAIL: ${email}

        --------------------------------
        ¿Desea confirmar esta operación?

        ✅ SI
        ❌ NO
        `);

        confirmaAgregar = confirmaAgregar.toUpperCase()

        if (confirmaAgregar === "SI") {
            // No es necesario usar ${} para los nombre e email. 
            // Esto sirve para convertir variables a string, 
            // pero nombre e email ya son strings. 
            // Funcionaria igual si escribieramos:
            // let usuarioNuevo = [id, nombre, telefono, email];
            // (escribime si esto no esta claro)
            let usuarioNuevo = [id, `${nombre}`, telefono, `${email}`];
            usuarios.push(usuarioNuevo);
            alert("✅ Operación realizada exitosamente");

            let repiteOperacionAgregar = prompt("🔄 ¿Desea repetir la operación? SI/NO")

            repiteOperacionAgregar = repiteOperacionAgregar.toUpperCase()

            if (repiteOperacionAgregar != "SI") {
                accion = "";
            }

        } else {
            alert("❌ La operación no se ha realizado");
        }

    //-------------------OBTENER--------------------//    
    } else if (accion === "OBTENER") {
        // no es buena practica dejar herramientas de desarrollo, como console.log o debugger, 
        // en un codigo ya entregado
        // para mi no importa, pero es algo a acostumbrarse de a poco
        // para que no ocurra mas adelante 
        debugger;
        let opcionDeBusqueda = "";

        opcionDeBusqueda = prompt(`
            ---------------------------------
            Seleccione una opción de búsqueda:
            ---------------------------------

            ID
            NOMBRE
            TELEFONO
            EMAIL
        `)

        opcionDeBusqueda = opcionDeBusqueda.toUpperCase()

        if (opcionDeBusqueda === "ID" || opcionDeBusqueda === "NOMBRE" || opcionDeBusqueda === "TELEFONO" || opcionDeBusqueda === "EMAIL") {

            let valorDeBusqueda = prompt(`Ingrese el valor de ${opcionDeBusqueda} a buscar`)

            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i].length; j++) {

                    if (usuarios[i][j] == valorDeBusqueda) {
                        alert(`
                        Los datos del usuario son:
                        
                        ID: ${usuarios[i][0]}
                        NOMBRE: ${usuarios[i][1]}
                        TELEFONO: ${usuarios[i][2]}
                        EMAIL: ${usuarios[i][3]}

                        `)
                    }
                }
            }

            let repiteOperacionObtener = prompt("🔄 ¿Desea repetir la operación? SI/NO")

            repiteOperacionObtener = repiteOperacionObtener.toUpperCase()

            if (repiteOperacionObtener != "SI") {
                accion = "";
            }
        }

    //-------------------LISTAR--------------------//    
    } else if (accion === "LISTAR") {

        let listaDeUsuarios = "";

        for (let i = 0; i < usuarios.length; i++) {
             listaDeUsuarios = listaDeUsuarios + `
             ID: ${usuarios[i][0]}
             NOMBRE: ${usuarios[i][1]}
             TELEFONO: ${usuarios[i][2]}
             EMAIL: ${usuarios[i][3]}
             ---------------------------------
             `;
            
        }
        alert(listaDeUsuarios)

        let repiteOperacionListar = prompt("🔄 ¿Desea repetir la operación? SI/NO")

        repiteOperacionListar = repiteOperacionListar.toUpperCase()

        if (repiteOperacionListar != "SI") {
            accion = "";
        }
    
    //-------------------MODIFICAR--------------------//    
    } else if (accion === "MODIFICAR") {

    //-------------------ELIMINAR--------------------// 
    } else if (accion === "ELIMINAR") {
        
        let usuarioAEliminar = prompt(`Ingrese el ID del usuario a eliminar`);

        for (let i = 0; i < usuarios.length; i++) {
            
            // aca un error casi imperceptible tiene consecuencias grandes
            // no estas preguntando si usuarios[i][0] es igual a usuarioaEliminar, 
            // estas asignandole a usuarios[i][0] el valor de usuarioaEliminar
            // (usas un = en lugar de dos)
            
            // Como una asignacion de valor siempre termina siendo true, 
            // el codigo siempre entra a este if tras hacer la asignacion
            // en consecuencia:
            // - siempre se borra al primer usuario
            // - ese siempre aparece con el id que escribimos 
            if (usuarios[i][0] = usuarioAEliminar) {

                let confirmaEliminar = prompt(`
                Los datos del usuario seleccionado son:
                
                ID: ${usuarios[i][0]}
                NOMBRE: ${usuarios[i][1]}
                TELEFONO: ${usuarios[i][2]}
                EMAIL: ${usuarios[i][3]}
                
                --------------------------------
                ¿Desea confirmar esta operación?

                ✅ SI
                ❌ NO
                `)

                if ( confirmaEliminar === "SI") {
                    usuarios.splice(i, 1)
                    alert("✅ Operación realizada exitosamente")
                } else {
                    alert("❌ La operación no se ha realizado")
                }

                confirmaEliminar = confirmaEliminar.toUpperCase()

            }

            let repiteOperacionEliminar = prompt("🔄 ¿Desea repetir la operación? SI/NO")

            repiteOperacionEliminar = repiteOperacionEliminar.toUpperCase()

            if (repiteOperacionEliminar != "SI") {
                accion = "";
            }
        }

        
    //-------------------SALIR--------------------//    
    } else if (accion === "SALIR") {

        let confirmarSalir = "";
        confirmarSalir = confirmarSalir.toUpperCase()

        confirmarSalir = prompt(`
        --------------------------------
        ¿Desea confirmar esta operación?

        ✅ SI
        ❌ NO
        `)
        
        if (confirmarSalir === "SI") {
            alert("👋 Hasta pronto")
        } else {
            
        }

    } else {

        alert(`
        ❌ Opción inválida
        Por favor ingrese una opción correcta
        `)
        accion = ""

    }
}
