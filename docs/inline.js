function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_shouldBeOverriden__vmUrc {\n  background: #E74C3C;\n  padding: 30px;\n  color: white;\n  font-weight: bold;\n}";
var css$1 = {"shouldBeOverriden":"styles_shouldBeOverriden__vmUrc"};
styleInject(css);

const element = document.createElement("div");
const text = document.createTextNode("This should be green");
element.appendChild(text);
element.classList.add(css$1.shouldBeOverriden);

var css$2 = ".styles_shouldOverride__2jAM3 {\n  background: #2ECC71;\n}";
var css$3 = {"shouldOverride":"styles_shouldOverride__2jAM3"};
styleInject(css$2);

const element$1 = element;
element$1.classList.add(css$3.shouldOverride);

document.getElementById("root").appendChild(element$1);
