export default function getListStudents() {
  const studentData = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return studentData.map((data) => ({
    id: data.id,
    firstName: data.firstName,
    location: data.location,
  }));
}
