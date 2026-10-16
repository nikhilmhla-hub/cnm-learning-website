export const AUDIT_URL = "https://cnm-online-audit.vercel.app/audit";
export const EMAIL = "info@cnmlearning.com";
export const PHONE = "+91 6377525604";
export const PHONE_URL = "tel:+916377525604";
export const programmes = [
  { name: "REWIRE", focus: "Habits & mindset", description: "Understand the patterns that make it difficult to start, stay consistent or recover after a setback." },
  { name: "REFOCUS", focus: "Planning & execution", description: "Turn priorities into a realistic week, focused study blocks and a review of completed work." },
  { name: "RECONNECT", focus: "Concept understanding", description: "Reconnect ideas and strengthen the understanding behind the formulas and solutions." },
  { name: "REINFORCE", focus: "Practice & revision", description: "Use targeted practice and recall to revisit what needs strengthening." },
  { name: "RISE", focus: "Exam confidence & pressure", description: "Work on the habits and test strategies that support calmer exam execution." },
];
export const homeFAQs = [
  ["What exactly does CNM System Labs do?", "CNM brings together concept learning, performance review, planning and study habits for JEE and NEET preparation. The starting question is where your current preparation is getting stuck, so the next action can be more specific than ‘study harder’."],
  ["Is this useful if I already attend coaching?", "It can be. Your classes may cover the syllabus while you still need help with revision, consistency, test review or exam execution. Discuss your current routine with CNM before choosing support so the two fit together."],
  ["What happens after I start the audit?", "The audit asks about your preparation and study habits. Treat the answers as a starting point to discuss, alongside recent tests and examples of your work. A self-report alone cannot establish the exact cause of a low score."],
  ["Will CNM guarantee a rank or score increase?", "No. Results depend on your starting point, preparation, exam conditions and follow-through. Review changes in your work and test performance over time; a target is not a guaranteed outcome."],
  ["How do I choose a programme or understand the fees?", "Speak to CNM about your class, exam and the problem you want to solve. Ask for the selected modules, duration, support, review frequency and complete fee breakdown in writing before enrolment."],
];
export function enquiryLink(audience = "student") {
  const subjects = { student: "Student performance enquiry", parent: "Parent enquiry about CNM support", partner: "Partnership discussion with CNM System Labs", general: "Enquiry about CNM System Labs" };
  const bodies = {
    student: "Hello CNM,\n\nI would like to discuss my preparation.\nClass and exam:\nWhat is getting difficult:\nWhat I have already tried:\n\nMy name:\nPreferred way to contact me:",
    parent: "Hello CNM,\n\nI would like to understand support for my child.\nClass and exam:\nMy main concern:\nCurrent classes or coaching:\n\nPlease explain suitable support, review arrangements and the complete fees.\n\nMy name:\nPreferred way to contact me:",
    partner: "Hello CNM,\n\nI would like to explore a collaboration.\nMy name and role:\nOrganisation (if applicable):\nStudents or audience we support:\nProblem or opportunity:\nType of collaboration I have in mind:\n\nPreferred way to contact me:",
    general: "Hello CNM,\n\nMy name:\nI would like to discuss:\nPreferred way to contact me:",
  };
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subjects[audience] || subjects.general)}&body=${encodeURIComponent(bodies[audience] || bodies.general)}`;
}
