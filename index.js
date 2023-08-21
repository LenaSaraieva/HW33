function  generateList(array) {
const ul = document.createElement('ul');
for (const item of array) {
    const li = document.createElement('li');
    if (Array.isArray(item)) {
        li.appendChild(generateList(item));
    } else {
        li.textContent = item;
    }

    ul.appendChild(li);
}
return ul;
}
const array = [1, 2, 3, 4, 5, 'apple', 'orange'];
const listContainer = document.getElementById('listContainer');
const generatedList = generateList(array);
listContainer.appendChild(generatedList);