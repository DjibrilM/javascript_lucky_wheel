const wheel = document.querySelector(".wheel");
const spinButton = document.querySelector(".spinBtn");
const angle_ref = document.querySelectorAll(".angle_ref");
const parentEl = document.querySelector(".container");
let rotationVlaue = Math.floor(Math.random() * 16 + 16) * 45; // this formula provide random angle rotation between 720deg and 1395

const rotate = () => {
    wheel.style.transform = `rotate(${rotationVlaue}deg)`;
    rotationVlaue += Math.floor(Math.random() * 16 + 16) * 45;
};

function getElementAngle(element) {
    const parent = parentEl;
    const parentRect = parent.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const deltaX = elementRect.left + elementRect.width / 2 - (parentRect.left + parentRect.width / 2);
    const deltaY = elementRect.top + elementRect.height / 2 - (parentRect.top + parentRect.height / 2);

    const radians = Math.atan2(deltaY, deltaX);
    let angle = radians * (180 / Math.PI);

    // Ensure the angle is positive (between 0 and 360 degrees)
    if (angle < 0) {
        angle += 360;
    }

    return angle;
}


const getChosenElement = () => {
    angle_ref.forEach((angleref) => {
        const getangle = getElementAngle(angleref);
        const percentage = angleref.parentElement.querySelector("span");

        if (parseFloat(getangle.toFixed(0)) === 270) {
            alert(percentage.innerHTML);
        }
    })
}


//start the spinning 
spinButton.addEventListener('click', () => rotate())
//check which element was chosen at the end of the game 
wheel.addEventListener("transitionend", () => getChosenElement())

