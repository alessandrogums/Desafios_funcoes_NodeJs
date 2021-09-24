//Desenvolva um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
//Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
//que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// misturar latas e galões, de forma que o desperdício de tinta seja menor. Considere as latas cheias.

 function lata_18(area){
    let litros=area/6;
    let qte_lata=0
    if (litros % 18 !== 0){
       qte_lata= Math.trunc(litros/18)+1;
    }else{
       qte_lata=Math.trunc(litros/18);
    }
    let preço=80*qte_lata;
    console.log(`a quantidade de latas necessária é ${qte_lata}, e o preço fica sendo de R$ ${preço}`)
}
function galao_36(area){
    let litros=area/6;
    let qte_galao=0;
    if (litros % 3.6 !==0){
        qte_galao=Math.trunc(litros/3.6)+1;
        
    }else{
        qte_galao=Math.trunc(litros/3.6);
        
    }
    preço=25*qte_galao;
    console.log(`a quantidade de galoes necessários é ${qte_galao}, e o preço fica sendo de R${preço}`)

}
function mistura(area){
    let litros = area/6;
    let qte_galao=0;
    let qte_lata=0;
    let preço=0
    if (litros % 18 >=11){
        qte_lata=Math.ceil(litros/18);
    }else{
        qte_lata=Math.trunc(litros/18);
        qte_galao=Math.ceil((litros%18)/3.6)
    preço=25*qte_galao + 80*qte_lata
    }
    console.log(`a quantidade de galões foi ${qte_galao} e a quantidade de latas foi ${qte_lata} para fabricação da mistura,\n
    logo o preço dessa mistura foi R$ ${preço} `)
}

 mistura(175)
