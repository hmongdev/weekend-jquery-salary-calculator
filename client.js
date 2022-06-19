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

//
function addEmployee() {

    //jQuery variables -  store the information to calculate monthly costs
    let firstName = $('#firstName');
    let lastName = $('#lastName');
    let employeeId = $('#employeeId');
    let jobTitle = $('#jobTitle');
    let annualSalary = $('#annualSalary');

    //if inputs are empty => error message
    if (firstName.val() === '' || lastName.val() === '' || employeeId.val() === '' || jobTitle.val() === '' || annualSalary.val() === '') {
        alert('Please fill in all the inputs before adding an employee');
        // else => add employee object
    } else {
        //create employee object => push employeeObject into array
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

        //append information to the DOM 
        $('tbody').append(`<tr>
        <td>${firstName.val()}</td>
        <td>${lastName.val()}</td>
        <td>${employeeId.val()}</td>
        <td>${jobTitle.val()}</td>
        <td>${annualSalary.val()}</td>
        <td><button id="removeBtn"> ❌ </button></td>
    </tr>`);

        //clear inputs
        clearInputs();

        //calculate monthly salary
        totalMonthlySalary();
    }
}

function clearInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

//declare sum variable
let monthlyTotal = 0;

function totalMonthlySalary() {
    //loop thru employees
    for (employee of employees) {
        //add all employee's salaries
        monthlyTotal += employee.annualSalary;
        monthlyTotal /= 12
        //update the monthlyTotal //round 2 decimal points
        $('#total-monthly').text(monthlyTotal.toFixed(2));
    }
    if (monthlyTotal >= 20000) {
        $('#total-monthly').css('color', 'red');
    }
}

// Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky!

//remove the employee's salary
function removeEmployee() {
    //target the employee and remove it
    $(this).parents('tr').remove();
    //get the removedAnnualSalary from removed employee
    let removedAnnualSalary = $('#annualSalary').text();
    console.log(removedAnnualSalary);
    //subtract removedSalary from the total
    monthlyTotal -= removedAnnualSalary * 12;
}