console.log("JS cargado correctamente");

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

/* CARRITO */
function mostrarCarrito() {
    let tabla = document.getElementById("carrito");
    let total = 0;

    tabla.innerHTML = "";

    let resumen = {};

    carrito.forEach(p => {
        if (!resumen[p.nombre]) {
            resumen[p.nombre] = { precio: p.precio, cantidad: 1 };
        } else {
            resumen[p.nombre].cantidad++;
        }
    });

    for (let nombre in resumen) {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>$${resumen[nombre].precio}</td>
            <td>${resumen[nombre].cantidad}</td>
        `;

        tabla.appendChild(fila);
        total += resumen[nombre].precio * resumen[nombre].cantidad;
    }

    document.getElementById("total").textContent = "Total: $" + total;
}

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

/* COMPRA */
function finalizarCompra(e) {
    e.preventDefault();

    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    if (!correo.includes("@")) return alert("Correo inválido");
    if (!/^[0-9]+$/.test(telefono)) return alert("Teléfono inválido");

    let total = carrito.reduce((acc, p) => acc + p.precio, 0);

    alert("✅ Compra realizada\nTotal: $" + total);

    sessionStorage.clear();
    location.reload();
}

/* LOGIN SIMULADO */
function login() {
    let usuario = {
        name: "Alejandra"
    };

    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    document.getElementById("bienvenida").textContent =
        "Bienvenido " + usuario.name;

    alert("Inicio de sesión exitoso");
}

/* MANTENER SESIÓN */
function manejarLogin() {
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (usuario) {
        document.getElementById("bienvenida").textContent =
            "Bienvenido " + usuario.name;
    }
}

/* LOGOUT */
function logout() {
    sessionStorage.clear();
    location.reload();
}

/* INICIO */
window.onload = () => {
    manejarLogin();
    mostrarCarrito();
};