const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');




button.addEventListener('click', function () {
    if (input.value.trim() != '') {
        const listItems = document.createElement('li');
        listItems.textContent = input.value;

        const delButton = document.createElement('button');
        delButton.textContent = '❌';
        delButton.addEventListener('click', function () {
            list.removeChild(listItems);
            input.focus();
        });

        listItems.appendChild(delButton);
        list.append(listItems);
        input.value = '';
    }
    input.focus();
});