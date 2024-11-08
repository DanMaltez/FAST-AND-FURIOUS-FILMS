const cartaz = document.querySelector('#cartaz')
const resumo = document.querySelector('#resumo')
const botao_filme01 = document.querySelector('#botao_filme01')
const botao_filme02 = document.querySelector('#botao_filme02')
const botao_filme03 = document.querySelector('#botao_filme03')
const botao_filme04 = document.querySelector('#botao_filme04')
const botoes = document.querySelector('.botoes')

botao_filme01.addEventListener('click', filme1)
botao_filme02.addEventListener('click', filme2)
botao_filme03.addEventListener('click', filme3)
botao_filme04.addEventListener('click', filme4)

function filme1(){
    cartaz.src= 'images/Velozes_e_Furiosos_Capa.webp'
    resumo.textContent=`"Velozes e Furiosos" ("The Fast and the Furious") é um filme de ação e corridas de rua dirigido por Rob Cohen, que estreou em 2001. A trama mistura adrenalina, velocidade e lealdade, com personagens que, apesar de suas diferenças, se tornam uma verdadeira família. O filme estabelece as bases para a famosa franquia "Vingadores e Furiosos", com ênfase em amizade, traição e disputas pela liderança no mundo das corridas ilegais e atividades criminosas.
    O filme começa com um intenso cenário de corridas de rua em Los Angeles, onde o foco está em Dom Toretto (Vin Diesel), um líder carismático e hábil corredor de carros, e sua equipe de pilotos que participam dessas corridas clandestinas. Dom é também o centro de uma rede de contrabando de peças e eletrônicos roubados, que são transportados com alta velocidade para evitar a captura pela polícia.
    Brian O'Conner (Paul Walker) é um policial recém-transferido para Los Angeles, que recebe a missão de se infiltrar nesse mundo de corridas e investigar os responsáveis pelos roubos de caminhões, suspeitando que Dom e sua equipe estejam envolvidos. Para ganhar a confiança de Dom e se aproximar do alvo, Brian finge ser um entusiasta das corridas e começa a frequentar os mesmos locais, participando das competições e mostrando suas habilidades ao volante.
    À medida que a história avança, Brian vai se tornando cada vez mais envolvido com o grupo de Dom, especialmente com a irmã dele, Mia (Jordana Brewster), com quem ele começa a desenvolver um romance. A lealdade de Brian, inicialmente voltada para a polícia, começa a ser questionada à medida que ele se aproxima de Dom e de seus amigos, e começa a simpatizar com suas motivações e valores, que, embora à margem da lei, são baseados em um forte sentido de família e honra. 
    O conflito se intensifica quando Brian descobre que, na verdade, o verdadeiro responsável pelos roubos não é Dom, mas sim outro corredor de rua, Johnny Tran (Rick Yune), que é rival de Dom. Isso coloca Brian em uma posição difícil, já que ele precisa decidir entre sua lealdade à lei e sua crescente lealdade a Dom e sua equipe.`
}

function filme2(){
    cartaz.src= 'images/mais_velozes_mais_furiosos_capa.jpg'
    resumo.textContent=`"Mais Velozes e Mais Furiosos", o segundo filme da franquia Velozes e Furiosos, é dirigido por John Singleton e foi lançado em 2003. A trama continua a história de Brian O'Conner (Paul Walker), que, após os eventos do primeiro filme, se vê afastado da polícia devido à sua decisão de ajudar Dom Toretto a fugir. Sem mais uma carreira na força policial, Brian acaba se envolvendo novamente no mundo das corridas de rua, mas agora de uma forma ainda mais perigosa e clandestina.
    A história se passa em Miami, onde Brian é recrutado pelo FBI para se infiltrar em uma rede de contrabando de drogas liderada pelo misterioso e rico criminoso Carter Verone (Cole Hauser). Verone é um traficante de drogas que opera com sua própria gangue e com uma rede de corredores de rua, e a missão de Brian é ganhar a confiança de Verone para conseguir informações que o levem à prisão do traficante.
    Para ajudar na missão, Brian recruta Roman Pearce (Tyrese Gibson), seu velho amigo de infância, que tem um histórico de problemas com a lei. Juntos, eles são envolvidos em uma série de corridas ilegais, fugas e perseguições de alta velocidade, enquanto tentam obter provas contra Verone. Roman, inicialmente relutante, acaba se tornando um aliado importante para Brian, e os dois formam uma parceria cheia de química e rivalidade amigável, misturando cenas de ação e momentos de leve descontração.
    O clímax do filme acontece em uma sequência de ação de tirar o fôlego, com corridas de rua pelas ruas de Miami, onde Brian e Roman devem usar suas habilidades ao volante para desmascarar Verone e seus comparsas, enfrentando perigos em cada esquina.
    Ao final, Brian e Roman conseguem derrotar Verone, mas o filme deixa claro que o vínculo entre os dois corredores é forte o suficiente para levar a parceria adiante, e ambos escapam da situação com mais uma fuga impressionante. O filme mistura ação, velocidade e amizade, estabelecendo as bases para os próximos capítulos da franquia.`
}

