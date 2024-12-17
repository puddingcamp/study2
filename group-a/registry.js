const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    // component: 돔 요소를 가져오는 함수
    const element = component(targetElement, state);
    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;

      const child = registry[name];
      if (!child) {
        return;
      }
      target.replaceWith(child(target, state));
    });

    return element;
  };
};
