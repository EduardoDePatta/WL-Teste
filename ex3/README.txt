3 - Quais as formas possiveis de aplicar margin-bottom: 4px ao elemento abaixo?

<p id="elemento">Meu parágrafo</p>


R: 

Como em todos a fontsize do parent element é a mesma e é default(16px para 'p'), conseguimos utilizar tanto 'em' quanto 'rem' nesse caso com a mesma unidade de medida. Além disso, podemos utilizar apenas 'margin: 0px 0px 4px 0px;' que indica a ordem 'top, right, bottom, left' utilizando não só 'px' mas 'rem' e 'em' também.

Todas essas formas de ajustar a margin-bottom poderiam ser impostas inline, como no exercício 1, ou diretamente no head do html, criando uma tag style e fazendo da mesma maneira que foi feita aqui no style.css

