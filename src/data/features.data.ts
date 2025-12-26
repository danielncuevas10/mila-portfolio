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
    {id: "certified", icon: medal, title: "Certified Excellence", description: "Lessons encourage critical thinking and independent problem-solving"},
    {id: "student", icon: point, title: "Student Centered", description: "Personalized plans that work for the learning style that suits you best"},
    {id: "student", icon: team, title: "Makes learning engaging", description: "Lessons that prioritize hands-on learning rather than memorization"},
    {id: "student", icon: idea, title: "Understanding guaranteed", description: "Classes that make even the most daunting subjects feel doable"},

];

export const featureEnglish: Feature[] = [
    {id: "certified", icon: medalB, title: "Globally Experienced", description: "Teaching English to learners from diverse cultures and backgrounds around the world"},
    {id: "student", icon: pointB, title: "Student Centered", description: "Personalized lessons shaped around each learner’s goals and background"},
    {id: "student", icon: teamB, title: "Culturally Aware Teaching", description: "Experienced in working with students across Asia and international classrooms"},
    {id: "student", icon: ideaB, title: "Clear & Practical English", description: "Breaking down complex language into simple, usable communication"},

];