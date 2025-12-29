const balanceEl = document.getElementById('amount');
const tbody = document.querySelector('tbody');
const addBtn = document.querySelector('button');
const selectEl = document.querySelector('select');
const dateInput = document.getElementById('s-date');
let balance = Number(balanceEl.textContent) || 0.00;

function setToday() {
    dateInput.value = new Date().toISOString().slice(0, 10);
}
setToday();

function formatDate(date) {
    const parts = date.split('-');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function newBalance(bal, amount, type) {
    const amt = Number(amount) || 0;
    return type === 'income' ? bal + amt : bal - amt;
}

function addBill(date, name, type, amount) {
    const tr = document.createElement('tr');
    const income = type === 'income' ? (amount ? Number(amount).toFixed(2) : '0.00') : '0.00';
    const outcome = type === 'outcome' ? (amount ? Number(amount).toFixed(2) : '0.00') : '0.00';
    const cells = [formatDate(date), name, income, outcome];

    cells.forEach(text => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(text));
        tr.appendChild(td);
    });

    return tr;
}

addBtn.addEventListener('click', () => {
    const date = dateInput.value;
    const name = document.getElementById('bill-name').value.trim();
    const type = selectEl.value;
    const amount = Number(document.getElementById('bill-amount').value);

    if (!name) {
        alert('Please enter a bill name.');
        return;
    }
    if (!amount) {
        alert('Please enter a bill data price');
        return;
    }

    const tr = addBill(date, name, type, amount);
    tbody.appendChild(tr);

    balance = newBalance(balance, amount, type);
    balanceEl.textContent = balance.toFixed(2);

    document.getElementById('bill-name').value = '';
    document.getElementById('bill-amount').value = '';
    selectEl.value = 'outcome';
    setToday();
});