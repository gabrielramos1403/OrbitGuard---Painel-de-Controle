const btnTema = document.getElementById('btnTema');

const btnAtualizar = document.getElementById('btnAtualizar');

const btnAlertas = document.getElementById('btnAlertas');

const listaAlertas = document.getElementById('listaAlertas');

const formRelatorio = document.getElementById('formRelatorio');

const mensagemConfirmacao = document.getElementById('mensagemConfirmacao');

const valorTemperatura = document.getElementById('valorTemperatura');


const valorEnergia = document.getElementById('valorEnergia');

const valorComunicacao = document.getElementById('valorComunicacao');
const valorStatus = document.getElementById('valorStatus');

const valorSensores = document.getElementById('valorSensores');
const textoStatus = document.getElementById('textoStatus');


const barraTemperatura = document.getElementById('barraTemperatura');
const barraEnergia = document.getElementById('barraEnergia');






barraTemperatura.style.width = '48%';
barraEnergia.style.width = '82%';

btnTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
        btnTema.textContent = 'Tema escuro';
    } else {
        btnTema.textContent = 'Tema claro';
    }
});




btnAtualizar.addEventListener('click', function () {
    atualizarDashboard();
});

btnAlertas.addEventListener('click', function () {
    alternarAlertas();
});




formRelatorio.addEventListener('submit', function (event) {
    event.preventDefault();

    const operador = document.getElementById('operador').value;
    const missaoId = document.getElementById('missaoId').value;

    const tipoOcorrencia = document.getElementById('tipoOcorrencia').value;

    mensagemConfirmacao.classList.add('aparecer');
    mensagemConfirmacao.innerHTML = `
        <strong>Relatório enviado com sucesso!</strong><br>

        Operador: ${operador}<br>
        Missão: ${missaoId}<br>
        Ocorrência registrada: ${tipoOcorrencia}
    `;

    formRelatorio.reset();


});

function atualizarDashboard() {
    const temperatura = gerarNumero(18, 38);
    const energia = gerarNumero(35, 100);
    const sensoresAtivos = gerarNumero(10, 14);
    const comunicacoes = ['Estável', 'Instável', 'Em análise'];
    const comunicacao = comunicacoes[gerarNumero(0, comunicacoes.length - 1)];

    valorTemperatura.textContent = temperatura + '°C';
    valorEnergia.textContent = energia + '%';
    valorComunicacao.textContent = comunicacao;
    valorSensores.textContent = sensoresAtivos + '/14';

    barraTemperatura.style.width = calcularBarraTemperatura(temperatura) + '%';
    barraEnergia.style.width = energia + '%';

    atualizarStatusOperacional(temperatura, energia, comunicacao, sensoresAtivos);
}




function atualizarStatusOperacional(temperatura, energia, comunicacao, sensoresAtivos) {
    valorStatus.classList.remove('status-ok', 'status-atencao', 'status-critico');

    if (temperatura > 34 || energia < 45 || sensoresAtivos < 11) {
        valorStatus.textContent = 'Crítico';
        valorStatus.classList.add('status-critico');
        textoStatus.textContent = 'A missão precisa de atenção imediata nos sistemas principais.';
    } else if (temperatura > 30 || energia < 60 || comunicacao !== 'Estável') {
        valorStatus.textContent = 'Atenção';
        valorStatus.classList.add('status-atencao');
        textoStatus.textContent = 'Alguns sistemas estão fora da faixa ideal e devem ser acompanhados.';
    } else {
        valorStatus.textContent = 'Operando';
        valorStatus.classList.add('status-ok');
        textoStatus.textContent = 'Todos os sistemas estão dentro do esperado.';
    }
}






function alternarAlertas() {
    if (listaAlertas.style.display === 'none') {
        listaAlertas.style.display = 'block';
        btnAlertas.textContent = 'Ocultar';
    } else {
        listaAlertas.style.display = 'none';
        btnAlertas.textContent = 'Exibir';
    }
}

function gerarNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function calcularBarraTemperatura(temperatura) {
    return Math.min(100, temperatura * 2);
}