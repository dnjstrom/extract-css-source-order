import SomeComponent from "./some-component/index.js"
import css from "./styles.css"

const element = SomeComponent
element.classList.add(css.shouldOverride)

document.getElementById("root").appendChild(element)