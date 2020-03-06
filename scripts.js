document.addEventListener('DOMContentLoaded', function () {
    // create button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.style.display = "block";

    // add squares on button click
    button.addEventListener("click", function () {
        let square = document.createElement('div');
        square.className = "shape";
        square.style.backgroundColor = "black";
        square.style.display = "inline-block";
        document.body.appendChild(square);

        // assign id to div with increasing number 
        let id = document.getElementsByClassName("shape");
        for (let i = 0; i < id.length; i++) {
            id[i].setAttribute("id", i);
        }

        // show div id on mouseover
        let idValue = square.id
        let divId = document.createTextNode("ID=" + idValue)

        square.addEventListener("mouseover", function () {
            square.appendChild(divId)
        })
        
        // stop displaying id text on div
        square.addEventListener("mouseout", function () {
            let showId = square.appendChild(divId)
            square.removeChild(showId);
        })

        let colorArray = ["red", "orange", "gold", "green", "blue", "indigo", "gray"];
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

        square.addEventListener("click", function() {
            square.style.backgroundColor = randomColor;
        })

        let olderSibling = parseInt(idValue) + 1
        let youngerSibling = parseInt(idValue) - 1

        square.addEventListener("dblclick", function() {
            if (idValue % 2 === 0){ //even numbers
                document.body.removeChild(document.getElementById(olderSibling));
            } else { //odd numbers
                document.body.removeChild(document.getElementById(youngerSibling));
            } 
        })
    
    })

})