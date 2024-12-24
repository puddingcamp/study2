let template;

const getTemplate = () => {
  if (!template) {
    template = document.getElementById('todo-app');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const addEvents = (targetElement, events) => {
  targetElement.querySelector('.new-todo').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      if (e.target.value == '') {
        alert('값을 입력해주세요 : )');
      } else {
        events.addItem(e.target.value);
      }
      e.target.value = '';
    }
  });
};

export default (targetElement, state, events) => {
  const newApp = targetElement.cloneNode(true);

  newApp.innerHTML = '';
  newApp.appendChild(getTemplate());
  addEvents(newApp, events);

  return newApp;
};
