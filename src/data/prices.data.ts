import type { Prices } from "../components/Card/Prices";
import arrowUp from "../assets/pictures/icons/prices/arrowUp.svg";

export const prices: Prices[] = [
    {id: "service1",
        icon: arrowUp,
        title: "Basic Math", 
        description: "Elementary school and early high school mathematics and statistics. Algebra, Pre-calculus, Basic trigonometry and more.",
        thePrice: "$45/hour"
    },
    {id: "service2", 
        icon: arrowUp, 
        title: "Advanced Math", 
        description: "High school calculus and statistics encouraging independent problem-solving",
        thePrice: "$50/hour",
        isPopular: true,
    },
    {id: "service3", 
        icon: arrowUp, 
        title: "University Math", 
        description: "Differential calculus, Integral calculus, multi-variable calculus, proofs, probability theory and more.",
        thePrice: "$50/hour"
    },
    {id: "service4", 
        icon: arrowUp, 
        title: "Exam Preparation", 
        description: "High school and university level exam preparation, including math contest preparation.",
        thePrice: "$50/hour"
    },

];

export const pricesEnglish: Prices[] = [
    {id: "service1",
        icon: arrowUp,
        title: "Essential Fluency", 
        description: "Build strong foundations in speaking, listening, and everyday communication",
        thePrice: "$30/hour"
    },
    {id: "service2", 
        icon: arrowUp, 
        title: "Professional Mastery", 
        description: "Refine grammar, vocabulary, and natural expression for academic and professional use",
        thePrice: "$30/hour"
    },
    {id: "service3", 
        icon: arrowUp, 
        title: "The Scholar’s Edge", 
        description: "Clear explanations and practice designed for essay writing and academic performance",
        thePrice: "$40/hour",
        isPopular: true,
    },
    {id: "service4", 
        icon: arrowUp, 
        title: "Claim Mastery", 
        description: "Advanced English focused on exams, presentations, interviews, and professional communication",
        thePrice: "$40/hour"
    },

];