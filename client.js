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
    let annualSalary = $('#annualSalary').val();

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
        $('tbody').append(`<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeId}</td>
            <td>${jobTitle}</td>
            <td>$${annualSalary}</td>
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

//declare monthlyTotal variable
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
    //if monthlyTotal > 20,000 change color to red
    if (monthlyTotal >= 20000) {
        $('#total-monthly').css('color', 'red');
    }
}

// Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky!

//remove the employee's salary
function removeEmployee() {
    //declare jQuery object => all the 'td' elements including 'tr'
    let tr = $(this).parents('tr')

    //target the employee object and remove it
    tr.remove();

    //remove employee object from array => tr
    let removedProperties = Array.from(tr.find('td')); // => all the 'td' elements in array
    console.log(removedProperties);

    // for (value of removedProperties) {
    //     console.log(value.contains('$'));
    // }

    //subtract removedSalary from the total
    // monthlyTotal -= removedAnnualSalary * 12;
}