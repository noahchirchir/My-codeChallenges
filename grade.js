// Student Marks
// Define the student's marks
const marks = 60;

// Check if marks fall within the range for grade A
if (marks > 79 && marks < 100) {
  console.log("Your grade is A");
} 
// Check if marks fall within the range for grade B
else if (marks >= 60 && marks <= 79) {
  console.log("Your grade is B");
} 
// Check if marks fall within the range for grade C
else if (marks >= 50 && marks <= 59) {
  console.log("Your grade is C");
} 
// Check if marks fall within the range for grade D
else if (marks >= 40 && marks <= 49) {
  console.log("Your grade is D");
} 
// Check if marks fall within the range for grade E
else if (marks > 0 && marks < 40) {
  console.log("Your grade is E");
}
// Check if marks are below 0 or above 100
else {
  console.log("Invalid marks!!!");
}
