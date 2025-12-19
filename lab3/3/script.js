const studentsBody = document.getElementById('students-body');
const calculateBtn = document.getElementById('calculate-btn');

const names = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H'
];

const students = names.map((name, index) => ({
    id: index + 1,
    name,
    score: Math.floor(Math.random() * 61 + 40),
    grade: ''
}));

function stdTable() {
	studentsBody.innerHTML = students
		.map(
			(student) => `
				<tr>
					<td>${student.id}</td>
					<td>${student.name}</td>
					<td>${student.score}</td>
					<td>${student.grade}</td>
				</tr>
			`
		)
		.join('');
}

function calculateGrades() {
	students.forEach((student) => {
		const score = student.score;
		if (score >= 80) student.grade = 'A';
		else if (score >= 70) student.grade = 'B';
		else if (score >= 60) student.grade = 'C';
		else if (score >= 50) student.grade = 'D';
		else student.grade = 'F';
	});
	stdTable();
}

calculateBtn.addEventListener('click', calculateGrades);

stdTable();
