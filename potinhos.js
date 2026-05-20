// ── 365 FRASES ────────────────────────────────────────────────────────────────
const mensagens = [
  // 1–50
  "💜 Meu amor, você é a melhor escolha que eu já fiz.",
  "🤍 Amar você é fácil, porque você é meu lar.",
  "💜 Mesmo quando tudo estava distante, meu coração sempre foi seu.",
  "🤍 Você trouxe paz para um coração que sentia saudade.",
  "💜 Desde que você voltou, meus dias têm mais cor.",
  "🤍 Meu sorriso começa quando penso em você.",
  "💜 Você é a calmaria no meio do meu caos.",
  "🤍 Amar você é sentir que tudo faz sentido.",
  "💜 Meu coração te reconheceu antes mesmo de eu entender.",
  "🤍 Você é meu pensamento favorito todos os dias.",
  "💜 Não importa o tempo, eu sempre escolheria você.",
  "🤍 Você é a resposta das minhas orações silenciosas.",
  "💜 Meu amor por você só cresce, nunca diminui.",
  "🤍 Estar com você é estar em paz.",
  "💜 Você é a certeza mais bonita que eu tenho.",
  "🤍 Meu coração sorri quando sente o seu.",
  "💜 Amar você é meu hábito favorito.",
  "🤍 Você é meu refúgio seguro.",
  "💜 Meu amor, você faz meus dias melhores.",
  "🤍 Eu amo cada detalhe seu.",
  "💜 Você é o sonho que virou realidade.",
  "🤍 Meu coração escolheu você e nunca se arrependeu.",
  "💜 Amar você é meu maior orgulho.",
  "🤍 Você é a parte mais bonita da minha história.",
  "💜 Eu amo quem sou quando estou com você.",
  "🤍 Seu amor me fortalece.",
  "💜 Você é meu hoje e todos os meus amanhãs.",
  "🤍 Meu amor por você é tranquilo e verdadeiro.",
  "💜 Você é o abraço que meu coração precisava.",
  "🤍 Amar você é simples, leve e sincero.",
  "💜 Meu amor, você é tudo o que pedi a Deus.",
  "🤍 Você é minha melhor companhia.",
  "💜 Meu coração é seu lar.",
  "🤍 Você faz até os dias comuns serem especiais.",
  "💜 Amar você é meu destino favorito.",
  "🤍 Seu amor me faz acreditar ainda mais.",
  "💜 Você é minha pessoa favorita no mundo.",
  "🤍 Meu coração encontrou paz em você.",
  "💜 Eu te escolheria mil vezes.",
  "🤍 Você é meu melhor começo e meu melhor fim.",
  "💜 Amar você é natural.",
  "🤍 Você é meu pensamento mais bonito.",
  "💜 Meu amor, você é minha calma.",
  "🤍 Seu sorriso é meu ponto fraco.",
  "💜 Você é o amor que eu sempre quis cuidar.",
  "🤍 Meu coração bate mais tranquilo por você.",
  "💜 Você é meu lar em qualquer lugar.",
  "🤍 Amar você é meu maior privilégio.",
  "💜 Você é meu melhor capítulo.",
  "🤍 Meu amor por você é infinito.",

  // 51–100
  "💜 Você é tudo o que eu precisava.",
  "🤍 Meu coração se sente completo com você.",
  "💜 Você é meu para sempre.",
  "🤍 Amar você é a decisão mais certa da minha vida.",
  "💜 Você é minha felicidade diária.",
  "🤍 Meu amor, você é especial demais.",
  "💜 Você ilumina meus dias.",
  "🤍 Meu coração é seu.",
  "💜 Você é o amor que eu quero viver todos os dias.",
  "🤍 Amar você é meu maior presente.",
  "💜 Você é minha paz.",
  "🤍 Meu amor cresce a cada dia.",
  "💜 Você é o sonho que eu vivo acordado.",
  "🤍 Meu coração sorri por você.",
  "💜 Amar você é meu destino.",
  "🤍 Você é meu lugar favorito.",
  "💜 Meu amor, você é única.",
  "🤍 Você é a parte mais bonita de mim.",
  "💜 Amar você é leve.",
  "🤍 Meu coração é mais feliz com você.",
  "💜 Você é meu melhor encontro.",
  "🤍 Você faz tudo valer a pena.",
  "💜 Amar você é natural como respirar.",
  "🤍 Você é meu amor verdadeiro.",
  "💜 Meu amor, você é tudo.",
  "🤍 Meu coração te escolheu.",
  "💜 Você é meu porto seguro.",
  "🤍 Amar você é minha sorte.",
  "💜 Você é meu sorriso fácil.",
  "🤍 Meu amor, você é minha certeza.",
  "💜 Você é o motivo do meu sorriso.",
  "🤍 Meu coração é mais forte com você.",
  "💜 Amar você é minha alegria diária.",
  "🤍 Você é minha melhor história.",
  "💜 Meu amor, você é meu lar.",
  "🤍 Você é tudo o que eu preciso.",
  "💜 Meu coração encontrou você.",
  "🤍 Amar você é viver em paz.",
  "💜 Você é meu melhor sentimento.",
  "🤍 Meu amor por você não tem fim.",
  "💜 Você é meu abraço favorito.",
  "🤍 Amar você é meu descanso.",
  "💜 Você é meu amor calmo.",
  "🤍 Meu coração vibra por você.",
  "💜 Você é minha felicidade constante.",
  "🤍 Amar você é meu plano.",
  "💜 Você é meu sempre.",
  "🤍 Meu amor, você é meu mundo.",
  "💜 Com você aprendi que o amor pode ser leve.",
  "🤍 Você tornou o ordinário em extraordinário.",

  // 101–150
  "💜 Cada dia ao seu lado é um presente que guardo com cuidado.",
  "🤍 Você é a música que meu coração sempre quis ouvir.",
  "💜 Olhar pra você e sentir gratidão é automático.",
  "🤍 Você trouxe leveza para partes de mim que eram pesadas.",
  "💜 Seu nome é a palavra mais bonita que meus lábios conhecem.",
  "🤍 Meu amor por você tem raízes, não vai embora com o vento.",
  "💜 Você é a pausa perfeita em um dia corrido.",
  "🤍 Encontrar você foi a melhor surpresa da minha vida.",
  "💜 Cada sorriso seu é um presente que não tem preço.",
  "🤍 Você me ensina, todo dia, o que é amor de verdade.",
  "💜 Meu favorito não é um lugar, é estar com você.",
  "🤍 Você é a calma que eu não sabia que precisava.",
  "💜 Ao seu lado, até o silêncio é confortável.",
  "🤍 Você é a prova de que coisas boas existem.",
  "💜 Meu coração tem seu endereço gravado.",
  "🤍 Você é o tipo de amor que a gente agradece na oração.",
  "💜 Com você aprendi que ser amado é assim: simples e profundo.",
  "🤍 Você é a parte da minha rotina que nunca vai ser cansativa.",
  "💜 Pensar em você é como tomar um café quente num dia frio.",
  "🤍 Você é a pessoa com quem quero dividir cada conquista.",
  "💜 Meu amor, você vale cada segundo de espera.",
  "🤍 Você transformou saudade em lar.",
  "💜 Com você, qualquer lugar é onde quero estar.",
  "🤍 Você é a razão mais bonita de acordar sorrindo.",
  "💜 Meu amor cresceu raízes porque você é solo fértil.",
  "🤍 Você é a melodia que não sai da minha cabeça.",
  "💜 Ao seu lado, meus medos ficam menores.",
  "🤍 Você é a resposta para perguntas que eu nem sabia que tinha.",
  "💜 Com você, até o caminho mais difícil parece possível.",
  "🤍 Você é o lar que eu carrego no peito.",
  "💜 Meu amor por você é quieto e imenso ao mesmo tempo.",
  "🤍 Você é a luz que atravessa meus dias nublados.",
  "💜 Ao seu lado aprendi que paz é um sentimento, não um lugar.",
  "🤍 Você é o tipo de pessoa que a vida manda como bênção.",
  "💜 Meu coração ficou mais rico quando te encontrei.",
  "🤍 Você é presença que aquece sem precisar falar nada.",
  "💜 Com você, cada amanhecer tem sabor diferente.",
  "🤍 Você é o amor que não precisa de prova, só de vivência.",
  "💜 Meu amor, você é o capítulo favorito da minha vida.",
  "🤍 Você é a calmaria depois de toda tempestade.",
  "💜 Com você, aprendi que o amor cuida sem machucar.",
  "🤍 Você é o sol nos meus dias mais cinzas.",
  "💜 Meu coração pulsa mais feliz perto do seu.",
  "🤍 Você é tudo que a palavra lar significa.",
  "💜 Com você, me sinto inteiro de um jeito que só você entende.",
  "🤍 Você é meu motivo preferido de sorrir sem razão.",
  "💜 Meu amor, do seu jeito simples, você me conquista todo dia.",
  "🤍 Você é a prova de que o amor verdadeiro existe.",
  "💜 Com você, até o tempo passa do jeito certo.",
  "🤍 Você é o amor que eu quero cultivar para sempre.",

  // 151–200
  "💜 Meu amor, você é o sol que não cansa.",
  "🤍 Você é a história que escolhi escrever com cuidado.",
  "💜 Ao seu lado, qualquer momento vira memória bonita.",
  "🤍 Você é minha dose diária de alegria.",
  "💜 Com você aprendi que amar é também admirar.",
  "🤍 Você é o tipo de amor que me faz ser melhor.",
  "💜 Meu coração conhece o seu e isso é suficiente.",
  "🤍 Você é a parte da minha vida que eu mais cuido.",
  "💜 Com você, cada detalhe tem valor.",
  "🤍 Você é o amor que não pede, mas recebe tudo de mim.",
  "💜 Meu amor, você me faz querer o melhor pra nós dois.",
  "🤍 Você é a lembrança mais bonita que tenho.",
  "💜 Com você, o amor parece simples do jeito certo.",
  "🤍 Você é minha maior certeza numa vida de dúvidas.",
  "💜 Meu coração sorri mais desde que você está aqui.",
  "🤍 Você é o amor que ficou quando tudo poderia ter ido.",
  "💜 Com você, aprendi que querer bem é um ato diário.",
  "🤍 Você é minha escolha renovada todo dia.",
  "💜 Meu amor, você faz meu mundo ser mais colorido.",
  "🤍 Você é a pessoa que meu coração reconhece em qualquer lugar.",
  "💜 Com você, me sinto em casa mesmo longe de casa.",
  "🤍 Você é o amor tranquilo que eu precisava ter.",
  "💜 Meu coração guarda você com muito cuidado.",
  "🤍 Você é minha razão favorita de existir.",
  "💜 Com você, cada momento simples vira precioso.",
  "🤍 Você é o amor que veio pra ficar.",
  "💜 Meu amor, você é quem eu mais quero ver feliz.",
  "🤍 Você é o ponto de equilíbrio da minha vida.",
  "💜 Com você, eu acredito no amor que dura.",
  "🤍 Você é a segurança que meu coração sempre buscou.",
  "💜 Meu amor por você é gentil e firme ao mesmo tempo.",
  "🤍 Você é o riso fácil que surgiu no meu dia.",
  "💜 Com você aprendi que amar é querer crescer junto.",
  "🤍 Você é a parte mais doce da minha vida.",
  "💜 Meu coração tem o seu nome escrito com carinho.",
  "🤍 Você é o amor que não esgota.",
  "💜 Com você, me sinto livre pra ser quem sou.",
  "🤍 Você é presença que faz diferença todos os dias.",
  "💜 Meu amor, você é o jeito mais bonito de sentir.",
  "🤍 Você é o amor com quem eu quero envelhecer.",
  "💜 Com você, cada despedida tem gostinho de até logo.",
  "🤍 Você é minha constante num mundo que muda muito.",
  "💜 Meu coração encontrou em você o seu ponto de repouso.",
  "🤍 Você é o amor que me ensina a ter paciência.",
  "💜 Com você, aprendi que felicidade mora nos detalhes.",
  "🤍 Você é minha parte favorita de qualquer dia.",
  "💜 Meu amor, você é minha bússola quando me perco.",
  "🤍 Você é o amor que eu quero agradecer todo dia.",
  "💜 Com você, o amor parece a coisa mais natural do mundo.",
  "🤍 Você é a prova de que eu fiz a escolha certa.",

  // 201–250
  "💜 Meu amor, você é o tipo de pessoa que a vida presenteia.",
  "🤍 Você transforma qualquer lugar em lar só com sua presença.",
  "💜 Com você aprendi que o amor verdadeiro não cansa.",
  "🤍 Você é minha alegria que não precisa de motivo.",
  "💜 Meu coração vibra numa frequência que só você conhece.",
  "🤍 Você é o amor que veio quieto e ficou pra sempre.",
  "💜 Com você, os dias difíceis ficam mais suaves.",
  "🤍 Você é minha paz em dias que parecem guerra.",
  "💜 Meu amor, você é o abraço que cura sem remédio.",
  "🤍 Você é a razão pela qual acredito em recomeços.",
  "💜 Com você, aprendi que vulnerabilidade é força.",
  "🤍 Você é o amor com jeito de chegada, nunca de partida.",
  "💜 Meu coração escolheu você e faz essa escolha todo dia.",
  "🤍 Você é a pessoa que me faz querer ser mais.",
  "💜 Com você, o silêncio também é forma de amor.",
  "🤍 Você é o rosto que procuro quando estou perdido.",
  "💜 Meu amor, você é a certeza que me ancora.",
  "🤍 Você é o amor que não precisa de show, só de presença.",
  "💜 Com você aprendi que cuidar é um idioma do amor.",
  "🤍 Você é meu descanso no meio do movimento.",
  "💜 Meu coração ficou mais rico por ter você nele.",
  "🤍 Você é a clareza que aparece quando tudo parece confuso.",
  "💜 Com você, aprendi que o tempo passa melhor a dois.",
  "🤍 Você é o amor que me faz sorrir sem motivo claro.",
  "💜 Meu amor, você é a parte de mim que mais respeito.",
  "🤍 Você é a constância bonita no meio da vida agitada.",
  "💜 Com você, cada olhar diz o que palavras não alcançam.",
  "🤍 Você é o amor que amadurece e fica mais bonito.",
  "💜 Meu coração te reconhece mesmo na multidão.",
  "🤍 Você é a pessoa que torna o impossível simples.",
  "💜 Com você aprendi que presença vale mais que perfeição.",
  "🤍 Você é o amor que se mostra nas pequenas coisas.",
  "💜 Meu amor, você é a voz que acalma meu pensamento.",
  "🤍 Você é o afeto que não precisa de palavras pra existir.",
  "💜 Com você, aprendi que amar é também respeitar.",
  "🤍 Você é minha escolha mais consciente e mais sentida.",
  "💜 Meu coração pulsa diferente quando você está por perto.",
  "🤍 Você é o amor que eu quero mostrar pro mundo.",
  "💜 Com você, me sinto completo de um jeito bonito.",
  "🤍 Você é a parte mais real e mais mágica da minha vida.",
  "💜 Meu amor, você é o calor no meio do inverno.",
  "🤍 Você é a beleza que encontro nos dias mais simples.",
  "💜 Com você aprendi que amar é também admirar de longe.",
  "🤍 Você é o amor que nunca vai me parecer comum.",
  "💜 Meu coração carrega você em cada respiração.",
  "🤍 Você é minha âncora, minha vela e meu destino.",
  "💜 Com você, até a saudade tem gostinho de doce.",
  "🤍 Você é o amor que me faz querer o amanhecer.",
  "💜 Meu amor, você é o motivo mais bonito da minha vida.",
  "🤍 Você é presença que faz o coração pousar.",

  // 251–300
  "💜 Com você aprendi que o amor não grita, ele permanece.",
  "🤍 Você é o afeto que não vem com prazo de validade.",
  "💜 Meu coração tem certeza de você mesmo quando duvida de tudo.",
  "🤍 Você é a história que eu quero contar quando estiver velho.",
  "💜 Com você, aprendi que o amor mais bonito é o cotidiano.",
  "🤍 Você é o sorriso que aparece antes de eu perceber.",
  "💜 Meu amor, você é a gentileza que meu coração precisava.",
  "🤍 Você é o amor que me ensina sobre mim mesmo.",
  "💜 Com você, cada despedida carrega promessa de volta.",
  "🤍 Você é minha palavra favorita numa frase de amor.",
  "💜 Meu coração sabe: com você é onde eu devo estar.",
  "🤍 Você é o amor que cresceu sem pressa e ficou para sempre.",
  "💜 Com você aprendi que cuidar é forma de dizer te amo.",
  "🤍 Você é a paz que eu carrego em qualquer tempestade.",
  "💜 Meu amor, você é o meu lugar no mundo.",
  "🤍 Você é o amor que me faz acreditar em coisas boas.",
  "💜 Com você, me sinto seguro de ser exatamente quem sou.",
  "🤍 Você é a certeza mais bonita que carrego no peito.",
  "💜 Meu coração não sabe mais como era antes de você.",
  "🤍 Você é o amor que ficou quando poderia ter ido embora.",
  "💜 Com você, cada amanhã parece uma nova oportunidade.",
  "🤍 Você é a mão que eu quero segurar em todas as travessias.",
  "💜 Meu amor, você é o amor que eu quero honrar sempre.",
  "🤍 Você é o calor que não some nem nos dias difíceis.",
  "💜 Com você aprendi que o amor real aparece nos detalhes.",
  "🤍 Você é o compromisso mais bonito que já assumi.",
  "💜 Meu coração vibra diferente quando ouve seu nome.",
  "🤍 Você é o amor que me tornou mais inteiro.",
  "💜 Com você, aprendi que a leveza também é profunda.",
  "🤍 Você é o jeito mais bonito que o amor encontrou de me alcançar.",
  "💜 Meu amor, você é a bendição que eu reconheço todo dia.",
  "🤍 Você é o abraço que não precisa de motivo.",
  "💜 Com você, até o cansaço tem lugar de repouso.",
  "🤍 Você é o amor que não compete, apenas se entrega.",
  "💜 Meu coração aprendeu a sorrir de outro jeito com você.",
  "🤍 Você é minha âncora nos dias em que a maré é brava.",
  "💜 Com você aprendi que amor verdadeiro é também silêncio.",
  "🤍 Você é o rosto que meu coração desenhou antes de te ver.",
  "💜 Meu amor, você é o amor que eu agradeço em oração.",
  "🤍 Você é a parte da minha vida que mais me orgulha.",
  "💜 Com você, cada conquista tem um gosto melhor.",
  "🤍 Você é o amor que me faz querer a vida mais.",
  "💜 Meu coração não tem espaço para arrependimento quando é seu.",
  "🤍 Você é a constância que minha alma precisava encontrar.",
  "💜 Com você aprendi que o amor mais bonito é o que cuida.",
  "🤍 Você é o chão firme onde planto meus sonhos.",
  "💜 Meu amor, você é meu antes, meu agora e meu depois.",
  "🤍 Você é o amor que escolho a cada amanhecer.",
  "💜 Com você, aprendi que pertencer a alguém pode ser liberdade.",
  "🤍 Você é o amor mais bonito que já me aconteceu.",

  // 301–365
  "💜 Meu coração sabe que com você, está no lugar certo.",
  "🤍 Você é a bênção que eu reconheci desde o primeiro olhar.",
  "💜 Com você, aprendi que o amor mais profundo é também o mais simples.",
  "🤍 Você é o amor que não se explica, só se sente.",
  "💜 Meu amor, cada dia com você é um capítulo que eu não quero terminar.",
  "🤍 Você é a voz que acalma antes mesmo de falar.",
  "💜 Com você, o amor tem gosto de chegada, não de partida.",
  "🤍 Você é o amor que me faz querer ser uma versão melhor.",
  "💜 Meu coração aprendeu contigo que paz e amor caminham juntos.",
  "🤍 Você é o tipo de amor que se agradece em silêncio todo dia.",
  "💜 Com você, aprendi que o amor que fica é o que não precisa se provar.",
  "🤍 Você é a segurança que faz meu coração respirar fundo.",
  "💜 Meu amor, você é a promessa mais bonita que a vida me fez.",
  "🤍 Você é o amor que não pesa, só sustenta.",
  "💜 Com você aprendi que amar de verdade é querer a felicidade do outro.",
  "🤍 Você é o afeto que me tornou mais humano.",
  "💜 Meu coração aprendeu a confiar novamente por causa de você.",
  "🤍 Você é o amor que ficou gravado em mim para sempre.",
  "💜 Com você, aprendi que o amor mais bonito cresce devagar.",
  "🤍 Você é o motivo mais sincero do meu sorriso.",
  "💜 Meu amor, você é o amor que eu quero viver sem pressa.",
  "🤍 Você é a parte da minha alma que encontrou seu par.",
  "💜 Com você, cada lembrança que crio é um tesouro.",
  "🤍 Você é o amor que se fortalece com o tempo.",
  "💜 Meu coração tem certeza: você é minha maior escolha.",
  "🤍 Você é o amor que veio para completar, não para cobrar.",
  "💜 Com você, aprendi que o amor real não tem medo do tempo.",
  "🤍 Você é o amor que quero levar em cada fase da vida.",
  "💜 Meu amor, você é o sorriso que guardo para os momentos mais difíceis.",
  "🤍 Você é a leveza que trouxe cor para os meus dias mais cinzas.",
  "💜 Com você aprendi que amar é também respeitar o outro no silêncio.",
  "🤍 Você é o amor que me faz acreditar no melhor de tudo.",
  "💜 Meu coração vibra de gratidão por ter você na minha vida.",
  "🤍 Você é o amor que eu escolho renovar todos os dias.",
  "💜 Com você, aprendi que o amor mais lindo é o que não precisa de palco.",
  "🤍 Você é o amor que não some na dificuldade.",
  "💜 Meu amor, você é o lar mais bonito que já encontrei.",
  "🤍 Você é a certeza que carrego mesmo nas minhas maiores dúvidas.",
  "💜 Com você aprendi que o amor que fica é o que cuida todos os dias.",
  "🤍 Você é o amor que me faz querer dar o meu melhor.",
  "💜 Meu coração sorriu diferente no dia que te encontrei.",
  "🤍 Você é o amor que não tem começo nem fim, só presença.",
  "💜 Com você, aprendi que o amor mais bonito é o que respeita.",
  "🤍 Você é o amor que transforma o ordinário em eterno.",
  "💜 Meu amor, você é a razão mais bonita de cada manhã.",
  "🤍 Você é o amor que veio para ficar e ficou pra sempre.",
  "💜 Com você aprendi que amar de verdade é uma escolha diária.",
  "🤍 Você é minha história favorita, e ainda não acabou.",
  "💜 Meu coração te escolhe hoje, amanhã e sempre.",
  "🤍 Você é o amor mais bonito que já me aconteceu.",
  "💜 Com você, aprendi que o amor que dura é o que cresce.",
  "🤍 Você é a parte mais bonita de quem eu me tornei.",
  "💜 Meu amor, você é o capítulo que muda tudo.",
  "🤍 Você é o amor que ficou depois que tudo passou.",
  "💜 Com você, aprendi que o amor real sorri nos momentos difíceis.",
  "🤍 Você é o amor que me ancoreia sem me prender.",
  "💜 Meu coração transborda de gratidão toda vez que penso em você.",
  "🤍 Você é o amor que eu quero que dure além de tudo.",
  "💜 Com você, aprendi que o amor verdadeiro é simples e imenso.",
  "🤍 Você é a pessoa que eu quero ao meu lado em todos os dias.",
  "💜 Meu amor, você é meu começo, meu meio e meu fim.",
  "🤍 Você é o amor mais bonito, mais real e mais meu.",
  "💜 365 dias de amor para você — e ainda são poucos pra tudo que sinto.",
  "🤍 Você é meu para sempre. Do fundo do meu coração, te amo.",
  "💜 Cada potinho foi uma forma de dizer: você merece ser amada todos os dias."
];

