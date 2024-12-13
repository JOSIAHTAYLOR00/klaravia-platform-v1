import { Home, Construction } from "lucide-react";
import { Question, CustomQuestion } from "@/types/questions";
import DesignPath from "@/app/questionnaire/_components/DesignPath";

export const questions: (Question | CustomQuestion)[] = [
  {
    id: "foundation",
    question: "Does your home have a foundation?",
    description: "A proper foundation is essential for solar panel installation",
    options: [
      {
        id: "yes",
        label: "Yes",
        description: "My home has a solid foundation",
      },
      {
        id: "no",
        label: "No",
        description: "My home does not have a foundation",
      },
      {
        id: "UNKNOWN",
        label: "Not Sure",
        description: "I need help determining this",
      },
    ],
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: "roof-type",
    question: "What type of roof do you have?",
    description: "The type of roof affects how we'll install your solar panels",
    options: [
      {
        id: "COMPOSITION_SHINGLES",
        label: "Composition Shingles",
        description: "Common asphalt shingles used in most residential homes",
      },
      {
        id: "S_TYPE_CONCRETE",
        label: "S-Type Concrete",
        description: "S-shaped concrete tiles popular in Mediterranean-style homes",
      },
      {
        id: "FLAT_CONCRETE_TILE",
        label: "Flat Concrete Tile",
        description: "Flat concrete tiles commonly used in modern architecture",
      },
      {
        id: "METAL",
        label: "Metal",
        description: "Steel, aluminum, or other metal roofing materials",
      },
      {
        id: "FLAT",
        label: "Flat",
        description: "Flat roof typically found on modern or commercial buildings",
      },
      {
        id: "CLAY",
        label: "Clay",
        description: "Traditional clay tiles often seen in Spanish-style homes",
      },
      {
        id: "ROCK",
        label: "Rock",
        description: "Stone-based roofing materials",
      },
      {
        id: "SLATE_OR_STONE",
        label: "Slate or Stone",
        description: "Natural slate or stone tiles known for durability",
      },
    ],
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: "roof-condition",
    question: "What condition is your roof in?",
    description: "The condition of your roof affects solar panel installation",
    options: [
      {
        id: "EXCELLENT",
        label: "Excellent",
        description: "New or like-new condition (0-5 years old)",
      },
      {
        id: "GOOD",
        label: "Good",
        description: "Minor wear but no repairs needed (5-10 years old)",
      },
      {
        id: "POOR",
        label: "Poor",
        description: "Significant wear or damage (15+ years old)",
      },
    ],
    icon: <Construction className="w-8 h-8" />,
  },
  {
    id: "design-path",
    isCustomQuestion: true,
    component: DesignPath,
  },
];
