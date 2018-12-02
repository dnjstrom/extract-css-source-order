var css = {"shouldBeOverriden":"styles_shouldBeOverriden__vmUrc"};

const element = document.createElement("div");
const text = document.createTextNode("This should be green");
element.appendChild(text);
element.classList.add(css.shouldBeOverriden);

var css$1 = {"shouldOverride":"styles_shouldOverride__2jAM3"};

const element$1 = element;
element$1.classList.add(css$1.shouldOverride);

document.getElementById("root").appendChild(element$1);