// ── CONFIGURAÇÕES ──────────────────────────────────────────────────────────────
const TOTAL = 365;
// Potinhos 1–108 já foram abertos (índices 0–107)
const JA_ABERTOS_INICIAL = Array.from({ length: 108 }, (_, i) => i);

// ── ESTADO ────────────────────────────────────────────────────────────────────
const grid    = document.getElementById("grid");
const modal   = document.getElementById("modal");
const texto   = document.getElementById("mensagem");
const hoje    = new Date().toDateString();

let abertos = JSON.parse(localStorage.getItem("potinhosAbertos")) || null;

// Se nunca abriu nada no localStorage, inicializa com os 108 já abertos
if (abertos === null) {
  abertos = [...JA_ABERTOS_INICIAL];
  localStorage.setItem("potinhosAbertos", JSON.stringify(abertos));
}

// ── CRIA OS POTINHOS ──────────────────────────────────────────────────────────
for (let i = 0; i < TOTAL; i++) {
  const potinho = document.createElement("div");
  potinho.classList.add("potinho");

  const eAberto = abertos.includes(i);
  const emoji = eAberto ? "💜" : "🤍";

  potinho.innerHTML = `
    <span class="emoji">${emoji}</span>
    <span class="numero">${i + 1}</span>
  `;

  if (eAberto) potinho.classList.add("aberto");

  potinho.onclick = () => abrirPotinho(i, potinho);
  grid.appendChild(potinho);
}

