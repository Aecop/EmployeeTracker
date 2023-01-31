INSERT INTO department (name)
VALUES ("Development"), ("Help Desk"), ("IT Engineering"), ("Human Resoure"), ("Sales"), ("Leadership");

INSERT INTO role (title, salary, department_id)
    VALUE ("Software Developer", 250000.00, 1), ("Help Desk Analysts", 60000.00, 2), ("Engineer", 100000.00, 3), ("Resource Coordinator", 200000.00, 4), ("CEO", 5000000.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("John", "Doe", 1, 3), ("Megan", "Fox", 1, 1), ("Tony", "Sxtark", 3, 2), ("John", "Clifford", 5, 2), ("Joon", "Park", 5, 2);