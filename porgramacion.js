
/*el js lo copie del video de Rodrigo, no sabia como hacerlo, le agregue lo de los links en el footer*/


class Trabajo {
    lugar;
    puesto;
    funcion;
    lapso;

    constructor(lugar, puesto, carrera, lapso) {
        this.lugar = lugar;
        this.puesto = puesto;
        this.carrera = carrera;
        this.lapso = lapso;
    }
    mostrarTrabajo() {
        let trabajos = document.getElementById("trabajos");
        let laburo = document.createElement("div");
        let lugar = document.createElement("p");
        let puesto = document.createElement("p");
        let carrera = document.createElement("p");
        let lapso = document.createElement("p");
        lugar.innerHTML = "<b>Lugar: <b>" + this.lugar;
        puesto.innerHTML = "<b>Puesto: <b>" + this.puesto;
        carrera.innerHTML = "<b>Función: <b>" + this.carrera;
        lapso.innerHTML = "<b>Lapso: <b>" + this.lapso;
        laburo.appendChild(lugar);
        laburo.appendChild(puesto);
        laburo.appendChild(carrera);
        laburo.appendChild(lapso);
        laburo.style.padding = "1em";
        laburo.style.border = "1px solid black";
        laburo.style.margin = "1em";
        trabajos.appendChild(laburo);
    }
}

let trabajos = [];
trabajos[0] = new Trabajo(
    "Grupo Multifood",
    "Gerente de restaurant Möoi",
    "Gerenciamiento integral de sucursal, proveedores, control de stock, caja, organización de horarios, 30 empleados a cargo. ",
    "05/2006 a la actualidad"
);
trabajos[1] = new Trabajo(
    "Emp APPSIS",
    "Empleado administrativo",
    "Compras, proveedores, servicios al cliente",
    "03/2003 al 04/2006"
);
trabajos[2] = new Trabajo(    
    "ADERCID Recreativos. Mantenimiento y explotacion de expendedoras automaticas",
    "Encargado de taller", 
    "Compras y manejo de stock de repuestos e insumos.",
    "12/1996 al 11/1999"
);


function dinamico() {
    trabajos.forEach(trabajo => {
        trabajo.mostrarTrabajo();
    })
}

function contraer(){
    let educacion = document.getElementById("educacion");
    educacion.style.display == "grid" ?
    educacion.style.display = "none" :
    educacion.style.display = "grid";
}


function aumentarFoto(identificador) {
    let foto = document.getElementById(identificador);
    foto.style.width = "20em";
    foto.style.float = "inline-end";

}

function disminuirFoto(identificador) {
    let foto = document.getElementById(identificador);
    foto.style.width = "14em";
    foto.style.float = "right";
}


//funcionalidad para acceder a los links del footer//
document.getElementById("link_git").addEventListener("click", function() {
    window.location.href = "https://www.github.com/daniel-cremaschi"; 
  });

  document.getElementById("link_linkd").addEventListener("click", function() {
    window.location.href = "https://linkedin.com/in/danielcremaschi"; 
  });

  document.getElementById("link_whatssp").addEventListener("click", function() {
    window.location.href = "https://web.whatsapp.com" ; 
  });

  document.getElementById("link_correo").addEventListener("click", function() {
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink; 
  });
  