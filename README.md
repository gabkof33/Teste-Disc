# Teste-Disc
O Disc (ou DISC) é uma ferramenta de avaliação comportamental que  identifica o estilo predominante de uma pessoa com base em quatro fatores principais

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste DISC</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <h1>Teste DISC - Descubra seu Perfil Comportamental</h1>
        <div class="test-section">
            <form id="disc-form">
                <ol>
                    <!-- Pergunta 1 -->
                    <li>
                        <label>Eu me considero uma pessoa que toma decisões rapidamente:</label><br>
                        <input type="radio" name="pergunta1" value="Dominância" required> Concordo<br>
                        <input type="radio" name="pergunta1" value="Estabilidade"> Discordo
                        <p class="explicacao">Concordo (Dominância): Pessoas com alta dominância são decisivas, assertivas e confiantes ao tomar decisões.</p>
                        <p class="explicacao">Discordo (Estabilidade): Pessoas mais estáveis preferem tomar tempo para pensar e analisar antes de decidir.</p>
                    </li>
            
                    <!-- Pergunta 2 -->
                    <li>
                        <label>Eu gosto de trabalhar em equipe e colaborar com os outros:</label><br>
                        <input type="radio" name="pergunta2" value="Influência" required> Concordo<br>
                        <input type="radio" name="pergunta2" value="Conformidade"> Discordo
                        <p class="explicacao">Concordo (Influência): Pessoas com alta influência são sociáveis e gostam de se conectar e trabalhar com outras pessoas.</p>
                        <p class="explicacao">Discordo (Conformidade): Pessoas que valorizam conformidade preferem trabalhar de forma mais independente e seguir normas estabelecidas.</p>
                    </li>
            
                    <!-- Pergunta 3 -->
                    <li>
                        <label>Eu me sinto confortável em situações competitivas:</label><br>
                        <input type="radio" name="pergunta3" value="Dominância" required> Concordo<br>
                        <input type="radio" name="pergunta3" value="Estabilidade"> Discordo
                        <p class="explicacao">Concordo (Dominância): Pessoas com alta dominância gostam de desafios e situações competitivas.</p>
                        <p class="explicacao">Discordo (Estabilidade): Pessoas mais estáveis preferem ambientes mais cooperativos e harmônicos.</p>
                    </li>
            
                    <!-- Pergunta 4 -->
                    <li>
                        <label>Eu prefiro seguir regras e procedimentos definidos:</label><br>
                        <input type="radio" name="pergunta4" value="Conformidade" required> Concordo<br>
                        <input type="radio" name="pergunta4" value="Influência"> Discordo
                        <p class="explicacao">Concordo (Conformidade): Pessoas que têm alta conformidade valorizam normas, regras e precisão no trabalho.</p>
                        <p class="explicacao">Discordo (Influência): Pessoas com alta influência podem preferir mais liberdade e flexibilidade para tomar decisões.</p>
                    </li>
            
                    <!-- Pergunta 5 -->
                    <li>
                        <label>Eu tento evitar conflitos e discussões:</label><br>
                        <input type="radio" name="pergunta5" value="Estabilidade" required> Concordo<br>
                        <input type="radio" name="pergunta5" value="Dominância"> Discordo
                        <p class="explicacao">Concordo (Estabilidade): Pessoas estáveis buscam a harmonia e tendem a evitar confrontos.</p>
                        <p class="explicacao">Discordo (Dominância): Pessoas com alta dominância são mais dispostas a enfrentar conflitos para resolver questões.</p>
                    </li>
            
                    <!-- Pergunta 6 -->
                    <li>
                        <label>Eu me adapto facilmente a novas situações:</label><br>
                        <input type="radio" name="pergunta6" value="Influência" required> Concordo<br>
                        <input type="radio" name="pergunta6" value="Conformidade"> Discordo
                        <p class="explicacao">Concordo (Influência): Pessoas com alta influência são flexíveis e adaptáveis a mudanças.</p>
                        <p class="explicacao">Discordo (Conformidade): Pessoas com alta conformidade preferem ambientes estáveis e previsíveis.</p>
                    </li>
            
                    <!-- Pergunta 7 -->
                    <li>
                        <label>Eu sou cuidadoso(a) e detalhista em meu trabalho:</label><br>
                        <input type="radio" name="pergunta7" value="Conformidade" required> Concordo<br>
                        <input type="radio" name="pergunta7" value="Influência"> Discordo
                        <p class="explicacao">Concordo (Conformidade): Pessoas com alta conformidade são precisas e focam na exatidão dos detalhes.</p>
                        <p class="explicacao">Discordo (Influência): Pessoas com alta influência podem ser mais espontâneas e menos focadas em detalhes minuciosos.</p>
                    </li>
            
                    <!-- Pergunta 8 -->
                    <li>
                        <label>Eu sou uma pessoa motivada por desafios:</label><br>
                        <input type="radio" name="pergunta8" value="Dominância" required> Concordo<br>
                        <input type="radio" name="pergunta8" value="Estabilidade"> Discordo
                        <p class="explicacao">Concordo (Dominância): Pessoas com alta dominância gostam de competir e enfrentar novos desafios.</p>
                        <p class="explicacao">Discordo (Estabilidade): Pessoas estáveis preferem situações mais seguras e previsíveis.</p>
                    </li>
            
                    <!-- Pergunta 9 -->
                    <li>
                        <label>Eu gosto de ajudar as pessoas e criar um ambiente amigável:</label><br>
                        <input type="radio" name="pergunta9" value="Influência" required> Concordo<br>
                        <input type="radio" name="pergunta9" value="Dominância"> Discordo
                        <p class="explicacao">Concordo (Influência): Pessoas com alta influência têm habilidades interpessoais e buscam conexões sociais.</p>
                        <p class="explicacao">Discordo (Dominância): Pessoas com alta dominância são mais orientadas para resultados e menos focadas em socializar.</p>
                    </li>
            
                    <!-- Pergunta 10 -->
                    <li>
                        <label>Eu me sinto à vontade trabalhando sob pressão:</label><br>
                        <input type="radio" name="pergunta10" value="Dominância" required> Concordo<br>
                        <input type="radio" name="pergunta10" value="Estabilidade"> Discordo
                        <p class="explicacao">Concordo (Dominância): Pessoas com alta dominância são mais confortáveis em ambientes de alta pressão e desafios.</p>
                        <p class="explicacao">Discordo (Estabilidade): Pessoas estáveis preferem ambientes com menos pressão e mais estabilidade.</p>
                    </li>
            
                    <!-- Outras perguntas continuam no mesmo formato -->
                    <!-- Acrescente mais perguntas até chegar às 20 -->
                    
                    <!-- Finalizando o formulário -->
                </ol>
                <button type="button" onclick="calcularResultados()">Ver Resultado</button>
            </form>
            
        </div>
    </div>
    <div class="result-section">
        <h2>Resultado do Perfil DISC</h2>
        <div id="disc-resultado-texto"></div>
    
        <h3>Gráfico de Barras</h3>
        <canvas id="grafico-barras"></canvas> <!-- Gráfico de Barras -->
    
        <h3>Gráfico de Radar (Teia)</h3>
        <canvas id="grafico-radar"></canvas> <!-- Gráfico de Radar -->
    </div>
    
    <script src="script.js"></script>
</body>
</html>

