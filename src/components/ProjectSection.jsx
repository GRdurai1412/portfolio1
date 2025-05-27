import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "EOD Report",
    description:
      "Developed a dynamic End-of-Day (EOD) reporting system to streamline daily operations tracking and performance analysis for the company",
    images: [
      "/projects/eod report.png",
      "/projects/Eod report(hq team).png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
  },
  {
    id: 2,
    title: "Invoice",
    description:
      "Developed a custom, branded invoice system for streamlined billing.",
    images: ["/projects/invoice.png"],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
    githubUrl: "https://ganesh1412-developer.github.io/invoice/invoice/index.html",
  },
  {
    id: 3,
    title: "Leave Panel",
    description:
      "Developed a multi-level leave panel enabling HR and MD approval workflow for employee leave requests",
    images: [
      "/projects/leave pannel(form).png",
      "/projects/leave pannel(index).png",
      "/projects/leave pannel(hr).png",
      "/projects/leave pannel(status).png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP"],
  },
];

// CSS to hide scrollbar
const style = `
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

export const ProjectSection = () => {
  const scrollRefs = useRef([]);

  useEffect(() => {
    const intervals = [];

    scrollRefs.current.forEach((container) => {
      if (!container) return;

      const scrollInterval = 4000; // 4 seconds

      const scrollAmount = container.clientWidth;

      const intervalId = setInterval(() => {
        if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, scrollInterval);

      intervals.push(intervalId);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <>
      <style>{style}</style>
      <section id="project" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different
            skills and technologies I've worked with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  ref={(el) => (scrollRefs.current[idx] = el)}
                  className="h-48 overflow-x-auto scroll-smooth hide-scrollbar px-2 py-2"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div className="flex space-x-3">
                    {Array.isArray(project.images) &&
                      project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} image ${i + 1}`}
                          className="h-48 object-contain rounded cursor-pointer flex-shrink-0"
                          onClick={() => window.open(img, "_blank")}
                        />
                      ))}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-primary">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-200 rounded px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 underline mt-2 inline-block"
                    >
                      View Project
                    </a>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a className="cosmic-button w-fit mx-auto gap-2 items-center flex" href="https://github.com/GRdurai1412" target="_blank">
                Check My Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
