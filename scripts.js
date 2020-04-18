
// create button
const button = document.createElement('button');
let btnText = document.createTextNode('Add Square');
button.appendChild(btnText);
document.body.appendChild(button);
button.style.display = "block";

const container = document.createElement('main');
document.body.appendChild(container);

let counter = 1;

class Box {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.render();
        this.addEvents();
    }

    addEvents() {
        this.div.addEventListener("mouseover", () => this.div.appendChild(this.value));
        this.div.addEventListener("mouseout", () => this.div.removeChild(this.value));
        this.div.addEventListener("click", () => this.div.style.backgroundColor = this.randomColor());
        this.div.addEventListener("dblclick", () => this.removeSomething());
    }

    render() {
        this.div.className = "shape";
        container.appendChild(this.div);
        this.div.id = counter;
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    removeSomething() {
        // remove siblings on double click
        let olderSibling = this.div.nextElementSibling;
        let youngerSibling = this.div.previousElementSibling;
        if (this.value % 2 === 0) {
            //even numbers
            if (!olderSibling) {
                console.log('%cThe shape you are trying to remove does not exist', 'background: red; color: white');
                return;
            }
            container.removeChild(olderSibling);
        } else { //odd numbers
            if (!youngerSibling || youngerSibling === document.querySelector('button')) {
                console.log('%cThe shape you are trying to remove does not exist', 'background: red; color: white');
                return;
            }
            container.removeChild(youngerSibling);
        }
    }
}

// add squares on button click
button.addEventListener("click", function () {
    new Box();
    counter++;
})