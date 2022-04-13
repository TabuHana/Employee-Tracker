const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection('root:300Monkeysonfire!!!@localhost/employeeManager_db')

// Need Type, name, message. Prompt for event
const homeScreen = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'home',
    message: 'Select an option',
    choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role']
  }])
     .then(home => {
       console.log(home)
    //   switch (home.home) {
    //     case 'Add Department':
    //       addDepartment()
    //       break

        // case 'Add Role':
        //   addRole()
        //   break

        // case 'Add Employee':
        //   addEmployee()
        //   break

        // case 'View Departments':
        //   viewDepartments()
        //   break

        // case 'View Roles':
        //   viewRoles()
        //   break

        // case 'View Employees':
        //   viewEmployees()
        //   break

        // case 'Update Employee Role':
        //   Update()
        //   break

        // default:
        //   console.log('Exiting System')
        //   break
//       }
     })
 }

// const addDepartment = () => {
//   inquirer.prompt([{
//     type: 'input',
//     name: 'name',
//     message: 'Enter the name of the department:'
//   }])
//     .then(department => {
//       db.query('INSERT INTO departments SET ?', department, err => {
//         if (err) { console.log(err) }
//       })
//       console.log('Department added, returning to home screen...')
//       homeScreen()
//     })
// }

// const addRole = () => {
//   inquirer.prompt([{
//     type: 'input',
//     name: 'title',
//     message: 'Enter the title of the role:'
//   },
//   {
//     type: 'input',
//     name: 'salary',
//     message: 'Enter the salary of the role:'
//   },
//   {
//     type: 'input',
//     name: 'department_id',
//     message: 'Enter the id of the role:'
//   }])
//     .then(role => {
//       db.query('INSERT INTO roles SET ?', role, err => {
//         if (err) { console.log(err) }
//       })
//       console.log('Role added, returning to home screen...')
//       homeScreen()
//     })
// }

// const addEmployee = () => {
//   inquirer.prompt([{
//     type: 'input',
//     name: 'first_name',
//     message: 'Enter the first name of the employee:'
//   },
//   {
//     type: 'input',
//     name: 'last_name',
//     message: 'Enter the last name of the employee:'
//   },
//   {
//     type: 'input',
//     name: 'role_id',
//     message: 'Enter the id of the employee:'
//   },
//   {
//     type: 'list',
//     name: 'managerBool',
//     message: 'Is the employee a manager?',
//     choices: ['Yes', 'No']
//   }])
//     .then(employee => {
//       if (employee.managerBool === 'Yes') {
//         delete employee.managerBool
//         db.query('INSERT INTO employees SET ?', employee, err => {
//           if (err) { console.log(err) }
//         })
//         homeScreen()
//       } else if (employee.managerBool === 'No') {
//         inquirer.prompt([{
//           type: 'input',
//           name: 'manager_id',
//           message: 'Enter the id of employee\'s manager:'
//         }])
//           .then(nonManager => {

//             delete employee.managerBool

//             // let regularEmployee = {
//             //   ...employee
//             //   ...nonManager
//             // }

//             // db.query('INSERT INTO employees SET ?', regularEmployee, err => {
//             //   if (err) { console.log(err) }
//             // })
//             homeScreen()
//           })
//       }
//     })
// }

// const viewDepartments = () => {

// }

// const viewRoles = () => {

// }

// const viewEmployees = () => {

// }

// const Update = () => {

// }

homeScreen()