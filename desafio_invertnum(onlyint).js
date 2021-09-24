//Desenvolva uma função que inverta o número inserido, porém utilizando o número inteiro, sem transformá-lo em vetor ou string.

function algarismos(numero){
    let algarism=0;
   while(numero >=1){
       numero/=10;
       algarism+=1;

   }
   return algarism;
}

function invertenum(numero){
    let qte_algarismos=algarismos(numero) -1;
    let valor = numero;
    let v=0;
    let num_invertido=0;
    let contador=-(qte_algarismos);
    let y=0;
    while (qte_algarismos>=contador){
        v=Math.trunc( valor/(10**(qte_algarismos)));
        valor=valor - v*(10**qte_algarismos);
        num_invertido=num_invertido + v*(10**y);
        contador++;
        y+=1;
        qte_algarismos-=1;
        console.log(qte_algarismos,contador)
    
    }
    return num_invertido;
}
console.log(invertenum(1434049))
