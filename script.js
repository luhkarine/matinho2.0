const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com um grupo de jovens maltratando um animal silvestre, qual é a sua reação?",
        alternativas: [
            {
                texto: "Eu ligaria para a policia ambiental e esperaria ela chegar para puni-los",
                afirmacao: "No início pensou em ignorar a situação, para evitar problemas, porém decidiu fazer a coisa certa. "
            },
            {
                texto: "Eu não me envolveria e passaria calado",
                afirmacao: "Por mais que a situação fosse ruim, fazer o bem seria muito arriscado para mim"
            }
        ]
    },
    {
        enunciado: " Enquanto assistia televisão, se deparou com inúmeras notícias sobre a atual situação da saúde ecológica do país, que por sinal, não parece estar muito boa, oque você pensa?",
        alternativas: [
            {
                texto: "Eu deveria fazer a minha parte para tentar mudar essa situação e icentivar os outros a fazer o mesmo.",
                afirmacao: "Diminuir a poluição é díficil,  porém você sabe que com pequenos esforços pode melhorar o meio ambiente."
            },
            {
                texto: "Não há o que eu possa fazer, independente da boa ação, o mundo vai acabar um dia mesmo.",
                afirmacao: "Você ficou desacreditado de que o mundo possa melhorar"
            }
        ]
    },
    {
        enunciado: "Durante a sala de aula, a professora apresenta um projeto voluntário sobre a conscientização o descarte correto do lixo e reciclagem, e convida os alunos a participarem, o que você decide fazer",
        alternativas: [
            {
                texto: "É uma boa ideia, mesmo não valendo nota, eu deveria participar para tornar o mundo um lugar melhor",
                afirmacao: "Separar o lixo é trabalhoso, entretando você sabe que é o melhor para o meio ambiente"
            },
            {
                texto: "Eu não vou particiar, preciso fazer outras coisas além disso",
                afirmacao: "As outras preocupações da vida te impedem de enxergar o futuro do planeta"
            }
        ]
    },
    {
        enunciado: "Na escola, você esta andando com um amigo e ele joga um papel de bala no chão, você faz alguma coisa?",
        alternativas: [
            {
                texto: "Eu corrigo ele e peço para ele pegar o papel do chão para descartar no ligar correto",
                afirmacao: "Para você, o correto é 'lixo no lixo', se não tem um lixo proximo, segure-o até encontrar um local de descarte correto."
            },
            {
                texto: "Eu não faço nada, um papel de bala não vai fazer diferença",
                afirmacao: "Para você, um pequeno papel não faz diferença, mas para o planeta faz."
            }
        ]
    },
    {
        enunciado: "A temperatura está razoavel,e o ar-condicionado esta ligado, você olha e pensa",
        alternativas: [
            {
                texto: "Deveria desliga-lo para economizar um pouco de energia e aproveitar o clima natural",
                afirmacao: "Pensando no própio consumo, você salvou um pouco do planeta para que as próximas gerações possam viver."
            },
            {
                texto: "Vou deixar ligado, se eu tenho vou usar mesmo",
                afirmacao: "Você pensa em si mesmo e não no impacto do meio ambiente, sendo assim, não aproveita o que a natureza pode te oferecer e impede as futuras gerações também."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
