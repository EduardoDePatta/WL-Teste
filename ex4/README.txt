4 - Usando typescript qual é a saída do código abaixo, explique sua resposta?

let x: number = '1';
console.log(x);

R: 

Como typescript é uma linguagem com tipagem estática opicional, 
e foi atribuído ao x o tipo número, não é possível transpilar para javascript e ocorreria um erro. Não haveria saída em console.log(x) nesse caso, pois nem haveria processamento.
A possibilidade de realizar essa tipagem estática é muito útil no desenvolver dos sistemas pois é possível reconhecer erros mais rapidamente evitando erros maiores futuros. Ao utilizar uma linguagem dessa forma, é possível até mesmo economizar capex com uma equipe mais enxuta de QA, pois os próprios devs conseguem perceber mais erros do que se utilizassem a linguagem de forma menos tipada.