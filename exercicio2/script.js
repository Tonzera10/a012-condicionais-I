let nome = prompt('Digite aqui seu nome:');
let idade = Number(prompt('Digite aqui sua idade:'));
let terminouMedio = prompt('Você ja terminou o ensino médio?(sim ou não)');
let isCursandoOutraFaculdade = prompt('Você está cursando alguma faculdade?(sim ou não)');

console.log('Nome:',nome);
if(idade >= 18){
    console.log('É maior de idade')
}else{
	console.log('Não é maior de idade')
};
if(idade >= 17 && terminouMedio==='sim'){
    console.log('Terminou o ensino médio')
}else if(idade >= 17 && terminouMedio==='não'){
	console.log('Não terminou o ensino médio')
}else{
    console.log('Dado inválido')
};
if(idade >= 18 && isCursandoOutraFaculdade==='sim'){
    console.log('Está cursando faculdade')
}else if(idade >= 18 && isCursandoOutraFaculdade==='não'){
	console.log('Não está cursando faculdade')
}else{
    console.log('Dado inválido')
};