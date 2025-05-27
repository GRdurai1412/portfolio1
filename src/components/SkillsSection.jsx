import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Bootstrap 5", level: 95, category: "Frontend" },
  { name: "Laravel", level: 60, category: "Frontend" },

  // Backend
  { name: "PHP", level: 95, category: "Backend" },
  { name: "MYSQL", level: 80, category: "Backend" },
  { name: "Node.JS", level: 75, category: "Backend" },

  // Tools
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "GitHub", level: 75, category: "Tools" },
];

// Extract unique categories plus "all"
const categories = ["all", ...Array.from(new Set(skills.map((s) => s.category)))];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
