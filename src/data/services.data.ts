import type { Services } from "../components/Card/CardServices";
import camera from "../assets/pictures/icons/services/camera.svg";
import calendar from "../assets/pictures/icons/services/calendar.svg";
import up from "../assets/pictures/icons/services/up.svg";
import exam from "../assets/pictures/icons/services/exam.svg";
import camerab from "../assets/pictures/icons/services/camerab.svg";
import calendarb from "../assets/pictures/icons/services/calendarb.svg";
import upb from "../assets/pictures/icons/services/upb.svg";
import examb from "../assets/pictures/icons/services/examb.svg";

export const services: Services[] = [
    {id: "service1",
        icon: camera,
        title: "Live online sessions", 
        description: "Engaging lessons with a focus on practice and understanding",
        bullets: ["Whiteboard interaction", "Personalized practice questions", "Student-tailored plans"]
    },
    {id: "service2", 
        icon: calendar, 
        title: "Flexible Schedule", 
        description: "I can work with your availability and adjust to your needs",
        bullets: ["Regular classes", "One-time study sessions", "Adjustable time slots"]
    },
    {id: "service3", 
        icon: up, 
        title: "Progress Tracking", 
        description: "Working with you to help you achieve your learning goals",
        bullets: ["Regular check-ins", "Review sessions", "Goal tracking"]
    },
    {id: "service4", 
        icon: exam, 
        title: "Exam Preparation", 
        description: "Lessons that make acing that exam feel possible",
        bullets: ["Real, practical practice questions", "Mock exam reviews", "In-depth explanations"]
    },

];

export const servicesEnglish: Services[] = [
    {id: "service1",
        icon: camerab,
        title: "Live English Speaking Lessons", 
        description: "Sessions focused on conversations and clear communication",
        bullets: [
            "Real-time speaking practice",
            "Shared whiteboard & examples",
            "Feedback and correction",
            "Pronunciation guidance",
          ]
    },
    {id: "service2", 
        icon: calendarb, 
        title: "Flexible Learning Schedule", 
        description: "English lessons that fit your time zone, routine, and learning pace",

        bullets: [
            
            "Ideal for international students",
            "Consistent weekly progress",
            "Easy rescheduling options",
            "Perfect for busy students",
          ]
    },
    {id: "service3", 
        icon: upb, 
        title: "Progress & Confidence Growth", 
        description: "Track your English improvement in speaking, listening, and understanding",
        bullets: [
            "Personal learning goals",
            "Regular progress feedback",
            "Focus on real-life English use"
          ]
    },
    {id: "service4", 
        icon: examb, 
        title: "TOEFL / IELTS Preparation", 
        description: "Preparation for exams, interviews, and academic or professional English level",
        bullets: [
            "Grammar & vocabulary strategy",
            "Speaking and writing practice",
            "Exam-style questions & feedback"
          ]
    },

];