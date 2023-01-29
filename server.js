const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker'

    },
    console.log("Connection Created")
)

function menu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            pageSize: 8,
            message: 'Please choose from the following:',
            choices: [
                '1. View All Department',
                '2. View All Roles',
                '3. View All Employees',
                '4. Add a Department',
                '5. Add a Role',
                '6. Add an Employee',
                '7. Update an Employee Role',
                '8. EXIT OUT'
            ]
        }
    ]).then((object) => {
        switchOfChoice(object.choice.charAt(0))
    });
}
function switchOfChoice(choice) {
    switch (choice) {
        case '1':
            viewDepartments();
            break;
        case '2':
            viewRoles();
            break;
        case '3':
            viewEmployees();
            break;
        case '4':
            addDepartment();
            break;
        case '5':
            addRole();
            break;
        case '6':
            addEmployee();
            break;
        case '7':
            updateEmployeeRole();
        default:
            console.log(` GoodBye!`)
            process.kill(process.pid, "SIGINT");
    }
}

async function getDepartments() {
    const sql = `SELECT * FROM departments`;
    let departments = []

}