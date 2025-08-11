// Months for dropdowns
export const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

// Generate years (from current year - 50 to current year)
const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

// Qualifications
export const qualifications = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Ph.D.",
  "Diploma",
  "Certificate",
  "Professional Certification",
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
  "Film Production",
];

export const monthsOfExperience = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
];

export const yearsOfExperience = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
];

export const payTypes = [
  {
    label: "Hourly",
    value: "hourly",
  },
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

export const socialLinks = [
  { id: "github", label: "GitHub", placeholder: "https://github.com/username" },
  {
    id: "linkedin",
    label: "LinkedIn",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    id: "facebook",
    label: "Facebook",
    placeholder: "https://facebook.com/username",
  },
  {
    id: "instagram",
    label: "Instagram",
    placeholder: "https://instagram.com/username",
  },
  {
    id: "reddit",
    label: "Reddit",
    placeholder: "https://reddit.com/user/username",
  },
  { id: "website", label: "Website", placeholder: "https://yourwebsite.com" },
  {
    id: "twitter",
    label: "Twitter",
    placeholder: "https://twitter.com/username",
  },
  {
    id: "stackOverflow",
    label: "Stack Overflow",
    placeholder: "https://stackoverflow.com/users/username",
  },
];
