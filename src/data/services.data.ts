import type { Services } from "../components/Card/CardServices";
import camera from "../assets/pictures/icons/services/camera.svg";
import calendar from "../assets/pictures/icons/services/calendar.svg";
import up from "../assets/pictures/icons/services/up.svg";
import exam from "../assets/pictures/icons/services/exam.svg";
import camerab from "../assets/pictures/icons/services/camerab.svg";
import calendarb from "../assets/pictures/icons/services/calendarb.svg";
import examb from "../assets/pictures/icons/services/examb.svg";

export const services: Services[] = [
    {id: "service1",
        icon: camera,
        title: "Live sessions", 
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
        title: "Oral Mastery", 
        description: "Sessions focused on conversations and clear communication",
        bullets: [
            "Shared whiteboard & examples",
            "Feedback and correction",
            "Pronunciation guidance",
          ]
    },
    {id: "service2", 
        icon: calendarb, 
        title: "Flexible Schedule", 
        description: "English lessons that fit your time zone, routine, and learning pace",

        bullets: [
            
            "Real-time Fluency",
            "Nuanced Pronunciation",
            "Confidence Building",
          ]
    },
    {id: "service3", 
        icon: up, 
        title: "Strategic Evolution", 
        description: "Track your English improvement in speaking, listening, and understanding",
        bullets: [
            "Global Timezone Support",
            "Individual Goal Tracking",
            "Adaptive Curriculum"
          ]
    },
    {id: "service4", 
        icon: examb, 
        title: "TOEFL / IELTS", 
        description: "Preparation for exams, interviews, and academic or professional English level",
        bullets: [
            "Strategic Test Logic",
            "Advanced Essay Synthesis",
            "Simulation & Feedback"
          ]
    },

];