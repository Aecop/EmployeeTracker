const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");


const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "CutMeinfor10%!",
    database: "employee_info_db",

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    startApp();

});

function startApp() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "1. Add department",
                "2. Add role",
                "3. Add employee",
                "4. View departments",
                "5. View roles",
                "6. View employees",
                "6. Update employee role",
                "7. Quit"
            ],
            message: "What would you like to do?",
            name: "option"
        })
        .then(function(result) {
            console.log("You entered: " + result.option);

            switch (result.option) {
                case "1. Add department":
                    addDepartment();
                    break;
                case "2. Add role":
                    addRole();
                    break;
                case "3. Add employee":
                    addEmployee();
                    break;
                case "4. View departments":
                    viewDepartment();
                    break;
                case "5. View roles":
                    viewRoles();
                    break;
                case "6. View employees":
                    viewEmployees();
                    break;
                case "7. Update employee role":
                    updateEmployee();
                    break;
                default:
                    quit();
            }
        });
}


function addDepartment() {


    inquirer.prompt({

        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startApp()
        })
    })
}


function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the role?",
                name: "roleName"
            },
            {
                type: "input",
                message: "What is the salary for this role?",
                name: "salaryTotal"
            },
            {
                type: "input",
                message: "What is the department id number?",
                name: "deptID"
            }
        ])
        .then(function(answer) {


            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
                if (err) throw err;
                console.table(res);
                startApp();
            });
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the first name of the employee?",
                name: "eeFirstName"
            },
            {
                type: "input",
                message: "What's the last name of the employee?",
                name: "eeLastName"
            },
            {
                type: "input",
                message: "What is the employee's role id number?",
                name: "roleID"
            },
            {
                type: "input",
                message: "What is the manager id number?",
                name: "managerID"
            }
        ])
        .then(function(answer) {


            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
                if (err) throw err;
                console.table(res);
                startApp();
            });
        });
}

//Since we're using inquirer, we can pass the query into the method as an array

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which employee would you like to update?",
                name: "eeUpdate"
            },

            {
                type: "input",
                message: "What do you want to update to?",
                name: "updateRole"
            }
        ])
        .then(function(answer) {

            connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
                if (err) throw err;
                console.table(res);
                startApp();
            });
        });
}

function viewDepartment() {

    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });

}

function viewRoles() {

    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });

}

function viewEmployees() {
    // select from the db
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });

}

function quit() {
    connection.end();
    process.exit();
}