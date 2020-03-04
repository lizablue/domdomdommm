document.addEventListener('DOMContentLoaded', function () {
    // create button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

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
        square.addEventListener("mouseover", function () {
            let idValue = square.id
            let divId = document.createTextNode("ID=" + idValue)
            square.appendChild(divId)
            
            // event.target.textContent = "";
            // let divText = document.createTextNode('div #id');
            // square.appendChild(divText);
        })
    })

   
})