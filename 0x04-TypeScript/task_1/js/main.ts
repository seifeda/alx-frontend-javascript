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

// Task 2: Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Mandatory for Directors
}

// Example for Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
