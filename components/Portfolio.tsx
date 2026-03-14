import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---- Types ----
interface Project {
  id?: number;
  image: string;
  title: string;
  category?: string;
  summary?: string; // Corrected from 'description' to 'summary' based on API usage in original
  demo?: string;
}

// ---- Card Component ----
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-2xl overflow-hidden bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
  >
    {/* Image Container */}
    <div className="relative h-64 md:h-80 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      
      {/* Overlay Actions */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-primary-dark"
          >
            Visit Site <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 relative z-30 bg-background/50 backdrop-blur-md -mt-12 mx-4 mb-4 rounded-xl border border-white/5 shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <div>
          {project.category && (
            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
              {project.category}
            </span>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
      
      {project.summary && (
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      )}
    </div>
  </motion.div>
);

// ---- Skeleton Loading ----
const ProjectSkeleton: React.FC = () => (
  <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/5 animate-pulse">
    <div className="bg-slate-800 h-64 md:h-80 w-full mb-4"></div>
    <div className="p-6">
      <div className="h-4 bg-slate-800 w-1/4 rounded mb-4"></div>
      <div className="h-6 bg-slate-800 w-3/4 rounded mb-4"></div>
      <div className="h-4 bg-slate-800 w-full rounded"></div>
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
        "https://api.yanz.my.id/public/projects?limit=100"
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
    <section id="portfolio" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span>
            </h2>
            <p className="text-lg text-slate-400">
              Showcase of our latest digital products and solutions.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-white font-medium flex items-center gap-2 transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           <AnimatePresence>
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            ) : (
              projects.map((project, index) => (
                <ProjectCard
                  key={project.id ?? index}
                  project={project}
                  index={index}
                />
              ))
            )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
