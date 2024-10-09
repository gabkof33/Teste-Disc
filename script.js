// Função para calcular os resultados
function calcularResultados() {
    // Armazenando respostas
    const respostas = {
        Dominância: 0,
        Influência: 0,
        Estabilidade: 0,
        Conformidade: 0
    };

    // Mapeando respostas do formulário
    const form = document.getElementById('disc-form');
    const formData = new FormData(form);

    // Contabilizando as respostas de acordo com as categorias
    formData.forEach((value) => {
        respostas[value]++;
    });

    // Exibir resultados
    exibirResultados(respostas);
}

// Função para exibir os resultados e gráficos
function exibirResultados(respostas) {
    const resultadoTexto = `
        Dominância: ${respostas.Dominância} <br>
        Influência: ${respostas.Influência} <br>
        Estabilidade: ${respostas.Estabilidade} <br>
        Conformidade: ${respostas.Conformidade}
    `;
    
    document.getElementById('disc-resultado-texto').innerHTML = resultadoTexto;

    // Gerar gráficos com animações
    gerarGraficoBarras(respostas);
    gerarGraficoRadar(respostas);
}

// Função para gerar gráfico de barras com animação
function gerarGraficoBarras(respostas) {
    const ctx = document.getElementById('grafico-barras').getContext('2d');
    if (window.graficoBarras) window.graficoBarras.destroy(); // Destruir gráfico anterior se já existir

    window.graficoBarras = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dominância', 'Influência', 'Estabilidade', 'Conformidade'],
            datasets: [{
                label: 'Pontuação DISC',
                data: [respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: Math.max(respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade) + 2
                }
            },
            animation: {
                duration: 2000, // Duração da animação de 2 segundos
                easing: 'easeInOutQuart' // Animação suave
            }
        }
    });
}

// Função para gerar gráfico de radar (teia) com animação
function gerarGraficoRadar(respostas) {
    const ctx = document.getElementById('grafico-radar').getContext('2d');
    if (window.graficoRadar) window.graficoRadar.destroy(); // Destruir gráfico anterior se já existir

    window.graficoRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Dominância', 'Influência', 'Estabilidade', 'Conformidade'],
            datasets: [{
                label: 'Perfil DISC',
                data: [respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2500, // Duração da animação de 2.5 segundos
                easing: 'easeInOutQuart' // Animação suave
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: Math.max(respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade) + 2
                }
            }
        }
    });
}

// Adicionando evento para calcular resultados ao clicar no botão
document.getElementById('disc-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    calcularResultados(); // Chama a função para calcular e exibir os resultados
});
