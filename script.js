
const inputItemName = document.querySelector(".item-add_input");

const contentList = document.querySelector(".content-list");

const buttonAddItem = document.querySelector(".item-add_button");
const buttonCheck = document.querySelector(".list-item_check");

function buttonCreateItem() {

    const listItemButtons = document.createElement('div');
    const buttonEdit = document.createElement('button');
    const buttonEditImage = document.createElement('img');
    const buttonDelete = document.createElement('button');
    const buttonDeleteImage = document.createElement('img');
    const buttonConfirm = document.createElement('button');
    const buttonConfirmImage = document.createElement('img');

    function listButtons() {

        listItemButtons.classList.add('list-item_buttons');
        itemListCreate.append(listItemButtons); // colocando a div dentro do li

        buttonEdit.classList.add('list-item_button');
        buttonEdit.append(buttonEditImage);
        buttonEditImage.classList.add('edit-icon');
        buttonEditImage.src = 'assets/pen-icon.svg';
        listItemButtons.append(buttonEdit); // colocando botão dentro da div

        buttonDelete.classList.add('list-item_button');
        buttonDelete.append(buttonDeleteImage);
        buttonDeleteImage.classList.add('delete-icon');
        buttonDeleteImage.src = 'assets/trash-icon.svg';
        listItemButtons.append(buttonDelete); // colocando botão dentro da div

        buttonConfirm.classList.add('list-item_button');
        buttonConfirm.append(buttonConfirmImage);
        buttonConfirmImage.classList.add('confirm-icon');
        buttonConfirmImage.src = 'assets/check-icon.svg';
        listItemButtons.append(buttonConfirm);

        buttonEdit.addEventListener('click', function() {
            let newText = prompt("Dígite um novo nome para a tarefa");
            itemContentText.textContent = newText;
        });

        buttonDelete.addEventListener('click', function() {
            itemListCreate.remove();
        });

        buttonConfirm.addEventListener('click', function() {

            if (itemListCreate.classList.contains('confirm')) {
                itemListCreate.classList.remove('confirm')
            } else {
                itemListCreate.classList.add('confirm')
            }

        });

    };

    function listButtonsHide() {
        listItemButtons.remove();
    };

    const itemListCreate = document.createElement('li');
    const listItemItens = document.createElement('div');
    const itemButton = document.createElement('button');
    const itemContentText = document.createElement('p');

    let itemText = inputItemName.value;
    inputItemName.value = '';

    itemListCreate.classList.add('list-item');
    contentList.append(itemListCreate); // o li ficar dentro do ul

    listItemItens.classList.add('list-item_itens');
    itemListCreate.append(listItemItens); // a div ficar dentro do li

    itemButton.classList.add('list-item_check');
    listItemItens.append(itemButton); // o botão ficar dentro da div

    itemContentText.textContent = itemText;
    itemContentText.classList.add('list-item_text');
    listItemItens.append(itemContentText); // o p ficar dentro da div



    itemButton.addEventListener('click', function() {
        itemButton.classList.toggle('checked');

        if (itemButton.classList.contains('checked')) {
            listButtons();

        } else {
            listButtonsHide();
        };
    });

};

buttonAddItem.addEventListener('click', buttonCreateItem);

// botão enter
inputItemName.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        buttonCreateItem();
    };
});