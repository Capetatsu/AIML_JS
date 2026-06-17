let employees = [];

function addEmployee() {

  let emp = {
    name: document.getElementById("name").value,
    id: document.getElementById("empId").value,
    salary: Number(document.getElementById("salary").value),
    department: document.getElementById("dept").value
  };

  employees.push(emp);

  alert("Employee Added");

  document.getElementById("name").value = "";
  document.getElementById("empId").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("dept").value = "";
}

function displayEmployees() {

  let output = "<h3>All Employees</h3>";

  employees.forEach(emp => {
    output += `
      ${emp.name} | ${emp.id} | ₹${emp.salary} | ${emp.department}<br>
    `;
  });

  document.getElementById("output").innerHTML = output;
}

function filterSalary() {

  let filtered = employees.filter(emp => emp.salary > 50000);

  let output = "<h3>Salary > 50000</h3>";

  filtered.forEach(emp => {
    output += `${emp.name} - ₹${emp.salary}<br>`;
  });

  document.getElementById("output").innerHTML = output;
}

function totalSalary() {

  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  document.getElementById("output").innerHTML =
    `<h3>Total Salary: ₹${total}</h3>`;
}

function averageSalary() {

  if (employees.length === 0) return;

  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  document.getElementById("output").innerHTML =
    `<h3>Average Salary: ₹${(total / employees.length).toFixed(2)}</h3>`;
}

function countDepartment() {

  let dept = prompt("Enter department name");

  let count = employees.filter(
    emp => emp.department.toLowerCase() === dept.toLowerCase()
  ).length;

  document.getElementById("output").innerHTML =
    `<h3>${dept}: ${count} employees</h3>`;
}