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
        for(let i = 0; i < id.length; i++) {
            id[i].setAttribute("id", i);
        }
        
        // show div id on mouseover
        let idValue = square.id
        let divId = document.createTextNode("ID=" + idValue)

        square.addEventListener("mouseover", function () {
            square.appendChild(divId)
        })

        // stop showing id on div
        square.addEventListener("mouseout", function () {
            let showId = square.appendChild(divId)
            square.removeChild(showId);
        })
    })

   
})