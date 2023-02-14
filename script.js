const btnEncriptar = document.querySelector(".btn-encriptar");

btnEncriptar.addEventListener("click",(evento)=>{
    const texto = document.querySelector(".input-texto").value;
    const output = document.querySelector(".encriptado");
    input = document.querySelector(".input-texto");

    const cambio = ["ai","enter","imes", "ober","ufat"];
    const letra = ["a","e","i","o","u"];

    let encriptado =  texto.toLowerCase();

    
     //for (let j =0; j<5;j++){
      //  if(encriptado.includes(letra[j])){
        //    encriptado = encriptado.replaceAll(letra[j],cambio[j]);
        //}    
        encriptado= encriptado.replaceAll("a","ai").replaceAll("e","enter").
        replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
        
                
    //}
    
    output.innerHTML=encriptado;
    input.value = "";
    
})

const btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click",(evento)=>{
    const texto = document.querySelector(".input-texto").value;
    const output = document.querySelector(".encriptado");
    input = document.querySelector(".input-texto");
    let desencriptado= texto;

    const cambio = ["ai","enter","imes", "ober","ufat"];
    const letra = ["a","e","i","o","u"];

    //for (let i =0; i<5;i++){
      //  if(desencriptado.includes(cambio[i])){
        //    desencriptado = desencriptado.replaceAll(cambio[i],letra[i]);
      //  }
    //}
    desencriptado=desencriptado.replaceAll("imes","i").replaceAll("enter","e").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    output.innerHTML=desencriptado;
    input.value = "";
})

const btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click", evento =>{
    const output = document.querySelector(".encriptado");
    navigator.clipboard.writeText(output.value);
    output.innerHTML="";

})




