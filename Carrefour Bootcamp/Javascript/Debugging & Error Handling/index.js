function validaArray(arr, num){
   try {
    if (!arr && !num) throw new ReferenceError("Envie os dados");

    if (typeof arr !== 'object') throw new TypeError("Arr deve ser do tipo object");

    if (typeof num !== 'number') throw new TypeError("Num deve ser do tipo number");

    if (arr.length != num) throw new RangeError("Tamanho inválido");

    return arr;

   } catch (e) {
       if (e instanceof ReferenceError) {
           console.log("Esse erro é um ReferenceError")
           //console.log(e.name)
           //console.log(e.stack)
           console.log(e.message)
       } else if (e instanceof TypeError){
        console.log("Esse erro é um TypeError")
        //console.log(e.name)
        //console.log(e.stack)
        console.log(e.message)
       } else if (e instanceof RangeError) {
        console.log("Esse erro é um RangeError")
        //console.log(e.name)
        //console.log(e.stack)
        console.log(e.message)
       } else {
           console.log("Ocorreu um tipo de erro não esperado" + e)
       }
   }

}

console.log(validaArray(['olá', 'batata', 'linguiça', 'hahaha', 'mama'], 5))