//document.ready
$(ready)

//ready function
function ready() {
    //get the values from input fields
    $('#submitBtn').on('click', addEmployee);
    // $('#submit-btn').on('click', deleteBtn,removeEmployee);
}

let submitBtn = $('#submitBtn')

//employee array to hold employee objects
let employees = [];

// store the information to calculate monthly costs, append information to the DOM and clear the input fields.
function addEmployee() {
    //inputs
    let firstName = $('#firstName')
    let lastName = $('#lastName')
    let employeeId = $('#employeeId')
    let jobTitle = $('#jobTitle')
    let annualSalary = $('#annualSalary')

    //display to DOM
    $('tbody').append(`<tr>
    <td>${firstName.val()}</td>
    <td>${lastName.val()}</td>
    <td>${employeeId.val()}</td>
    <td>${jobTitle.val()}</td>
    <td>${annualSalary.val()}</td>
    <td><button id="deleteBtn">Remove</button></td>
</tr>`);

    //create employee object
    let newEmployee = {
        firstName: firstName.val(),
        lastName: lastName.val(),
        employeeId: Number(employeeId.val()),
        jobTitle: jobTitle.val(),
        annualSalary: Number(annualSalary.val())
    }

    //push employee object to employees array
    employees.push(newEmployee);
    console.log(employees);

    //clear inputs
    clearInputs();
    //calculate monthly salary
    totalMonthlySalary();
}

function clearInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function totalMonthlySalary() {
    let sum = 0;
    for (employee of employees) {
        sum += employee.annualSalary
        console.log(sum);
    }
}