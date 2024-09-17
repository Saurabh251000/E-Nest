export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

// Type for Mentor Data
export interface MentorData {
  name: string;
  rate: number;
  about: string;
  profile: string;
  social: SocialLink[];
}

// Type for Mentorship Feedback
export interface Feedback {
  name: string;
  profile: string;
  rate: number;
  monthPassed: number;
  feedbackText: string;
}

// Type for Top Mentors Data
export interface TopMentor {
  name: string;
  department: string;
  profile: string;
  exprience: number;
  topVoice: boolean;
  color: string;
}

// Type for Courses Data
export interface CourseType {
  name: string;
  duration: number;
  price: number;
  discount: number;
  bookingPrice: number;
  color: string;
}
