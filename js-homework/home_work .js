const form = document.querySelector('.todo-form'); 
const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');

form.addEventListener('submit', (Event) => {
    Event.preventDefault();

    const text = input.value.trim()

    if (text === '') {
        return;
    }

    const li = document.createElement('li')
    li.textContent = text;

    const button = document.createElement('button')
    button.textContent = 'x';
    button.onclick = () => li.remove();

    li.appendChild(button);
    list.appendChild(li);

    input.value = '';
    input.focus();
});