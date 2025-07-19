class Employee {
  constructor(id, name, age, profession) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
}

class Company {
  #employees = [];
  #professions = ["Admin", "Developer"];

  constructor() {
    this.#employees.push(
      this.#createNewEmployee("John", 18, this.#professions[1])
    );
    this.#employees.push(
      this.#createNewEmployee("Jack", 20, this.#professions[1])
    );
    this.#employees.push(
      this.#createNewEmployee("Karen", 19, this.#professions[0])
    );

    this.printDeveloperbyMap = this.printDeveloperbyMap.bind(this);
    this.printDeveloperbyForEach = this.printDeveloperbyForEach.bind(this);
    this.addData = this.addData.bind(this);
    this.removeAdmin = this.removeAdmin.bind(this);
    this.concatenateArray = this.concatenateArray.bind(this);
  }

  #createNewEmployee(name, age, profession) {
    return new Employee(this.#getId(), name, age, profession);
  }

  #getId() {
    let id,
      unique = false;

    while (!unique) {
      id = Math.floor(Math.random() * 100000000000);
      unique = this.#employees.every((employee) => employee.id !== id);
    }

    return id;
  }

  printDeveloperbyMap() {
    this.#employees.map((employee) => {
      employee.profession === this.#professions[1] && console.log(employee);
    });
  }

  printDeveloperbyForEach() {
    this.#employees.forEach((employee) => {
      employee.profession === this.#professions[1] && console.log(employee);
    });
  }

  addData() {
    const newEmployee = this.#createNewEmployee(
      "Susan",
      21,
      this.#professions[1]
    );
    this.#employees.push(newEmployee);
    console.log(newEmployee);
  }

  removeAdmin() {
    this.#employees = this.#employees.filter(
      (employee) => employee.profession !== this.#professions[0]
    );
    console.log(this.#employees);
  }

  concatenateArray() {
    const newEmployeeA = this.#createNewEmployee(
      "Chris",
      22,
      this.#professions[1]
    );
    const newEmployeeB = this.#createNewEmployee(
      "Nancy",
      23,
      this.#professions[0]
    );
    const newEmployeeC = this.#createNewEmployee(
      "Rahul",
      26,
      this.#professions[1]
    );

    const result = this.#employees.concat([
      newEmployeeA,
      newEmployeeB,
      newEmployeeC,
    ]);
    console.log(result);
  }
}

const acciojob = new Company();

document
  .getElementById("printDeveloperbyMap")
  .addEventListener("click", acciojob.printDeveloperbyMap);
document
  .getElementById("printDeveloperbyForEach")
  .addEventListener("click", acciojob.printDeveloperbyForEach);
document.getElementById("addData").addEventListener("click", acciojob.addData);
document
  .getElementById("removeAdmin")
  .addEventListener("click", acciojob.removeAdmin);
document
  .getElementById("concatenateArray")
  .addEventListener("click", acciojob.concatenateArray);
