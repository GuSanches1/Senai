//função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em java function
function insert(num) {
  //Início da função7
  //variavel é um espaço na memoria que armaena uma informação para uso posterios. Ao nomeá-la evite:n°s e letras maiúsculas no inicio, espaço entre palavras (use _ ou camelCase) e acentuação.
  //Captura o cunteúdo atual exibido no elemento com id 'resultado' e armazena na variavel 'numero'
  var n1 = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = n1 + num;
} // fim de função
//Função para limpar todo o conteúdo que aparece no visor (tag p [id=resultado])
function clean() {
  //Define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
  document.getElementById("resultado").innerHTML = "";
}
//Função para apagar o último caractére digitado.
function del() {
  //Variável para armazenar a informação atual do visor (tag p)
  var resultado = document.getElementById("resultado").innerHTML;
  //Usa o método substring para remover o último caractér digitado na tela.
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
// Função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    var resultado = (document.getElementById("resultado").innerHTML =
      eval(resultado));
  } else {
    document.getElementById("resultado").innerHTML =
      "Não tem nada para calcular";
  }
}
document.addEventListener(
  "keydown",
  function (event) {
    //'Salva' a tecla pressionada
    var tecla = event.key;
    if (/[0-9+\-*/]/.test(tecla)) {
      insert(tecla);
    } else if (tecla == "Enter") {
      calcular();
    }
    //Verificar se a tecla precionada é delete
    else if (tecla == "Backspace") {
      del(); //chama a função del - Apaga o ultimo caracter
    } //verifica se a tecla pressionada é o delete
    else if (tecla == "Delete") {
      clean();
    }
  } //Fim da função
); //Fecha o bloco do evento
