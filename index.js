const inputBox = document.getElementById("input-box"); //create variable for elements.
const listContainer = document.getElementById("list-container");  // create variable for elements.

function addTask(){             //define addTask
    if(inputBox.value === ''){       //if condition to check inputvalue
        alert("you must write something!"); //if input box is empty  
        return; 
    }      
        let li = document.createElement("li"); // creating 1 element in document li
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span"); //using a font Awesome class for close icon
        span.classList.add("fas", "fa-times"); //add font Awesome classes
        li.appendChild(span);

    inputBox.value = "";
    saveData(); // saveData is called only when newtask is added.
}

listContainer. addEventListener("click", function(e){
    if(e.target.tagName === "LI"){            // it will check where we have clicked.
        e.target.classList.toggle("checked");
        }
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();   // parent element li will be removed.
    saveData();   // call saveData only when a task is remved.
}
}), 

function saveData(){      //lets create function saveData    //call saveData to save the new data in the browser.
    localStorage.setItem("data", listContainer.innerHTML); // contents in list container will be stored in Data.
}
function showTask(){     //it will give all the content stored in the name of Data.
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();   // the function ,display tasks on page load.

