const calc = document.getElementById('calc');
const textArea = document.getElementById('number-input');
const btn = document.getElementById('submit-btn');

btn.addEventListener('click', () => {
	const num = Number(textArea.value);
	const otable = document.getElementById('calc-table');

	if (num >= 1 && num <= 12) {
		if (otable) {
            otable.remove();
        }
		// Init table
		const table = document.createElement('table');
		const thead = document.createElement('thead');
		const tbody = document.createElement('tbody');
		const tr = document.createElement('tr');
		const th1 = document.createElement('th');
		const th2 = document.createElement('th');
		const multiplyNumberText = document.createTextNode('เลขคูณ');
		const resultText = document.createTextNode('ผลลัพธ์');

		th1.appendChild(multiplyNumberText);
		th2.appendChild(resultText);

		tr.appendChild(th1);
		tr.appendChild(th2);

		thead.appendChild(tr);

		table.appendChild(thead);

		// init result
		for (let i = 1; i <= 12; i++) {
			let tr = document.createElement('tr');
			let td1 = document.createElement('td');
			let td2 = document.createElement('td');

			const multiplyFormulaText = document.createTextNode(`${num} x ${i}`);
			const resMulti = document.createTextNode(`${num * i}`);

			td1.appendChild(multiplyFormulaText);
			td2.appendChild(resMulti);

			tr.appendChild(td1);
			tr.appendChild(td2);

			tbody.appendChild(tr);
		}

		table.appendChild(tbody);
		calc.appendChild(table);
		table.id = "calc-table";
	}
	else {
		alert("Please enter number range 1 - 12");
	}
})