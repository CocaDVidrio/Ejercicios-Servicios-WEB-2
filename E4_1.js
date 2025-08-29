//expresion regular correo
function compruebaexpresion(email){
    const expresionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(expresionEmail.test(email)){
        console.log("Si es un correo");
    }else{
        console.log("No lo es");
    }

}

compruebaexpresion("pedroqp27@gmail.com");
compruebaexpresion("cheetos.19@hot_mail.com");
