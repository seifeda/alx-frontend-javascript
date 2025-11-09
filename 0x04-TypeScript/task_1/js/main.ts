// task_1/js/main.ts

// Task 1: Define Teacher interface
interface Teacher {
  readonly firstName: string;   // only modifiable on initialization
  readonly lastName: string;    // only modifiable on initialization
  fullTimeEmployee: boolean;    // always defined
  yearsOfExperience?: number;   // optional
  location: string;             // always defined
  [key: string]: any;           // allow additional properties
}

// Example Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// ------------------------------------------------------------

// Task 2: Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ------------------------------------------------------------

// Task 3: printTeacher function + interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function with destructured parameters
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));


// ---------------- Task 5 ----------------
// Interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

// ---------------- Task 6 ----------------

// Type predicate for Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// ---------------- Task 7 ----------------

// String literal type for subjects
type Subjects = 'Math' | 'History';

// Function to teach class
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
