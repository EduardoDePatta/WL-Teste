1 - Dado o elemento abaixo, como você separaria o css do html?
<div style="margin: 15px"></div>

R: Pela praticidade em ter todas as configurações de formatação em um único arquivo, para que possa ser reutilizado, evitando retrabalhos desnecessários e favorecendo a boa prática, podemos realizar essa tarefa adicionando um id ou class à div e modificar o estilo num arquivo css apontando diretamente para a id/classe. Por exemplo, a div com a classe

 <div class="margin-all"></div> 

e um arquivo style.css linkado com o html com, por exemplo:

 <link rel="stylesheet" href="./style/style.css">

Dentro do style.css, teríamos:

.margin-all {
	margin: 15px;
}

e assim conseguiríamos o mesmo resultado, porém podendo reaproveitar a classe margin-all em outras tags.(Ps.: Com o id não poderíamos reaproveitar já que não é possível adicionar o mesmo a outra tag)


