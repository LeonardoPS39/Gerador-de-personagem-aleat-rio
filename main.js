function gerar() {
    //Gerando idade:
    
    var idade = Math.round(Math.random()*82+18) //Utilização do Math.random para aleatorizar a idade, feito com um cálculo com a fómula Math.round()*(MAX-MIN)+MIN

    document.getElementById("idade").innerHTML = "Idade: " + idade //Inscrição da idade na página

    //Verificação via console para caso tenha algum erro:
    
    console.log("Idade: " + idade)

    //Gerando classe:
    
    var classes = ["Piloto de Fórmula 1", "Soneca", "Alcoólatra", "Cavaleiro", "O cara da resenha"] //Array com todas a classes

    var sorteioClasse = parseInt(Math.random()*classes.length) //Nesse caso, utilizei o parseInt para arredondar, pois a array tem suas posições determinadas de 0 em diante, e como o.. -->
    //random aleatoriza número de 0 a 0,99999... não será excedido o número da posição de cada item da lista.

    document.getElementById("classe").innerHTML = "Classe: " + classes[sorteioClasse] //Inscrição da classe na página

    //Gerando nome:
    
    var consoantes1 = "bcdfghjklmnpqrstvwxyz" //Variável com todas as consoantes do alfabeto português
    var consoantes2 = "bcdfghjklmnpqrstvwxyz"
    
    var vogais1 = "aeiou" //Variável com todas as vogais do alfabeto português
    var vogais1 = vogais1.toUpperCase() //utilizado a função toUpperCase para deixar a primeira letra sempre em maiúsculo
    
    var vogais2 = "aeiou"
    var vogais3 = "aeiou"

    var sorteioVogais1 = parseInt(Math.random()*vogais1.length) //Randomização utilizada com length para automaticamente pegar a quantidade de itens da lista "vogaisX, Y e Z"
    var sorteioVogais2 = parseInt(Math.random()*vogais2.length)
    var sorteioVogais3 = parseInt(Math.random()*vogais3.length)

    var sorteioConsoantes1 = parseInt(Math.random()*consoantes1.length) //Randomização utilizada com length para automaticamente pegar a quantidade de itens da lista "consoantesX e Y"
    var sorteioConsoantes2 = parseInt(Math.random()*consoantes2.length)

    //Inscrição do nome concatenando (agrupando) letra por letra:
    document.getElementById("nome").innerHTML = "Nome: " + vogais1[sorteioVogais1] + consoantes1[sorteioConsoantes1] + vogais2[sorteioVogais2] + consoantes2[sorteioConsoantes2] + vogais3[sorteioVogais3]

    //Verificação via console para caso tenha algum erro:
    
    console.log("Letras: ", vogais1[sorteioVogais1], consoantes1[sorteioConsoantes1], vogais2[sorteioVogais2], consoantes2[sorteioConsoantes2], vogais3[sorteioVogais3])

    //Gerando imagem:
    
    var imagens = ["bola.jpg", "cavalo.jpeg", "kf.jpeg", "kfBalde.jpeg", "neves.jpeg"] //Array com todas as sources das imagens. Caso você queira utilizar outras imagens, coloque elas.. -->
    // pasta de arquivo que esse código e escreva o nome do arquivo com o seu tipo (jpeg, jpg, gif...)

    var sorteioImagens = parseInt(Math.random()*imagens.length) //Mesma lógica usada nas aleatorizações anteriores.

    var imgTag = document.getElementById("imagem") //Variável com o id da tag do HTML que será atribuida a imagem

    imgTag.src = imagens[sorteioImagens] //Inserção da imagem na tag através do atributo .src = url; O colchete é para definir o item que será puxado da lista imagens, exemplo: .. -->
    // imagens[1] será puxada a src "cavalo.jpeg" ou imagens[0] será chamada a "bola.jpg"

    imgTag.style.width = "50%" //As duas seguintes atribuição são para definir um padrão para as imagens, e não deformarem por acidente a página
    imgTag.style.height = "50%"

    //Verificação via console para caso tenha algum erro:
    
    console.log("Imagem: " + imagens[sorteioImagens])

    //Trocando cor do Background:
    
    var backgroundId = document.getElementById("papel") //Variável com id da tag em html que representa a folha de papel
    var cores = ["#00BFFF", "#90EE90", "#DAA520", "#EE82EE", "#F08080"] //Lista das cores em HexaDecimal
    var sorteioCor = parseInt(Math.random()*cores.length) //Sorteio das cores

    backgroundId.style.backgroundColor = cores[sorteioCor] // Atribuição das cores da maneira: idDaTag onde atribui o style(css) que atribui a função do css background-color que .. -->
    //iguala a cor sorteada.

    //Verificação via console para caso tenha algum erro:
    
    console.log("Cor: " + cores[sorteioCor])

    console.log("-----------------") //Fins de facilitar a leitura do console


}

// Obervações:
//     - console.log registra informações no console para que o desenvolvedor estude erros ou maneiras de melhorar o código, como várias outras possibilidades. Para ver, basta inspecionar.. -->
//         elemento, e clicar em console para ver todos os dados registrados. 
//     - As src de arquivos de imagem são de imagens para tirar sarro com amigos, então recomendo que caso utilize o código, as altere.