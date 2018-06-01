import css from "./styles.css"

const element = document.createElement("div")
const text = document.createTextNode("This should be green")
element.appendChild(text)
element.classList.add(css.shouldBeOverriden)

export default element