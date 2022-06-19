//document.ready
$(ready)

//ready function
function ready() {
    //get the values from input fields
    $('#submitBtn').on('click', addEmployee);
    $(document).on('click', '#removeBtn', removeEmployee);
}

let submitBtn = $('#submitBtn')

//employee array to hold employee objects
let employees = [];

// store the information to calculate monthly costs, append information to the DOM and clear the input fields.
function addEmployee() {
    //jQuery variables
    let firstName = $('#firstName');
    let lastName = $('#lastName');
    let employeeId = $('#employeeId');
    let jobTitle = $('#jobTitle');
    let annualSalary = $('#annualSalary');

    //display to DOM
    $('tbody').append(`<tr>
    <td>${firstName.val()}</td>
    <td>${lastName.val()}</td>
    <td>${employeeId.val()}</td>
    <td>${jobTitle.val()}</td>
    <td>${annualSalary.val()}</td>
    <td><button id="removeBtn">Remove</button></td>
</tr>`);

    //create employee object => grab the inputs from user
    let newEmployee = {
        firstName: firstName.val(),
        lastName: lastName.val(),
        employeeId: Number(employeeId.val()),
        jobTitle: jobTitle.val(),
        annualSalary: Number(annualSalary.val())
    }

    //push employee object to employees array => adding employee to table
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
    //declare sum variable
    let sum = 0;
    //loop thru employees
    for (employee of employees) {
        //add all employee's salaries
        sum += employee.annualSalary;
        sum /= 12;
        //update the sum
        $('#total-monthly').text(sum);
    }
    if (sum >= 200000) {
        $('#total-monthly').css('background-color', 'red');
    }
}

//remove the employee's salary
function removeEmployee() {
    //get all the parents of 'tr'
    let tr = $(this).parents('tr');
    //get the annualSalary of tr
    let removedAnnualSalary = tr.find(this).val('annualSalary');
    //check to see if we grabbed the value
    console.log(removedAnnualSalary);

    tr.remove();
    //remove object from employee array
}