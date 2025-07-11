let employees = JSON.parse(localStorage.getItem('employees')) || [];
let currentPage = 1;
let itemsPerPage = 10;

const employeeList = document.getElementById('employee-list-container');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const paginationContainer = document.getElementById('pagination-controls');
const filterToggle = document.getElementById('filter-toggle');
const filterPanel = document.getElementById('filter-panel');
const filterFirstName = document.getElementById('filter-firstname');
const filterDepartment = document.getElementById('filter-department');
const filterRole = document.getElementById('filter-role');
const applyFiltersBtn = document.getElementById('apply-filters');

function renderEmployees(list) {
  employeeList.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedList = list.slice(start, start + itemsPerPage);

  if (paginatedList.length === 0) {
    employeeList.innerHTML = '<p>No employees found.</p>';
    paginationContainer.innerHTML = '';
    return;
  }

  paginatedList.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button class="edit-btn" data-id="${emp.id}">Edit</button>
      <button class="delete-btn" data-id="${emp.id}">Delete</button>
    `;
    employeeList.appendChild(card);
  });

  renderPagination(list.length);
}

function renderPagination(totalItems) {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.onclick = () => {
      currentPage = i;
      applyFiltersSearchSort();
    };
    paginationContainer.appendChild(btn);
  }
}

function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  employees.forEach((emp, index) => emp.id = index + 1);
  localStorage.setItem('employees', JSON.stringify(employees));
  applyFiltersSearchSort();
}


function applyFiltersSearchSort() {
  let filtered = [...employees];

  const fname = filterFirstName.value.trim().toLowerCase();
  const dept = filterDepartment.value.trim().toLowerCase();
  const role = filterRole.value.trim().toLowerCase();

  filtered = filtered.filter(emp =>
    (!fname || emp.firstName.toLowerCase().includes(fname)) &&
    (!dept || emp.department.toLowerCase().includes(dept)) &&
    (!role || emp.role.toLowerCase().includes(role))
  );

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(emp =>
      emp.firstName.toLowerCase().includes(query) ||
      emp.lastName.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query)
    );
  }

  const sortBy = sortSelect.value;
  if (sortBy === 'firstName') {
    filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (sortBy === 'department') {
    filtered.sort((a, b) => a.department.localeCompare(b.department));
  }

  renderEmployees(filtered);
}

employeeList.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains('edit-btn')) {
    window.location.href = `form.html?editId=${id}`;
  }
  if (e.target.classList.contains('delete-btn')) {
    if (confirm('Are you sure?')) {
      deleteEmployee(parseInt(id));
    }
  }
});

searchInput.addEventListener('input', () => {
  currentPage = 1;
  applyFiltersSearchSort();
});

sortSelect.addEventListener('change', () => {
  currentPage = 1;
  applyFiltersSearchSort();
});

filterToggle.addEventListener('click', () => {
  filterPanel.classList.toggle('show');
});

applyFiltersBtn.addEventListener('click', () => {
  currentPage = 1;
  applyFiltersSearchSort();
});

applyFiltersSearchSort();
