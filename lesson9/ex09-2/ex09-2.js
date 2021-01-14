let currentIndex = 0;
const list = document.getElementById('list');

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');

    img.setAttribute('src', 'http://placehold.it/64x64');
    img.setAttribute('alt', `アイテム${currentIndex + 1}`);

    span.textContent = `アイテム${currentIndex + 1}`;

    li.appendChild(img);
    li.appendChild(span);
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