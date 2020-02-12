// DOM (Document Object Model) é o modelo de padrão e interface que define propriedades, métodos e eventos de elementos.

var nome = "Victor Sousa";
var n1 = 19;
var n2 = 10;
var frase = "Japão é o melhor time do mundo."

var lista = ["maça", "pêra", "laranja"];
var fruta = {nome:"maça", cor:"vermelha"}; // Dicionário
var alimentos = [{nome:"abacate", cor:"verde"}, {nome:"uva", cor:"roxa"}]; // Lista de dicionários

// var idade = prompt("Qual é a sua idade? ");

var count = 0;
var d = new Date();

/* 
    alert(nome + " tem " + idade + " anos");
    alert(idade + idade2);
*/

console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());

// alert(frase.replace("Japão", "Brasil"));

/*
    ARRAYS
*/
console.log(lista[0]);
lista.pop(); // retira o último elemento do array
lista.push("uva"); // Insere elemento no array
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(' | '));

console.log(fruta.nome);
// alert(fruta.cor);

console.log(alimentos[1].nome);
// alert(alimentos[1].cor);

/*
    CONDICIONAIS

    if(idade >= 18){
        alert("Maior de idade");
    }else{
        alert("Menor de idade");
    }
*/

/*
    LAÇOS DE REPETIÇÃO

while(count <= 5){
    console.log(count);
    // count = count + 1;
    alert(count);
    count++;
}

*/

for(count = 0; count <= 5; count++){
    console.log(count);
}

/* 
    DATA

alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/* 
    FUNÇÕES

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual é a sua idade? ");
console.log(validaIdade(idade));

*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar.");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Novo texto/Obrigado por passar o mouse aqui.";
    elemento.innerHTML = "Novo texto/Obrigado por passar o mouse aqui.";
    // alert("Trocar texto.");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}