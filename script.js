document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
        ${taskText}
        <div class="button-group">
            <button class="edit">Change</button>
            <button class="delete">Delete</button>
        </div>
        `;

        taskList.appendChild(li);
        newTaskInput.value = '';

        li.querySelector('.edit').addEventListener('click', () => {
            const newText = prompt('Write new text', taskText);
            if (newText !== null && newText.trim() !== '') {
                li.firstChild.textContent = newText;
            }
        });

        li.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    });

    newTaskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
