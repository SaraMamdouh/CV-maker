import { UserOutlined } from "@ant-design/icons";
import { FaUserGraduate } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import PersonalForm from "./PersonalForm";
import ExperienceSection from "./ExperineceForm";
import Achievements from "./achievements";
import EducationSection from "./educationForm/EducationForm";

export const steps = [
  {
    title: "Personal",
    content: PersonalForm,
    icon: UserOutlined,
    header: "Personal Information",
  },
  {
    title: "Education",
    content: EducationSection,
    icon: FaUserGraduate,
    header: "Education Information",
  },
  {
    title: "Experience",
    content: ExperienceSection,
    icon: MdWorkOutline,
    header: "Experience Information",
  },
  {
    title: "Skills",
    content: Achievements,
    icon: GiAchievement,
    header: "Skills",
  },
];
