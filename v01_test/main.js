// v01
// const dom = document.createElement('div');
// dom.id = 'app';
// document.querySelector('#root').append(dom);

// const textNode = document.createTextNode('');
// textNode.nodeValue = 'app';
// dom.append(textNode);

// v02 通过虚拟DOM vdom
// const textEl = {
//   type: "TEXT_ELE",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };
// const vdom = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };
// const dom = document.createElement(vdom.type);
// dom.id = vdom.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

// v03 封装render
// function createTextNode(text) {
//   return {
//     type: "TEXT_ELE",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// }
// function createElement(type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map(child => {
//         return typeof child === 'string' ? createTextNode(child) : child;
//       }),
//     },
//   };
// }

// function render(el, container) {
//   console.log(el.type, "el");
//   const dom =
//     el.type === "TEXT_ELE"
//       ? document.createTextNode("")
//       : document.createElement(el.type);

//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") {
//       dom[key] = el.props[key];
//     }
//   });

//   const children = el.props.children;
//   console.log(children);
//   children.forEach((child) => {
//     render(child, dom);
//   });

//   container.append(dom);
// }
// const textEl = createTextNode("app");
// const App = createElement("div", { id: "app" }, 'hello! ', 'min-react-', textEl);
// console.log(App, 'app');
// render(App, document.querySelector("#root"));

// v04 实现react相同结构

// const ReactDOM = {
//     createRoot: (container) => {
//         return {
//             render(app) {
//                 render(app, container);
//             }
//         }
//     }
// }
import ReactDOM from "./core/ReactDom.js";
import App from './App.js';
ReactDOM.createRoot(document.querySelector("#root")).render(App);
