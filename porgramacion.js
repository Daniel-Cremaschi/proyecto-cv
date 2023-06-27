
/*el js lo copie del video de Rodrigo, no sabia como hacerlo*/


class Trabajo {
    lugar;
    puesto;
    carrera;
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
        carrera.innerHTML = "<b>Carrera: <b>" + this.carrera;
        lapso.innerHTML = "<b>Lapso: <b>" + this.lapso;
        laburo.appendChild(lugar);
        laburo.appendChild(puesto);
        laburo.appendChild(carrera);
        laburo.appendChild(lapso);
        laburo.style.padding = "1em";
        laburo.style.border = "1px solid black";
        laburo.style.margin = "3em";
        trabajos.appendChild(laburo);
    }
}

let trabajos = [];
trabajos[0] = new Trabajo(
    "Grupo Multifood",
    "Gerente de restaurant Möoi",
    "Gerenciamiento integral de sucursal",
    "05/2006 a la actualidad"
);
trabajos[1] = new Trabajo(
    "Emp APPSIS",
    "Empleado administrativo",
    "Compras, proveedores, servicios al cliente",
    "03/2003 al 04/2006"
);


function dinamico() {
    trabajos.forEach(trabajo => {
        trabajo.mostrarTrabajo();
    })
}

function contraer(){
    let educacion = document.getElementById("educacion");
    educacion.style.display == "block" ?
    educacion.style.display = "none" :
    educacion.style.display = "block";
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