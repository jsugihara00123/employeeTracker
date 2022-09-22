module.exports = {
	
	// initial prompt

	firstPrompt: {
		type: "list",
		name: "task",
		message: "Make a selection:",
		choices: [
			
			"View Employees", 
			"View Employees by Manager", 
			"View Employees by Department", 
			"View Departments", 
			"View Roles", 
			"View Department Budget", 
			
			"Add Employee", 
			"Add Department", 
			"Add Role", 
			
			"Update Employee Role", 
			"Update Employee Manager", 
			
			"Remove Employee", 
			"Remove Department", 
			"Remove Role", 
			
			"Exit",
		],
	},

	// view by prompt

	
	viewManagerPrompt: (managerChoices) => [
		
		{
			type: "list",
			name: "managerId",
			message: "Which manager will you choose?",
			choices: managerChoices,
		},
	],

	departmentPrompt: (departmentChoices) => [
		{
			type: "list",
			name: "departmentId",
			message: "Which department will you choose?",
			choices: departmentChoices,
		},
	],

	// add prompt

	insertEmployee: (departmentArray, roleArray, managerArray) => [
		{
			name: "firstName",
			type: "input",
			message: "Enter employee's first name:",
		},
		{
			name: "lastName",
			type: "input",
			message: "Enter employee's last name:",
		},
	
		{
			name: "department",
			type: "list",
			message: "Choose employee's department",
			choices: departmentArray,
		},
		
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: roleArray,
		},
	
		{
			name: "manager",
			type: "list",
			message: "Choose the manager of this employee:",
			choices: managerArray,
		},
	],


	insertDepartment: {
		
		name: "department",
		type: "input",
		message: "What is the name of the new department?",
	},

	
	insertRole: (departmentChoices) => [
		
		{
			type: "input",
			name: "roleTitle",
			message: "Role title?",
		},
		
		{
			type: "input",
			name: "roleSalary",
			message: "Role Salary",
		},
		
		{
			type: "list",
			name: "departmentId",
			message: "Department?",
			choices: departmentChoices,
		},
	],

	//update prompt

	
	updateRole: (employees, job) => [
		
		{
			name: "update",
			type: "list",
			message: "Choose the employee whose role is to be updated:",
			choices: employees,
		},
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: job,
		},
	],

	updateManager: (employees) => [
		{
			name: "update",
			type: "list",
			message: "Choose the employee whose manager is to be updated:",
			choices: employees,
		},
		{
			name: "manager",
			type: "list",
			message: "Choose employee's new manager",
			choices: employees,
		},
	],

// remove prompt

	deleteEmployeePrompt: (deleteEmployeeChoices) => [
		{
			type: "list",
			name: "employeeId",
			message: "Which employee do you want to remove?",
			choices: deleteEmployeeChoices,
		},
	],

	deleteDepartmentPrompt: (deleteDepartmentChoices) => [
		{
			type: "list",
			name: "departmentId",
			message: "Which department do you want to remove?",
			choices: deleteDepartmentChoices,
		},
	],

	deleteRolePrompt: (deleteRoleChoices) => [
		{
			type: "list",
			name: "roleId",
			message: "Which role do you want to remove?",
			choices: deleteRoleChoices,
		},
	],
};
