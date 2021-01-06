/*
    Dynamic Background Created by Mathew de Vin
    For use with projects.
 */

// todo: add width and height changes
// todo: add colour changes
// todo: add creation and de-creation of elements

// EDIT THESE VARIABLES TO MODIFY THE BACKGROUND
let randomTimeMax = 5; // in s
let randomTimeMin = 3; // in s
let randomMoveMax = 200; // in px
let randomMoveMin = -200; // in px
let blur = 150; // in px
let zIndex = -5;

// method to create dynamic objects
const setDynamicObject = (top, left, color) => {
    let newDynamicObject = document.createElement("div");
    newDynamicObject.style.position = "fixed";
    newDynamicObject.style.width = "1200px";
    newDynamicObject.style.height = "1200px";
    newDynamicObject.style.borderRadius = "100%";
    newDynamicObject.style.top = top;
    newDynamicObject.style.left = left;
    newDynamicObject.style.zIndex = "" + zIndex;
    newDynamicObject.style.backgroundColor = color;
    newDynamicObject.style.transition = "transform 10s ease-in-out";
    newDynamicObject.style.transform = "center";
    newDynamicObject.style.filter = "blur(" + blur + "px)";
    return newDynamicObject;
}
// create background
let dynamicBackground = document.createElement("div");
dynamicBackground.style.position = "fixed";
dynamicBackground.style.width = "140%";
dynamicBackground.style.height = "140%";
dynamicBackground.style.top = "-20%";
dynamicBackground.style.left = "-20%";
dynamicBackground.style.zIndex = "" + zIndex;
dynamicBackground.style.backgroundColor = "#60C93E";
dynamicBackground.style.filter = "blur(" + blur + "px)";
// create dynamic objects
let dynamicObjects = [];
dynamicObjects.push(setDynamicObject("50%", "30%", "#60C93E"));
dynamicObjects.push(setDynamicObject("-45%", "45%", "#D1306A"));
dynamicObjects.push(setDynamicObject("50%", "55%", "#009DDF"));
dynamicObjects.push(setDynamicObject("23%", "-40%", "#FFE100"));
dynamicObjects.push(setDynamicObject("-85%", "-20%", "#FF642C"));
// add dynamic objects to html div
let dynamicBackgroundDIV = document.getElementById("dynamic_background");
dynamicBackgroundDIV.appendChild(dynamicBackground);
for (let i = 0; i < dynamicObjects.length; i++) {
    dynamicBackgroundDIV.appendChild(dynamicObjects[i]);
}

const moveDynamicObject = (dynamicObject) => {
    let newPosX; let newPosY;
    // set random new position
    if (dynamicObject.getBoundingClientRect().left + dynamicObject.getBoundingClientRect().width / 2 < window.innerWidth / 2)
        newPosX = Math.random() * (randomMoveMax - randomMoveMin / 4) + randomMoveMin / 4;
    else
        newPosX = Math.random() * (randomMoveMax / 4 - randomMoveMin) + randomMoveMin;
    if (dynamicObject.getBoundingClientRect().top + dynamicObject.getBoundingClientRect().height / 2 < window.innerHeight / 2)
        newPosY = Math.random() * (randomMoveMax - randomMoveMin / 4) + randomMoveMin / 4;
    else
        newPosY = Math.random() * (randomMoveMax / 4 - randomMoveMin) + randomMoveMin;

    // set random time
    let randTime = Math.random() * (randomTimeMax - randomTimeMin) + randomTimeMin;

    // update position
    dynamicObject.style.transition = "transform " + randTime + "s ease-in-out";
    dynamicObject.style.transform = "translate3d(" + newPosX + "px, " + newPosY + "px, 0)";

    // timeout with random time between X and X seconds
    setTimeout(moveDynamicObject.bind(null, dynamicObject), randTime * 1000);
}

// apply method to each element
for (let i = 0; i < dynamicObjects.length; i++) {
    moveDynamicObject(dynamicObjects[i]);
}