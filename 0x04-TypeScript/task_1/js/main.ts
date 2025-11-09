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
