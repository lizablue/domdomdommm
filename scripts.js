document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        let square = document.createElement('div');
        square.className = "shape";
        square.style.backgroundColor = "black";
        square.style.display = "inline-flex";
        square.style.height = 100;
        square.style.width = 100;
        document.body.appendChild(square);
    })

})