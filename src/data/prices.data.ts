import type { Prices } from "../components/Card/Prices";
import arrowUp from "../assets/pictures/icons/prices/arrowUp.svg";

export const prices: Prices[] = [
    {id: "service1",
        icon: arrowUp,
        title: "Basic Math", 
        description: "Elementary school and high school mathematics and statistics. Algebra, Pre-calculus, Basic trigonometry and more.",
        thePrice: "$45/hour"
    },
    {id: "service2", 
        icon: arrowUp, 
        title: "Advanced Math", 
        description: "Calculus and university-level mathematics and statistics encouraging independent problem-solving",
        thePrice: "$50/hour"
    },
    {id: "service3", 
        icon: arrowUp, 
        title: "Exam Preparation", 
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
        title: "English Foundations - A1/A2", 
        description: "Build strong foundations in speaking, listening, and everyday communication",
        thePrice: "$30/hour"
    },
    {id: "service2", 
        icon: arrowUp, 
        title: "Advanced English - B1/B2", 
        description: "Refine grammar, vocabulary, and natural expression for academic and professional use",
        thePrice: "$30/hour"
    },
    {id: "service3", 
        icon: arrowUp, 
        title: "Academic English Success", 
        description: "Clear explanations and practice designed for essay writing and academic performance",
        thePrice: "$40/hour"
    },
    {id: "service4", 
        icon: arrowUp, 
        title: "English Exam Preparation", 
        description: "Advanced English focused on exams, presentations, interviews, and professional communication",
        thePrice: "$40/hour"
    },

];