let stack = [];

let action;

do {
    action = prompt("Enter action: push, pop, print, exit");

   
    if (action === "push") {
        let value = prompt("Enter value:");
        stack.push(value);
    }

    else if (action === "pop") {
        if (stack.length === 0) {
            alert("Stack is empty!");
        }   
        else {
            let poppedValue = stack.shift();
            alert("Popped value: " + poppedValue);
        }
    }
    else if (action === "print") {
        if (stack.length === 0) {
            alert("Stack is empty!");
        }   
        else {
            alert("Stack contents: " + stack.join(", "));
        }
    }
   

} while (action !== "exit");