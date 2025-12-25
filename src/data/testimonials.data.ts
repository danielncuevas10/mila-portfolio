import type { Testimonials } from "../components/Card/CardTestimonials";
import quote from "../assets/pictures/icons/testimonials/quote.svg";
import quoteb from "../assets/pictures/icons/testimonials/quoteb.svg";

export const testimonials: Testimonials[] = [
    {id: "service1",
        icon: quote,
        title: "Mei Lin", 
        description: "Math used to be very stressful for my son. After Mila's lessons, he started understanding the logic behind the problems instead of memorizing. His grades improved a lot.",
        parent: "Parent",

    },
    {id: "service2", 
        icon: quote, 
        title: "Li Wei", 
        description: "What impressed me most was how clearly concepts were explained. My daughter no longer feels anxious about math tests, and she now approaches problems calmly and logically.",
        parent: "Parent",

    },
    {id: "service3", 
        icon: quote, 
        title: "Daniel Kim", 
        description: "For the first time, math actually made sense to me. The step-by-step explanations helped me solve problems on my own, and my exam results improved a in a way that I never thought possible.",
        parent: "Math student",

    },
    {id: "service4", 
        icon: quote, 
        title: "Sarah Thompson", 
        description: "Mila completely changed how I see math. Instead of guessing, I now understand the reasoning behind each solution, which helped me succeed in school and feel confident.",
        parent: "Math student",

    },
    

];


export const testimonialsEnglish: Testimonials[] = [
    {id: "service1",
        icon: quoteb,
        title: "Hana Park", 
        description: "My daughter used to be shy and afraid to speak English. After a few months, she started speaking confidently and even enjoyed her lessons. I could clearly see her progress, and her school results improved a lot.",
        parent: "Parent",

    },
    {id: "service2", 
        icon: quoteb, 
        title: "Kevin Lee", 
        description: "As a parent, I really appreciated how patient and encouraging the Mila is. My son now understands English instead of memorizing it, and he feels confident speaking in class and online with his professors and friends.",
        parent: "Parent",

    },
    {id: "service3", 
        icon: quoteb, 
        title: "Angela Lim", 
        description: "Mila helped me succeed at university. My academic English, presentations, and writing improved significantly, and I finally felt confident participating in lectures, discussions and talking to my friends.",
        parent: "Student",

    },
    {id: "service4", 
        icon: quoteb, 
        title: "Maria Santos", 
        description: "I needed English for my professional career, and Mila was exactly what I was looking for. My communication skills improved, and I now feel confident using English in meetings and interviews.",
        parent: "Student",

    },



];