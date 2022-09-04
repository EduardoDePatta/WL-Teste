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

function sumSalary(array) {
    let arrayLength = array.length
    let total = 0;
    for (let i = 0; i < arrayLength; i++) {
        total += array[i].salary;        
    }
    console.log(total)
}
sumSalary(funcionarios)