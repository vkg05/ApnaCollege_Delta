let todo = [];

let req = prompt("Please enter your request");

while (true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
        break;

    } else if(req == "add"){
        let task = prompt("please enter the task you want to add.");
        todo.push(task);
        console.log("task added");

    } else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");

    }else {
        console.log("wrong request");
        break;
    }

    req = prompt("Please enter your request");

}
