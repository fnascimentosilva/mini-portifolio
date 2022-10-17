/* OBJETIVO: Quando clicarmos na aba
temos que mostrar o conteudo da 
aba que foi clicada pelo usuario
e esconder o conteudo da aba anterior

*/

/*PASSO 1: dar um jeito de pegar os elementos
que reprensetam as abas no HTML;*/
const abas = document.querySelectorAll(".aba");

abas.forEach(aba=> {
/*PASSO 2: dar um jeito de identificar o clique
no elemento da aba;*/
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

    selecionarAba(aba)    
    mostrarInformacoesDaAba(aba)

    })
})    

function selecionarAba(aba){
    /*PASSO 3: quando o usuario clicar, desmarcar a aba selecionada;*/  
    const abaSelecionada = document.querySelector(".aba.selecionado");   
    abaSelecionada.classList.remove("selecionado");    

   // PASSO 4: marcar a aba clicada com selecionada;

   aba.classList.add("selecionado");
}
function mostrarInformacoesDaAba(aba){
    //PASSO 5: esconder o conteudo anterior;
   const informacaoSelecionada = document.querySelector(".informacao.selecionado");
   informacaoSelecionada.classList.remove("selecionado");

   // PASSO 6; mostrar o conteudo da aba selecionada.
   const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

   const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
   informacaoASerMostrada.classList.add("selecionado");

}


