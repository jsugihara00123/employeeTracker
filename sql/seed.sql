USE employeesDB;

INSERT INTO department (name)
VALUES ("Customer Success");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES ("CS Manager", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("CS Technician", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 150000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Attorney", 200000, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("John", "Doe", 1, null); 
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Ryan", "Reynolds", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Dwayne", "Johnson", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Joshua", "Big", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Margo", "Robbie", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("George", "Clooney", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("James", "Bond", 6, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Tim", "Allen", 7, null);
