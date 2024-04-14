const inputBox = document.querySelector('#task');
const tasksList = document.querySelector('#tasks');

const addTask = () => {
    if(inputBox.value === '') {
        alert('Please enter a task');
        return;
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        tasksList.appendChild(task);
        let span = document.createElement('span');
        span.textContent = '❌';
        task.appendChild(span);
        inputBox.value = '';
    }
    saveList();
}

tasksList.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    saveList();
}, false);

const saveList = () => {
    localStorage.setItem('tasks', tasksList.innerHTML);
}

tasksList.innerHTML = localStorage.getItem('tasks');