function filme3(){
    cartaz.src= 'images/desafio_em_toquio_capa.jpg'
    resumo.textContent=`"Velozes e Furiosos: Desafio em Tóquio", o terceiro filme da franquia Vingadores e Furiosos, lançado em 2006, marca uma grande mudança no foco da série, com um novo protagonista e uma nova ambientação. O filme é dirigido por Justin Lin e apresenta um enredo que se passa em Tóquio, no Japão, destacando a cultura local das corridas de drift (uma modalidade de corrida em que o motorista controla o carro derrapando nas curvas), em vez das tradicionais corridas de rua.
    A história segue Sean Boswell (Lucas Black), um jovem de 17 anos que vive em uma cidade do interior dos Estados Unidos e é obcecado por carros e corridas. Após uma série de problemas com a lei devido a suas corridas ilegais, Sean é enviado para morar com seu pai em Tóquio, na tentativa de evitar mais complicações com a polícia. Em Tóquio, ele se vê imerso em um novo e perigoso universo de corridas clandestinas, onde a habilidade no drift é a chave para o sucesso.
    Logo após sua chegada, Sean se envolve em corridas com D.K. (Drift King) (Brian Tee), um corredor local e o líder das corridas de drift em Tóquio. D.K. é também o sobrinho de um poderoso mafioso japonês, o que coloca Sean em uma situação delicada. Depois de uma corrida arriscada contra D.K., Sean acaba se tornando amigo de Twinkie (Shad "Bow Wow" Moss), um vendedor local e fã de carros, que o ajuda a entrar no mundo das corridas de drift e também entender o código de honra dos motoristas.
    O filme explora o desenvolvimento de Sean como piloto, enquanto ele aprende a dominar o drift e enfrenta desafios pessoais e conflitos com D.K. O clímax do filme ocorre em uma tensa corrida final, onde Sean, agora um piloto habilidoso, disputa com D.K. pelas ruas de Tóquio, arriscando sua vida e seu futuro.
    Embora Desafio em Tóquio tenha introduzido novos personagens e um novo estilo de corrida, o filme faz uma conexão com o resto da franquia ao mostrar a aparição de Dominic Toretto (Vin Diesel) no final, sugerindo uma continuidade para a série.`
}

function filme4(){
    cartaz.src= 'images/velozes_e_furiosos_5.jpg'
    resumo.textContent= `"Vingadores e Furiosos 5: Operação Rio" (2011), dirigido por Justin Lin, marca uma transição da franquia para um estilo de ação mais voltado para assaltos e perseguições em grande escala, ao invés de corridas de rua. O filme é o quinto da série e se passa no Rio de Janeiro, Brasil, onde o grupo liderado por Dom Toretto (Vin Diesel) e Brian O'Conner (Paul Walker) se une para realizar o maior golpe de suas vidas.
    O filme começa com a fuga de Dom e sua equipe da prisão, após o desfecho do filme anterior, e se passa no Rio, onde eles se envolvem com um corrupto empresário local, Hernan Reyes (Joaquim de Almeida), que controla o crime na cidade. Dom e Brian, junto com Mia Toretto (Jordana Brewster), Tej Parker (Ludacris), Roman Pearce (Tyrese Gibson) e Han Seoul-Oh (Sung Kang), começam a planejar um grande assalto ao dinheiro de Reyes, que está guardado em um cofre extremamente seguro e protegido.
    Para realizar o roubo, eles precisam unir suas habilidades e preparar um plano complexo, que envolve carros de alta performance e coordenação precisa. Eles enfrentam vários desafios, incluindo a força de segurança privada de Reyes e a polícia, além de um agente federal implacável, Hobbs (Dwayne "The Rock" Johnson), que é enviado para capturar a equipe de Dom. Hobbs, inicialmente o antagonista, começa a perceber o caráter e a determinação do grupo e acaba se envolvendo na perseguição, criando uma dinâmica de antagonismo e respeito mútuo.
    O clímax do filme ocorre durante uma sequência espetacular de ação no Rio, onde Dom e sua equipe, em uma jogada ousada, utilizam dois carros para roubar o cofre de Reyes, causando caos nas ruas da cidade. O filme termina com a fuga do grupo, e uma revelação de que, apesar das vitórias, as consequências de suas ações irão persegui-los.
    "Operação Rio" redefine a franquia, com foco em assaltos e ação de alto nível, além de fortalecer a temática da lealdade e da família.`
}