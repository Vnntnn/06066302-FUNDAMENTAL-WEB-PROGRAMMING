function initTable() {
    const table = document.createElement('table');
    const tHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const tbody = document.createElement('tbody');

    const headerList = ['ID', 'Name', 'Gender', 'Position', 'Address'];
    headerList.forEach(text => {
        const th = document.createElement('th');
        const thText = document.createTextNode(text);
        th.appendChild(thText);
        th.id = `${text}-title`;

        headerRow.appendChild(th);
    });

    tHeader.appendChild(headerRow);
    table.appendChild(tHeader);
    table.appendChild(tbody);

    return table;
}

function initTableData(data) {
    const tbody = document.querySelector('tbody');
    data.forEach((employee, index) => {
        const tr = document.createElement('tr');

        const id = document.createElement('td');
        const name = document.createElement('td');
        const gender = document.createElement('td');
        const position = document.createElement('td');
        const address = document.createElement('td');

        id.appendChild(document.createTextNode(employee.id));
        name.appendChild(document.createTextNode(`${employee.FirstName} ${employee.LastName}`));
        gender.appendChild(document.createTextNode(employee.Gender[0]));
        position.appendChild(document.createTextNode(employee.Position));
        address.appendChild(document.createTextNode(employee.Address));
        id.id = `emp-id-${index}`;
        name.id = `name-id-${index}`;
        gender.id = `gender-id-${index}`;
        position.id = `pos-id-${index}`;
        address.id = `add-id-${index}`;
        id.class = `emp`;
        name.class = `emp`;
        gender.class = `emp`;
        position.class = `emp`;
        address.class = `emp`;

        tr.append(id, name, gender, position, address);
        tbody.appendChild(tr);

        tr.style.backgroundColor = (index % 2 == 0) ? '#f5f5f5': 'white'
        tr.style.border = (index % 2 == 0) ? '1px solid #fcfbfb': '1px solid white'
    });
}

fetch('employees.json')
    .then(response => response.json())
    .then(data => initTableData(data))
    .catch(err => console.log('err', err));

function initPage() {
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(initTable());
}

initPage()
