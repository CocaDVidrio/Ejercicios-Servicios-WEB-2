function esperar(tiempo){
    return new Promise(resolve => setTimeout(resolve, tiempo));
} 

async function promesa() {
    console.log("Resolviendo Promesa")
    await esperar(2000);
    console.log("Promesa resulta");

}
promesa();