let usuarios = [
    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1, "Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"]
];

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

        if (opcionDeBusqueda === "ID" || "NOMBRE" || "TELEFONO" || "EMAIL") {
            
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios.length; j++) {
                    if (usuarios[i][j] = opcionDeBusqueda) {
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
    
    //-------------------MODIFICAR--------------------//    
    } else if (accion === "MODIFICAR") {

    //-------------------ELIMINAR--------------------// 
    } else if (accion === "ELIMINAR") {
        
        let usuarioAEliminar = prompt(`Ingrese el ID del usuario a eliminar`);

        for (let i = 0; i < usuarios.length; i++) {
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
            }

            confirmaEliminar = confirmaEliminar.toUpperCase()
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

        alert(`❌ Opción inválida
        Por favor ingrese una opción correcta`)

    }
}
