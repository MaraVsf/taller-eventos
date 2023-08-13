document.addEventListener("DOMContentLoaded", () => {
    const soyDiv = document.querySelector("div");
    const btn = document.querySelector("button");

    // Solución al problema donde el evento click del div también se disparaba.
    // Saque el onclick para mayor comodidad, y agrege el evento al js
    // Implemente el stopPropagation(), para que no siguiera activandose el evento del div.

    btn.addEventListener("click", (event) => {
        alert('Hola!');
        event.stopPropagation();
    });

    soyDiv.addEventListener("click", () => {
        alert('Hola! Soy el div');
    });
});