// ── ABRIR POTINHO ─────────────────────────────────────────────────────────────
function abrirPotinho(index, potinho) {
  if (abertos.includes(index)) {
    mostrarAviso("💜 Esse potinho já foi aberto.");
    return;
  }

  const ultimoDia = localStorage.getItem("ultimoDiaAberto");
  if (ultimoDia === hoje) {
    mostrarAviso("🤍 Você já abriu o potinho de hoje.\nVolte amanhã!");
    return;
  }

  // Abre!
  texto.innerText = mensagens[index] || "💜 Você é amada.";
  modal.classList.add("ativo");

  abertos.push(index);
  localStorage.setItem("potinhosAbertos", JSON.stringify(abertos));
  localStorage.setItem("ultimoDiaAberto", hoje);

  potinho.classList.add("aberto");
  potinho.querySelector(".emoji").innerText = "💜";
}

// ── FECHAR MODAL ──────────────────────────────────────────────────────────────
function fechar() {
  modal.classList.remove("ativo");
}

// ── AVISO CUSTOMIZADO (sem alert feio) ────────────────────────────────────────
function mostrarAviso(msg) {
  texto.innerText = msg;
  modal.classList.add("ativo");
}

// ── RESETAR ───────────────────────────────────────────────────────────────────
function resetarPotinhos() {
  if (confirm("Resetar todos os potinhos? Os já abertos voltarão ao estado inicial.")) {
    localStorage.removeItem("potinhosAbertos");
    localStorage.removeItem("ultimoDiaAberto");
    location.reload();
  }
}

// Fecha modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fechar();
});
