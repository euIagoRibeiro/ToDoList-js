
const textAdd = document.querySelector(".list-text");
const listItens = document.querySelector(".list-itens");
const buttonAddItem = document.querySelector(".list-add");

function buttonAdd() {

    const newItem = document.createElement("li");
    const buttonDeleteItem = document.createElement("button");
    const buttonEditItem = document.createElement("button");
    const buttons = document.createElement("div");

    let itemText = textAdd.value;
    let buttonRemoveText = "-";
    let buttonEditText = "!";

    if (itemText === "") {
        alert("Dígito algo no campo para poder criar um item");
    } else {
        newItem.textContent = itemText;
        newItem.classList.add("list-item");
        listItens.appendChild(newItem);
        textAdd.value = "";
    
        function listItensButtons() {
            buttons.classList.add("list-buttons");
            newItem.appendChild(buttons);
    
            buttonDeleteItem.classList.add("list-remove");
            buttonDeleteItem.textContent = buttonRemoveText;
            buttons.appendChild(buttonDeleteItem);
        
            buttonDeleteItem.addEventListener("click", function(){
                textAdd.value = "";
                newItem.remove();
            
            });
    
            buttonEditItem.classList.add("list-edit");
            buttonEditItem.textContent = buttonEditText;
            buttons.appendChild(buttonEditItem);
        };

        listItensButtons()

        buttonEditItem.addEventListener("click", function() {
            let newItemText = prompt("Digite o novo nome");
            newItem.textContent = newItemText;
            listItensButtons();
        });

    };
    

};

buttonAddItem.addEventListener("click", buttonAdd);

textAdd.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buttonAdd();
    };
});