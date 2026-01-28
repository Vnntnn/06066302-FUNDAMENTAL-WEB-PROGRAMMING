const add = document.getElementById('add');
const del = document.getElementById('del');
const allList = document.getElementById('lists');
INDEX = 0;

function initLocal() {
    localStorage.setItem("Lists", JSON.stringify({}));
}

function setLocal(lists) {
    localStorage.removeItem("Lists");
    localStorage.setItem("Lists", JSON.stringify(lists));
}

function addListNode(name, idx) {
    if (name === ``) {
        alert("Please input your movie/series name.");
        return;
    }

    const lists = document.getElementById('lists');
    const mov = document.createElement('div');
    mov.setAttribute("id", `item-${idx}`);
    mov.setAttribute("class", "items");
    const movName = document.createElement('p');
    const movNameText = document.createTextNode(name);
    movName.appendChild(movNameText);
    mov.appendChild(movName);

    const delItem = document.createElement('button');
    delItem.setAttribute("type", "submit");
    delItem.setAttribute("id", "del-item");
    delItem.appendChild(document.createTextNode("ลบ"));

    delItem.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('Lists'));
        const itemIdx = document.getElementById(`item-${idx}`);
        itemIdx.remove();
        delete data[`${idx}`];
        setLocal(data);
        INDEX--;
    });

    mov.appendChild(delItem);
    lists.appendChild(mov);
    addItemLocal(name);
}

function addItemLocal(name) {
    let items = JSON.parse(localStorage.getItem('Lists'));
    items[`${INDEX}`] = name;
    localStorage.removeItem("Lists");
    localStorage.setItem("Lists", JSON.stringify(items));
    INDEX++;
}

function clearAll() {
    const lists = document.querySelectorAll(".items");
    lists.forEach(elem => {
        elem.remove();
    });
    localStorage.clear();
    initLocal();
    INDEX = 0;
}

add.addEventListener('click', () => {
    let inp = document.getElementById('name');
    addListNode(inp.value,INDEX);
    inp.value = "";
});

del.addEventListener('click', clearAll);
initLocal();
