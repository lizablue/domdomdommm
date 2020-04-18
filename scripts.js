
// create button
const button = document.createElement('button');
let btnText = document.createTextNode('Add Square');
button.appendChild(btnText);
document.body.appendChild(button);

button.style.display = "block";

let counter = 1;

class Box {
    constructor() {
         this.div = document.createElement('div');
         this.value = document.createTextNode(counter);
         console.log(this);
    }
}

// add squares on button click
button.addEventListener("click", function () {
    square.className = "shape";
    square.style.backgroundColor = "black";
    square.style.display = "inline-block";
    document.body.appendChild(square);

    // assign id to div with increasing number 
    let id = document.getElementsByClassName("shape");
    for (let i = 0; i < id.length; i++) {
        id[i].setAttribute("id", i);
    }

    let idValue = square.id
    let divId = document.createTextNode("id=" + idValue)

    // show div id on mouseover
    square.addEventListener("mouseover", function () {
        square.appendChild(divId)
    })

    // stop displaying id text on div
    square.addEventListener("mouseout", function () {
        let showId = square.appendChild(divId)
        square.removeChild(showId);
    })

    // change background color on click
    let colorArray = ["navy", "gold", "seagreen", "lightblue"];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    square.addEventListener("click", function () {
        square.style.backgroundColor = randomColor;
    })

    // remove siblings on double click
    square.addEventListener("dblclick", function () {
        let olderSibling = square.nextElementSibling;
        let youngerSibling = square.previousElementSibling;

        if (idValue % 2 === 0) {
            //even numbers
            if (!olderSibling) {
                alert('%cThe shape you are trying to remove does not exist', 'background: red; color: white');
                return;
            }
            document.body.removeChild(olderSibling);
        } else { //odd numbers
            if (!youngerSibling || youngerSibling === document.querySelector('button')) {
                alert('%cThe shape you are trying to remove does not exist', 'background: red; color: white');
                return;
            }
            document.body.removeChild(youngerSibling);
        }
    })
})