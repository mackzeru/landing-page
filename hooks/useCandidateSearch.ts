// import { useState, useEffect } from "react";
// import { Candidate } from "@/data/mockCandidates";

// // Helper function to parse boolean search queries
// const parseQuery = (query: string) => {
//   // Implement simple boolean search (AND, OR, NOT)
//   // This is a basic implementation and can be expanded
//   if (query.includes(" AND ")) {
//     return {
//       type: "AND",
//       terms: query.split(" AND ").map((term) => term.trim()),
//     };
//   } else if (query.includes(" OR ")) {
//     return {
//       type: "OR",
//       terms: query.split(" OR ").map((term) => term.trim()),
//     };
//   } else if (query.includes("NOT ")) {
//     return {
//       type: "NOT",
//       term: query.replace("NOT ", "").trim(),
//     };
//   } else {
//     return {
//       type: "SIMPLE",
//       term: query.trim(),
//     };
//   }
// };

// // Helper function to check if candidate matches a search term
// const candidateMatchesTerm = (candidate: Candidate, term: string): boolean => {
//   const lowerTerm = term.toLowerCase();

//   // Implement fuzzy matching - this is a simple version
//   // A more robust solution would use a proper fuzzy search library

//   // Check name
//   if (candidate.name.toLowerCase().includes(lowerTerm)) return true;

//   // Check position
//   if (candidate.position?.toLowerCase().includes(lowerTerm)) return true;

//   // Check skills
//   if (candidate.skills.some((skill) => skill.toLowerCase().includes(lowerTerm)))
//     return true;

//   // Check location
//   if (candidate.location?.city?.toLowerCase().includes(lowerTerm)) return true;
//   if (candidate.location?.country?.toLowerCase().includes(lowerTerm))
//     return true;

//   // Check tags
//   if (candidate.tags?.some((tag) => tag.toLowerCase().includes(lowerTerm)))
//     return true;

//   // Check seniority (exact match)
//   if (candidate.seniority === lowerTerm) return true;

//   // Check industry
//   if (candidate.industry?.toLowerCase().includes(lowerTerm)) return true;

//   return false;
// };

// export function useCandidateSearch(
//   candidates: Candidate[],
//   searchQuery: string
// ) {
//   const [filteredCandidates, setFilteredCandidates] =
//     useState<Candidate[]>(candidates);
//   const [isSearching, setIsSearching] = useState(false);

//   useEffect(() => {
//     // If search query is empty, return all candidates
//     if (!searchQuery.trim()) {
//       setFilteredCandidates(candidates);
//       return;
//     }

//     // Set searching state for loading indicator
//     setIsSearching(true);

//     // Debounce search for performance
//     const debounceTimeout = setTimeout(() => {
//       const parsedQuery = parseQuery(searchQuery);
//       let results: Candidate[] = [];

//       switch (parsedQuery.type) {
//         case "AND":
//           results = candidates.filter((candidate) =>
//             parsedQuery.terms.every((term) =>
//               candidateMatchesTerm(candidate, term)
//             )
//           );
//           break;

//         case "OR":
//           results = candidates.filter((candidate) =>
//             parsedQuery.terms.some((term) =>
//               candidateMatchesTerm(candidate, term)
//             )
//           );
//           break;

//         case "NOT":
//           results = candidates.filter(
//             (candidate) => !candidateMatchesTerm(candidate, parsedQuery.term)
//           );
//           break;

//         case "SIMPLE":
//         default:
//           // Handle natural language queries (basic implementation)
//           if (
//             searchQuery.includes("years in") ||
//             searchQuery.includes("years of")
//           ) {
//             // Example: "5+ years in Java"
//             const yearsMatch = searchQuery.match(
//               /(\d+)\+?\s*years (in|of) (\w+)/i
//             );
//             if (yearsMatch) {
//               const years = parseInt(yearsMatch[1]);
//               const skill = yearsMatch[3].toLowerCase();

//               // Simple matching - in a real application, this would check against experience duration
//               results = candidates.filter(
//                 (candidate) =>
//                   candidate.skills.some((s) =>
//                     s.toLowerCase().includes(skill)
//                   ) &&
//                   candidate.seniority &&
//                   (candidate.seniority === "senior" ||
//                     candidate.seniority === "lead")
//               );
//             } else {
//               results = candidates.filter((candidate) =>
//                 candidateMatchesTerm(candidate, parsedQuery.term)
//               );
//             }
//           } else if (
//             searchQuery.toLowerCase().includes("open to work") ||
//             searchQuery.toLowerCase().includes("open for work")
//           ) {
//             // Find candidates open to work
//             results = candidates.filter((candidate) => candidate.openToWork);
//           } else {
//             // Default search by term
//             results = candidates.filter((candidate) =>
//               candidateMatchesTerm(candidate, parsedQuery.term)
//             );
//           }
//           break;
//       }

//       setFilteredCandidates(results);
//       setIsSearching(false);
//     }, 300);

//     return () => clearTimeout(debounceTimeout);
//   }, [searchQuery, candidates]);

//   return { filteredCandidates, isSearching };
// }
