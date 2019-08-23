window.onload = function(){
    console.warn("VONTADE DE MORRER")
    let meuform = $("#formProduto")
    console.log(meuform)
meuform.on("submit", function(event){
    event.preventDefault()
    console.log("clicou")
    prepararBotao()

})
    function prepararBotao(){
        let botao = $("#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }
    function clicou(){
        prepararBotao()
    }
}