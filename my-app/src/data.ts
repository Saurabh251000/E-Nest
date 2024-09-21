// import Image from 'next/image';
import { MentorData, Feedback, CourseType } from './types/interface';

// Mentor Data
export const mentorData: MentorData = {
  name: "Chatur Ramlingam",
  rate: 4.0,
  about: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever.",
  profile: "/icons/mentor.png",
  social: [
    {
      name: "youtube",
      icon: "/icons/yt.png",
      link: ''
    },
    {
      name: "facebook",
      icon: "/icons/fb.png",
      link: ''
    },
    {
      name: "twitter",
      icon: "/icons/x.png",
      link: ''
    },
    {
      name: "linkedin",
      icon: "/icons/linkdin.png",
      link: ''
    },
  ]
};

// About Text
export const AboutText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

// Mentorship Feedback
export const MentorshipFeedback: Feedback[] = [
  {
    name: "Raju Rastogi",
    profile: "/icons/userlogo.png",
    rate: 4.8,
    monthPassed: 4,
    feedbackText:  "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
  },
  {
    name: "Raju Rastogi",
    profile: "/icons/userlogo.png",
    rate: 4.8,
    monthPassed: 4,
    feedbackText: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
  },
  {
    name: "Raju Rastogi",
    profile: "/icons/userlogo.png",
    rate: 4.8,
    monthPassed: 4,
    feedbackText: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
  },
  
];


// Courses Data
export const coursesData: CourseType[] = [
  {
    name: "Agiculture",
    duration: 45,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: '#f8bbd0',
  },
  {
    name: "Career Mentorship",
    duration: 45,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: '#DFECB4',
    
  },
  {
    name: "Reasearch",
    duration: 45,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: '#CCEBE9',
  },
];



// Top Mentors Data
// export const topMentorsData: TopMentor[] = [
//   {
//     name: "Chatur Ramlingam",
//     department: "FSSAI",
//     profile: "/icons/mentor.png",
//     exprience: 10,
//     topVoice: false,
//     color: 'bg-[#E1D4E7]', 
//   },
//   {
//     name: "Chatur Ramlingam",
//     department: "FSSAI",
//     profile: "/icons/mentor.png",
//     exprience: 10,
//     topVoice: true,
//     color: 'bg-[#CCEBE9]', 
//   },
//   {
//     name: "Chatur Ramlingam",
//     department: "FSSAI",
//     profile: "/icons/mentor.png",
//     exprience: 10,
//     topVoice: false,
//     color: 'bg-[#DFECB4]', 
//   },
//   {
//     name: "Chatur Ramlingam",
//     department: "FSSAI",
//     profile: "/icons/mentor.png",
//     exprience: 10,
//     topVoice: true,
//     color: 'bg-[#F5C6C9]', 
//   },
// ];
