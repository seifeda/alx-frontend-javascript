// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;   // Only modifiable on initialization
  readonly lastName: string;    // Only modifiable on initialization
  fullTimeEmployee: boolean;    // Always defined
  yearsOfExperience?: number;   // Optional
  location: string;             // Always defined
  [key: string]: any;           // Allow additional properties
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // additional property
};

console.log(teacher3);
