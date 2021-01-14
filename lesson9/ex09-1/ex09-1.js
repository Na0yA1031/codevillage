let currentIndex = 0;
const list = document.getElementById('list');

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `アイテム${currentIndex + 1}`
    list.appendChild(li);
    currentIndex++;
});

const removeButton = document.getElementById('remove');
removeButton.addEventListener('click', () => {
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild)
        currentIndex--;
    }
});

