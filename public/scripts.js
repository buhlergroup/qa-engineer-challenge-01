async function create(text) {
    const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });

    return res.json();
}

async function read() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    const res = await fetch('/api/todos');
    const todos = await res.json();

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.className = todo.done ? 'done' : 'open';

        li.onclick = async () => {
            await update(todo.id);
            await read();
        };

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = async (e) => {
            e.stopPropagation();
            await remove(todo.id);
            await read();
        };

        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

async function update(id) {
    await fetch(`/api/todos/${id}`, {method: 'PUT'});
}

async function remove(id) {
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
}

read().then(
    () => console.log('Todos loaded successfully!'),
    err => console.error('Error loading todos:', err)
);
