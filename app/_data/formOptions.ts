
// Months for dropdowns
export const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

// Generate years (from current year - 50 to current year)
const currentYear = new Date().getFullYear();
export const years = Array.from(
  { length: 50 }, 
  (_, i) => currentYear - i
);

// Qualifications
export const qualifications = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Ph.D.",
  "Diploma",
  "Certificate",
  "Professional Certification"
];

// Courses
export const courses = [
  "Computer Science",
  "Information Technology",
  "Software Engineering",
  "Business Administration",
  "Marketing",
  "Finance",
  "Accounting",
  "Human Resources",
  "Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Architecture",
  "Medicine",
  "Nursing",
  "Pharmacy",
  "Law",
  "Education",
  "Psychology",
  "Sociology",
  "English Literature",
  "History",
  "Philosophy",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Political Science",
  "Communications",
  "Journalism",
  "Art & Design",
  "Music",
  "Theatre",
  "Film Production"
];
