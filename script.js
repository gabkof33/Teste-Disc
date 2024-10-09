// script.js

// Função para exibir o gráfico de barras com animação
function exibirGraficoBarras(respostas) {
    const ctxBar = document.getElementById('disc-chart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Dominância', 'Influência', 'Estabilidade', 'Conformidade'],
            datasets: [{
                label: 'Pontuação DISC',
                data: [respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)', // Dominância
                    'rgba(54, 162, 235, 0.5)', // Influência
                    'rgba(75, 192, 192, 0.5)', // Estabilidade
                    'rgba(153, 102, 255, 0.5)'  // Conformidade
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
            animation: {
                duration: 2000, // Duração da animação em milissegundos (2 segundos)
                easing: 'easeOutBounce' // Tipo de animação (easeOutBounce para efeito de salto)
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para exibir o gráfico de teia (radar) com animação
function exibirGraficoTeia(respostas) {
    const ctxRadar = document.createElement('canvas');
    ctxRadar.setAttribute("id", "disc-chart-radar");
    document.querySelector('.result-section').appendChild(ctxRadar);

    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Dominância', 'Influência', 'Estabilidade', 'Conformidade'],
            datasets: [{
                label: 'Perfil DISC',
                data: [respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 159, 64, 1)'
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2500, // Duração da animação (2.5 segundos)
                easing: 'easeInOutQuart' // Tipo de animação (easeInOutQuart para suavidade)
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: Math.max(respostas.Dominância, respostas.Influência, respostas.Estabilidade, respostas.Conformidade) + 1
                }
            }
        }
    });
}
