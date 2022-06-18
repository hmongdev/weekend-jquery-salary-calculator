//document.ready
$(ready)

//ready function
function ready() {
    //get the values from input fields
    $('#submit-btn').on('click', addEmployee);
}

//inputs
let firstName = $('#first-name')
let lastName = $('#last-name')
let employeeId = $('#employee-id')
let jobTitle = $('#job-title')
let annualSalary = $('#annual-salary')
let submitBtn = $('#submit-btn')

console.log(lastName.val());

// store the information to calculate monthly costs, append information to the DOM and clear the input fields.
function addEmployee() {
    $('tbody').append(`<tr>
    <td>${firstName.val()}</td>
    <td>${lastName.val()}</td>
    <td>${employeeId.val()}</td>
    <td>${jobTitle.val()}</td>
    <td>${annualSalary.val()}</td>
    <td><button id="delete-btn">Remove</button></td>
</tr>`);
    clearInputs();
}

function clearInputs() {
    firstName.val('');
    lastName.val('');
    employeeId.val('');
    jobTitle.val('');
    annualSalary.val('');
}

// For Base mode, it does **not** need to remove that Employee's salary from the reported total.