// var candidatos = [

//     {
//         nome: 'Jair Bolsonaro',
//         numero: '17',
//         partido: 'PSL',
//     },
//     {
//         nome: 'Fernando Haddad',
//         numero: '13',
//         partido: 'PT',
//     },
//     {
//         nome: 'Ciro Gomes',
//         numero: '12',
//         partido: 'PDT',
//     },
//     {
//         nome: 'Geraldo Alckmin',
//         numero: '45',
//         partido: 'PSDB',
//     },
//     {
//         nome: 'Marina Silva',
//         numero: '18',
//         partido: 'Rede',
//     },
//     {
//         nome: 'Alvaro Dias',
//         numero: '19',
//         partido: 'Podemos',
//     },
//     {
//         nome: 'Henrique Meirelles',
//         numero: '15',
//         partido: 'MDB',
//     },
//     {
//         nome: 'João Amoêdo',
//         numero: '30',
//         partido: 'Novo',
//     },
//     {
//         nome: 'Guilherme Boulos',
//         numero: '50',
//         partido: 'PSOL',
//     },
//     {
//         nome: 'José Maria Eymael ',
//         numero: '27',
//         partido: 'Democracia Cristã',
//     },
//     {
//         nome: 'Cabo Daciolo',
//         numero: '51',
//         partido: 'Patriota',
//     },
//     {
//         nome: 'João Goulart Filho',
//         numero: '54',
//         partido: 'PPL',
//     },
//     {
//         nome: 'Vera Lucia',
//         numero: '16',
//         partido: 'PSTU',
//     }
// ]
// var i = 0;
// var visor = document.querySelector('#visor');
// var teclado = document.querySelector('.botao');

// for (i == 0; i < candidatos.length; i++) {
//     var numeros = candidatos[i].numero;

//     visor.addEventListener('input', function () {
//         // alert(visor.value)
//         if (visor.value == numeros) {
//             alert(visor.value);
//         }
//     })
     
// }  

// console.log(numeros)

var teclado = document.querySelectorAll('.botao');

teclado.forEach(function(valor){

})



// Instanciando os pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");

// Loop que percorre os pacientes da tabela e calcula o IMC
for (var i = 0; i < pacientes.length; i = i + 1) {

    //variavel referente ao indice do paciente
    var paciente = pacientes[i];

    // variaveis elemento td
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    //Variaveis dados da tabela
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    // Variaveis de validação
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    // Validação altura e peso
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValido) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add('paciente-invalido');
    }

    // Calculo IMC
    if (pesoEhValido && alturaEhValido) {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso){
    if (peso <=200 && peso >= 0 ){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if (altura <= 3.00 && altura >= 0){
        return true;
    } else{
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}