let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let dept = document.getElementById("dept").value;
    let salary = Number(document.getElementById("salary").value);

    employees.push({
        name: name,
        id: id,
        dept: dept,
        salary: salary
    });

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("salary").value = "";

    displayAll();
}

function displayAll() {

    let table = document.getElementById("table");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
    `;

    employees.forEach(function(emp) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = emp.name;
        row.insertCell(1).innerHTML = emp.id;
        row.insertCell(2).innerHTML = emp.dept;
        row.insertCell(3).innerHTML = emp.salary;

    });
}

function salaryAbove() {

    let result = employees.filter(function(emp) {
        return emp.salary > 50000;
    });

    let text = "Employees with salary > 50000:<br>";

    result.forEach(function(emp) {
        text += emp.name + " (" + emp.salary + ")<br>";
    });

    document.getElementById("result").innerHTML = text;
}

function averageSalary() {

    let sum = 0;

    employees.forEach(function(emp) {
        sum += emp.salary;
    });

    let avg = sum / employees.length;

    document.getElementById("result").innerHTML =
        "Average Salary: " + avg.toFixed(2);
}

function countDepartment() {

    let deptCount = {};

    employees.forEach(function(emp) {

        if (deptCount[emp.dept]) {
            deptCount[emp.dept]++;
        } else {
            deptCount[emp.dept] = 1;
        }

    });

    let text = "Department Count:<br>";

    for (let d in deptCount) {
        text += d + " : " + deptCount[d] + "<br>";
    }

    document.getElementById("result").innerHTML = text;
}
