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

    //declare the jQuery inputs
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Math.round($('#annualSalary').val());

    //create employee object => grabbing the values from inputs
    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        employeeId: Number(employeeId),
        jobTitle: jobTitle,
        annualSalary: Number(annualSalary)
    }

    //if inputs are empty => error message
    if (firstName === '' || lastName === '' || employeeId === '' || jobTitle === '' || annualSalary === '') {
        alert('Please fill in all the inputs before adding an employee');
        // else => add employee object
    } else {
        //push employee object to employees array => adding employee to table
        employees.push(newEmployee);
        console.log(employees);

        // append information to the DOM 
        // could use a for looop to append employees
        $('tbody').append(`<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeId}</td>
            <td>${jobTitle}</td>
            <td id='removedSalary'>${annualSalary}</td>
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

//declare monthlyTotal 
//1. local = keep inside totalMonthlySalary function
//2. global = reassign it within the function
let monthlyTotal = 0;

function totalMonthlySalary() {
    monthlyTotal = 0;
    //loop thru employees
    for (employee of employees) {
        //add all employee's salaries
        monthlyTotal += (employee.annualSalary / 12);
        console.log(monthlyTotal);
    }
    //update DOM with monthlyTotal
    $('#total-monthly').text(monthlyTotal.toFixed(2));
    //if monthlyTotal > 20,000 change color to red
    changeColor();
}

function changeColor() {
    if (monthlyTotal > 20000) {
        $('#total-monthly').css('color', 'red');
    } else {
        $('#total-monthly').css('color', 'black');
    }
}

// _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky!

//remove the employee's salary
function removeEmployee() {
    
    //grab the REMOVED salary //is there a better way to do this
    let removedSalary = Number($(this).parent().parent().children('#removedSalary').text());
    
    // Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. 
    Math.round(monthlyTotal -= (removedSalary / 12));
    //calculate the removed salary
    console.log(`Monthly total is:`, monthlyTotal);
    //push to DOM
    $('#total-monthly').text(monthlyTotal.toFixed(2));

    //declare jQuery object => all the 'td' elements including 'tr'
    let tr = $(this).parents('tr');
    //target the employee object and remove all its children
    tr.remove();
    //check color
    changeColor();
}