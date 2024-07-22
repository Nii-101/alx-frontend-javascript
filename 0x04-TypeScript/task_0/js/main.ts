// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Avery',
  lastName: 'Doe',
  age: 20,
  location: 'New Zealand'
};

const student2: Student = {
  firstName: 'Aevy',
  lastName: 'Smith',
  age: 22,
  location: 'Zimbabwe'
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const headerRow = table.insertRow();
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

studentsList.forEach(student => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

document.body.appendChild(table);

