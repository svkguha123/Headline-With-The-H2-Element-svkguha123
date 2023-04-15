let employeeList = [];
let employeeCount = 0;

function addEmployee() {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;

  if (!name || !profession || !age) {
    document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = "";
    employeeList.push({
      id: ++employeeCount,
      name: name,
      profession: profession,
      age: age
    });
    document.getElementById("dummy").innerHTML = "";
    document.getElementById("success").innerHTML = "Success : Employee Added!";
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    updateTable();
  }
}
function updateTable() {
    let employeeListElement = document.getElementById("employeeList");
    employeeListElement.innerHTML = "";
    
    employeeList.forEach(employee => {
      let row = document.createElement("tr");
      let slNo = document.createElement("td");
      let name = document.createElement("td");
      let profession = document.createElement("td");
      let age = document.createElement("td");
      let deleteBtn = document.createElement("button");
      
      slNo.innerHTML = employee.id;
      name.innerHTML = "Name: "+employee.name;
      profession.innerHTML = "Profession: " + employee.profession;
      age.innerHTML = "Age: " + employee.age;
      deleteBtn.innerHTML = "Delete User";
      deleteBtn.onclick = function() {
        deleteEmployee(employee.id);
      };
      row.appendChild(deleteBtn);
      
      row.appendChild(slNo);
      row.appendChild(name);
      row.appendChild(profession);
      row.appendChild(age);
      
      employeeListElement.appendChild(row);
      employeeListElement.appendChild(deleteBtn);
    });
  }
  
  function deleteEmployee(id) {
    employeeList = employeeList.filter(employee => employee.id !== id);
    updateTable();
  }