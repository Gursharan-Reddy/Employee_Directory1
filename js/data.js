const defaultEmployees = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', department: 'HR', role: 'Manager' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', department: 'IT', role: 'Developer' },
  { id: 3, firstName: 'Raj', lastName: 'Kumar', email: 'raj@example.com', department: 'Finance', role: 'Analyst' },
  { id: 4, firstName: 'Sara', lastName: 'Lee', email: 'sara@example.com', department: 'Marketing', role: 'Designer' },
  { id: 5, firstName: 'David', lastName: 'Brown', email: 'david@example.com', department: 'IT', role: 'Tester' }
];

if (!localStorage.getItem('employees')) {
  localStorage.setItem('employees', JSON.stringify(defaultEmployees));
}
