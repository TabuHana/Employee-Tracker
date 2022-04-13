const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection('mysql://root:300Monkeysonfire!!!@localhost/employeeManager_db')

// Need Type, name, message. Prompt for event
const homeScreen = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'homeSelect',
    message: 'Select an option',
    choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role']
  }])
    .then(home => {
      switch (home.homeSelect) {
        case 'Add Department':
          addDepartment()
          break

        case 'Add Role':
          addRole()
          break

        case 'Add Employee':
          addEmployee()
          break

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
      }
    })
}

// Adds a department to the db
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

// Adds a role to the db
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

//adds an employee to the db
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
    message: 'Is the employee a manager?',
    choices: ['Yes', 'No']
  }])
    .then(manager => {
      if (manager.managerBool === 'Yes') {
        delete manager.managerBool
        db.query('INSERT INTO employees SET ?', manager, err => {
          if (err) { console.log(err) }
        })
        console.log('Manager added, returning to home screen...')
        homeScreen()

      } else if (manager.managerBool === 'No') {
        inquirer.prompt([{
          type: 'input',
          name: 'manager_id',
          message: 'Enter the id of employee\'s manager:'
        }])
          .then(employee => {

            delete manager.managerBool

            let regEmployee = {
              ...manager,
              ...employee
            }

            db.query('INSERT INTO employees SET ?', regEmployee, err => {
              if (err) { console.log(err) }
            })
            homeScreen()
          })
      }
    })
}

const viewDepartments = () => {
  db.query('SELECT * FROM departments', (err, departments) => {
    console.table(departments)
  })
  homeScreen()
}

// const viewRoles = () => {

// }

// const viewEmployees = () => {

// }

// const Update = () => {

// }

homeScreen()