var btnConfirmar = document.querySelector('.btn-confirma');
var btnCorrige = document.querySelector('.btn-corrige');
var btnBranco = document.querySelector('.btn-branco');
var foto = document.querySelector('img');
var visor = document.querySelector('#visor');
var teclado = document.querySelectorAll('.botao');



teclado.forEach(function (valor) {
    valor.addEventListener('click', function () {
        visor.value += valor.value;
        //  var valornum =valor.value
    });
});


var candidatos = [

    bolsonaro = {
        nome: 'Jair Bolsonaro',
        numero: '17',
        partido: 'PSL',
    },
    haddad = {
        nome: 'Fernando Haddad',
        numero: '13',
        partido: 'PT',
    },
    ciro = {
        nome: 'Ciro Gomes',
        numero: '12',
        partido: 'PDT',
    },
    alckmin = {
        nome: 'Geraldo Alckmin',
        numero: '45',
        partido: 'PSDB',
    },
    marina = {
        nome: 'Marina Silva',
        numero: '18',
        partido: 'Rede',
    },
    alvaro = {
        nome: 'Alvaro Dias',
        numero: '19',
        partido: 'Podemos',
    },
    mierelles = {
        nome: 'Henrique Meirelles',
        numero: '15',
        partido: 'MDB',
    },
    amoedo = {
        nome: 'João Amoêdo',
        numero: '30',
        partido: 'Novo',
    },
    boulos = {
        nome: 'Guilherme Boulos',
        numero: '50',
        partido: 'PSOL',
    },
    jose = {
        nome: 'José Maria Eymael ',
        numero: '27',
        partido: 'Democracia Cristã',
    },
    cabo = {
        nome: 'Cabo Daciolo',
        numero: '51',
        partido: 'Patriota',
    },
    joao = {
        nome: 'João Goulart Filho',
        numero: '54',
        partido: 'PPL',
    },
    vera = {
        nome: 'Vera Lucia',
        numero: '16',
        partido: 'PSTU',
    }

]
visor.addEventListener('input', function () {

    if (visor.value == haddad.numero) {

        foto.setAttribute('src', 'img/prp20180903009-5764389.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == bolsonaro.numero) {
        foto.setAttribute('src', 'img/jair-bolsonaro.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == ciro.numero) {
        foto.setAttribute('src', 'img/ciro-gomes.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == alckmin.numero) {
        foto.setAttribute('src', 'img/geraldo-alckmin.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == alvaro.numero) {
        foto.setAttribute('src', './img/alvaro-dias.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == cabo.numero) {
        foto.setAttribute('src', './img/cabo-daciolo.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == marina.nuemro) {
        foto.setAttribute('src', './img/marina-silva.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == mierelles.numero) {
        foto.setAttribute('src', './img/henrique-meirelles.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == amoedo.numero) {
        foto.setAttribute('src', './img/joao-amoedo.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == boulos.numero) {
        foto.setAttribute('src', './img/guilherme-boulos.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == jose.numero) {
        foto.setAttribute('src', './img/eymael.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == joao.numero) {
        foto.setAttribute('src', './img/joao-goulart-filho.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == vera.numero) {
        foto.setAttribute('src', './img/vera.jpg');
        foto.setAttribute('class', "fotocandidato");
    };
    if (visor.value == "") {
        foto.setAttribute('src', '');
        foto.setAttribute('class', "fotocandidato");
    };

});