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

function sortByName(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].name > array[j].name) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    console.log(array)
}
sortByName(funcionarios)
