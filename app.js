//Aqui inicia lo logica de formulario de suma
const formSum = document.querySelector("#form_sum");
formSum.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_sum_num1").value;
    const inputnum2 = document.querySelector("#form_sum_num2").value;
    const inputresult = document.querySelector("#form_sum_result");
//operacion suma
const suma = Number(inputnum1) + Number(inputnum2);
    inputresult.value = suma;
    console.log(suma);
});


//Aqui empiza logica del formulario de resta
const formRest =  document.querySelector("#form_rest");
formRest.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_rest_num1").value;
    const inputnum2 = document.querySelector("#form_rest_num2").value;
    const inputresult = document.querySelector("#form_rest_result");
//operacion resta
const resta = Number(inputnum1) - Number(inputnum2);
inputresult.value = resta;
console.log(resta);
});

//Aqui termina la logica del formulario de resta

//Aqui empiza logica del formulario de multiplicación 
const formMult =  document.querySelector("#form_mult");
formMult.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_mult_num1").value;
    const inputnum2 = document.querySelector("#form_mult_num2").value;
    const inputresult = document.querySelector("#form_mult_result");
//operacion multiplicación
const multiplicación = Number(inputnum1) * Number(inputnum2);
inputresult.value = multiplicación;
console.log(multiplicación);
});

//Aqui termina la logica del formulario de multiplicación

//Aqui empiza logica del formulario de division
const formDivi =  document.querySelector("#form_divi");
formDivi.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_divi_num1").value;
    const inputnum2 = document.querySelector("#form_divi_num2").value;
    const inputresult = document.querySelector("#form_divi_result");
//operacion división
const division = Number(inputnum1) / Number(inputnum2);
inputresult.value = division;
console.log(division);
});

//Aqui termina la logica del formulario de division

//Aqui empiza logica del formulario de raiz
const formRaizc =  document.querySelector("#form_raiz");
formRaizc.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_raiz_num1").value;
    const inputresult = document.querySelector("#form_raiz_result");
//operacion raiz
const raiz = Math.sqrt(Number(inputnum1));
inputresult.value = raiz;
console.log(raiz);
});

//Aqui termina la logica del formulario de raiz

//Aqui empiza logica del formulario de raiz cubica
const formRaizcub =  document.querySelector("#form_raizcu");
formRaizcub.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_raizcu_num1").value;
    const inputresult = document.querySelector("#form_raizcu_result");
//operacion raiz cubica
const raizcubi = Number(inputnum1) ** (1/3);
inputresult.value = raizcubi;
console.log(raizcubi);
});

//Aqui termina la logica del formulario de raiz cubica

//Aqui empiza logica del formulario de elevado al cuadrado
const formCuadrado =  document.querySelector("#form_cuadra");
formCuadrado.addEventListener("submit",()=>{
    console.log("El formulario esta funcionando")
    const inputnum1 = document.querySelector("#form_cuadra_num1").value;
    const inputresult = document.querySelector("#form_cuadra_result");
//operacion Elvado al cuadrado
const cuadrado = Number(inputnum1) ** 2;
inputresult.value = cuadrado;
console.log(cuadrado);
});

//Aqui termina la logica del formulario de elevado al cuadrado



















