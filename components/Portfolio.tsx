import React from "react";
import { ExternalLink } from "lucide-react";

// ---- Types ----
interface Project {
  id?: number;
  image: string;
  title: string;
  category?: string;
  description?: string;
  demo?: string;
}

// ---- Card Komponen ----
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary rounded-lg overflow-hidden group shadow-lg">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-contain transform group-hover:scale-110 transition-transform duration-500"
      />
      {project.demo && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ExternalLink className="text-white h-8 w-8" />
          </a>
        </div>
      )}
    </div>
    <div className="p-6">
      {project.category && (
        <span className="text-accent text-sm font-semibold">
          {project.category}
        </span>
      )}
      <h3 className="text-xl font-bold text-white mt-2 mb-3">
        {project.title}
      </h3>
      {project.summary && (
        <p className="text-gray-text text-sm">{project.summary}</p>
      )}
    </div>
  </div>
);

// ---- Skeleton Loading ----
const ProjectSkeleton: React.FC = () => (
  <div className="bg-secondary rounded-lg overflow-hidden animate-pulse">
    <div className="bg-gray-700 h-60 w-full"></div>
    <div className="p-6 space-y-3">
      <div className="h-4 bg-gray-700 w-1/3 rounded"></div>
      <div className="h-6 bg-gray-700 w-2/3 rounded"></div>
      <div className="h-4 bg-gray-700 w-full rounded"></div>
      <div className="h-4 bg-gray-700 w-5/6 rounded"></div>
    </div>
  </div>
);

// ---- Main Component ----
const Portfolio: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.yayandev.com/public/projects?limit=100"
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setProjects(data.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Portfolio Proyek Kami
          </h2>
          <p className="text-lg text-gray-text mt-2">
            Karya yang kami banggakan.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id ?? project.title}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
