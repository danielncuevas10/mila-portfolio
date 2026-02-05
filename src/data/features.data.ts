import type { Feature } from "../components/Card/CardsAbout";
import medal from "../assets/pictures/icons/about/medal.svg";
import point from "../assets/pictures/icons/about/point.svg";
import team from "../assets/pictures/icons/about/team.svg";
import idea from "../assets/pictures/icons/about/idea.svg";
import medalB from "../assets/pictures/icons/about/medalB.svg";
import pointB from "../assets/pictures/icons/about/pointB.svg";
import ideaB from "../assets/pictures/icons/about/ideaB.svg";
import teamB from "../assets/pictures/icons/about/teamB.svg";

export const features: Feature[] = [
    {id: "certified", icon: medal, title: "Certified Excellence", description: "Math lessons from a UBC mathematics graduate and researcher"},
    {id: "student", icon: point, title: "Student Centered", description: "Personalized plans that work for the learning style that suits you best"},
    {id: "student", icon: team, title: "Makes learning engaging", description: "Lessons that prioritize hands-on learning rather than memorization"},
    {id: "student", icon: idea, title: "Understanding guaranteed", description: "Classes that make even the most daunting subjects feel doable"},

];

export const featureEnglish: Feature[] = [
    {id: "certified", icon: medalB, title: "Global Pedagogy", description: "Mentorship informed by diverse cultures and international standards"},
    {id: "student", icon: pointB, title: "Strategic Focus", description: "Specialized preparation for elite performance in IELTS and TOEFL"},
    {id: "student", icon: teamB, title: "Adaptive Learning", description: "Custom-tailored curricula that respect individual learning styles"},
    {id: "student", icon: ideaB, title: "Practical Mastery", description: "Breaking down complex linguistic barriers into clear, usable fluencies"},

];