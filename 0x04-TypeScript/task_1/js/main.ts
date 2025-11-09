// task_1/js/main.ts

// Task 1: Define the Teacher interface
interface Teacher {
  readonly firstName: string;   // Only modifiable on initialization
  readonly lastName: string;    // Only modifiable on initialization
  fullTimeEmployee: boolean;    // Always defined
  yearsOfExperience?: number;   // Optional
  location: string;             // Always defined
  [key: string]: any;           // Allow additional properties
}

// Example for Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// ------------------------------------------------------------

// Task 2: Define Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number; // Mandatory for Director
}

// Example for Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ------------------------------------------------------------

// Task 3: Define printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
