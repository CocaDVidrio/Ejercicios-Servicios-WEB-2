function promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("promesa resuelta");

        }, 2000)
    });
}
console.log("Resolviendo Promesa");
promesa().then(mensaje => {
    console.log(mensaje);
})


