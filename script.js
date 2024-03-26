
// Work 1
let name = prompt('any name').trim() // удалить элемент под этим именем

console.log(name);

let students = ["Ahmad", "Sherzod", "Farrux", "Ilya", "Алекс", "barbara", "Sabina", "Amal"].sort() 


students.find((item) => {
    if (item.replace(name, "")) {
        console.log(item);
    }
})

// Work 2 
let num = prompt('any num').trim() // удалить элемент под этим номером

    if(students.splice(num, 1)){
        console.log(students);
    }
