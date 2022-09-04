let funcionarios = [
    {
        id:1, 
        name: 'Joao',
        salary: 1000
    },
    {
        id:2, 
        name: 'Beatriz',
        salary: 4000
    },
    {
        id:3, 
        name: 'Eduardo',
        salary: 2500
    },
    {
        id:4, 
        name: 'Maria',
        salary: 2000
    }

];

//Como sabemos que o id do quarto funcionário é o 4, podemos escrever dessa forma:

//console.log(funcionarios[3])

//caso não soubessemos, poderíamos buscar dessa forma:
function searchById(array, id) {
    let arrayLength = array.length
    let obj = [];
    for (let i = 0; i < arrayLength; i++) {
        if (array[i].id == id) {
            obj = array[i]
        }
    }
    console.log(obj)
}

searchById(funcionarios, 4)


