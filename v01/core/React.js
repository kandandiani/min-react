function createTextNode(text) {
  return {
    type: "TEXT_ELE",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  console.log(el.type, "el");
  const dom =
    el.type === "TEXT_ELE"
      ? document.createTextNode("")
      : document.createElement(el.type);

  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  const children = el.props.children;
  console.log(children);
  children.forEach((child) => {
    render(child, dom);
  });

  container.append(dom);
}
const React = {
  render,
  createElement,
  createTextNode
};
export default React;
