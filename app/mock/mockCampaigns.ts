// // mockCampaigns.ts

// import {
//   Campaign,
//   ConnectedEmail,
//   EmailTemplateType,
// } from "@/features/job-openings/_type/_type";

// export const mockEmailTemplates: EmailTemplateType[] = [
//   {
//     _id: "1",
//     name: "Initial Outreach Template",
//     content: "<p>Sample initial outreach email content</p>",
//   },
//   {
//     _id: "2",
//     name: "Follow-Up Template",
//     content: "<p>Sample follow-up email content</p>",
//   },
//   {
//     _id: "3",
//     name: "Technical Screening Template",
//     content: "<p>Sample technical screening email content</p>",
//   },
// ];

// export const mockConnectedEmails: ConnectedEmail[] = [
//   { id: "1", email: "recruiting@company.com" },
//   { id: "2", email: "hiring@company.com" },
// ];

// export const mockCampaigns: Campaign[] = [
//   {
//     id: "camp-1",
//     campaign_name: "Tech Hiring Wave",
//     campaign_mode: "complex",
//     ai_enable_delay: true,
//     ai_min_delay: 5,
//     ai_max_delay: 30,
//     minimum_score_on: true,
//     minimum_score: 75,
//     followup_source_delay: 2,
//     delay_unit: "days",
//     template: "1",
//     email_to_reach_candidate: "recruiting@company.com",
//     campaign_active_days_and_time: {
//       days: ["Monday", "Wednesday", "Friday"],
//       time_range: {
//         start: "09:00",
//         end: "17:00",
//       },
//     },
//     start_date: "2023-06-01",
//     end_date: "2023-06-30",
//     platformNumbers: {
//       linkedin: 10,
//       indeed: 5,
//       glassdoor: 3,
//     },
//     created_at: "2023-05-15T10:30:00Z",
//     template_content: "<p>Sample initial outreach email content</p>",
//   },
//   {
//     id: "camp-2",
//     campaign_name: "Summer Internship Drive",
//     campaign_mode: "medium",
//     ai_enable_delay: false,
//     ai_min_delay: 10,
//     ai_max_delay: 60,
//     minimum_score_on: false,
//     template: "2",
//     email_to_reach_candidate: "hiring@company.com",
//     campaign_active_days_and_time: {
//       days: ["Tuesday", "Thursday"],
//       time_range: {
//         start: "10:00",
//         end: "16:00",
//       },
//     },
//     start_date: "2023-07-01",
//     end_date: "2023-08-31",
//     platformNumbers: {
//       linkedin: 15,
//       dice: 5,
//     },
//     created_at: "2023-06-10T14:15:00Z",
//     template_content: "<p>Sample follow-up email content</p>",
//   },
// ];
