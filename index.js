const db = mysql.createConnection('root:300Monkeysonfire!!!@localhost/employeeManager_db')
const mysql = require('mysql2')
const inquirer = require('inquirer')

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles

// Need Type, name, message
const homeScreen = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'home',
    message: 'Select an option',
    choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role']
  }])
    .then(home => {
      switch (home.home) {
        case 'Add Department':
          addDepartment()
          break

        case 'Add Role':
          addRole()
          break

        case 'Add Employee':
          addEmployee()
          break

        case 'View Departments':
          viewDepartments()
          break

        case 'View Roles':
          viewRoles()
          break

        case 'View Employees':
          viewEmployees()
          break

        case 'Update Employee Role':
          Update()
          break

        default:
          console.log('Exiting System')
          break
      }
    })
}

const addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:'
  }])
    .then(department => {
      db.query('INSERT INTO departments SET ?', department, err => {
        if (err) { console.log(err) }
      })
      console.log('Department added, returning to home screen...')
      homeScreen()
    })
}

const addRole = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'Enter the title of the role:'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Enter the salary of the role:'
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'Enter the id of the role:'
  }])
    .then(role => {
      db.query('INSERT INTO roles SET ?', role, err => {
        if (err) { console.log(err) }
      })
      console.log('Role added, returning to home screen...')
      homeScreen()
    })
}

const addEmployee = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'first_name',
    message: 'Enter the first name of the employee:'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Enter the last name of the employee:'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'Enter the id of the employee:'
  },
  {
    type: 'list',
    name: 'managerBool',
    message: 'Is the employee a manager?'
    choices: ['Yes', 'No']
  }])
    .then(employee => {
      if (employee.managerBool === 'Yes') {
        delete employee.managerBool
      } else if (employee.managerBool === 'No') {

      }
      db.query('INSERT INTO roles SET ?', employee, err => {
        if (err) { console.log(err) }
      })
      console.log('Role added, returning to home screen...')
      homeScreen()
    })
}

const viewDepartments = () => {

}

const viewRoles = () => {

}

const viewEmployees = () => {

}

const Update = () => {

}

homeScreen()