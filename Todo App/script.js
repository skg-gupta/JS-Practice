  
 let todoList = [];
let request = prompt("Please Enter Your Request");


while( request != "exit" && request != "Exit"){

  if(request === "print"){
            console.log("Your all list is ")

    for( let i = 0 ; i<todoList.length; i++){
        console.log(todoList[i]);
    }
  }
  else if( request === "add" ){
          todoList.push(prompt("Enter your activity"));
          console.log("--------activity addded------");
  }
  else if(request === "delete"){
    deletedActivity = prompt("Enter your activity that you want to delete");
      let flag =  todoList.indexOf(deletedActivity)
    if( flag != -1){
        todoList.splice(flag,1);
    }
    else{
        console.log("This activity is not persent");
    }
  }
  else{
    alert("Wrong Activity!");
  }
request = prompt("Please Enter Your Request");

}