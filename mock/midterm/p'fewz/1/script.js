fetch('songs.json')
    .then(response => response.json())
    .then(data => intiSongTable(data))
    .catch(err => console.log('err', err));

function intiSongTable(data) {
    const dataArr = Object.keys(data)[0];
    const body = document.querySelector('body');
    const table = document.createElement('table');

    const titleNames = [];
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');

    const tbody = document.createElement('tbody');

    const songs = data[`${dataArr}`];
    // Find all titles name in json
    songs.forEach(element => {
        Object.keys(element).forEach(em => {
            // Find title names unique
            !titleNames.includes(em) && titleNames.push(em);
        });
    });

    // Insert table title
    titleNames.forEach(title => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(title));
        trHead.appendChild(th);
    })
    thead.appendChild(trHead);
    table.appendChild(thead);

    // Add songs to table
    songs.forEach(element => {
        const trBody = document.createElement('tr');
        Object.values(element).forEach(detail => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(detail));
            trBody.appendChild(td);
        })
        tbody.appendChild(trBody);
    })
    
    table.appendChild(tbody);
    body.appendChild(table);
}