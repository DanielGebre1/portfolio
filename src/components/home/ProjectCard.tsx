import { useState } from "react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  architectureSvg?: React.ReactNode;
  gradient: string;
}

export function ProjectCard({
  title,
  description,
  icon,
  techStack,
  liveUrl,
  githubUrl,
  caseStudyUrl,
  architectureSvg,
  gradient,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl ${gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />

      {/* Card */}
      <div
        className="relative glass rounded-2xl p-6 border border-border/30 transition-all duration-500 h-full flex flex-col group-hover:border-primary/30"
        style={{
          transform: isHovered
            ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px)"
            : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`h-12 w-12 rounded-xl ${gradient} flex items-center justify-center text-white`}>
            {icon}
          </div>
          
          {/* Live Demo Pulse Button */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Live Demo
            </a>
          )}
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture Diagram (hover state) */}
        {architectureSvg && isHovered && (
          <div className="absolute inset-0 rounded-2xl glass flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-4">System Architecture</p>
              {architectureSvg}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-border/30">
          {githubUrl && (
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {caseStudyUrl && (
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <a href={caseStudyUrl}>
                <BookOpen className="h-4 w-4 mr-2" />
                Case Study
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
