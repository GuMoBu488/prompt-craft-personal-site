import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import projectRepair from "@/assets/project-repair.jpg"
import projectWebapp from "@/assets/project-webapp.jpg"
import projectTasks from "@/assets/project-tasks.jpg"

const projects = [
  {
    title: "Sistema de Gestão de Reparos",
    description: "Plataforma web para gerenciar ordens de serviço, controle de estoque e histórico de reparos em assistência técnica de celulares.",
    image: projectRepair,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://repair-system-demo.vercel.app",
    githubUrl: "https://github.com/gustavobueno/repair-system"
  },
  {
    title: "Portfolio Responsivo",
    description: "Site pessoal moderno e responsivo desenvolvido com as melhores práticas de desenvolvimento web e design system consistente.",
    image: projectWebapp,
    technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    liveUrl: "https://gustavo-portfolio.vercel.app",
    githubUrl: "https://github.com/gustavobueno/portfolio"
  },
  {
    title: "App de Produtividade",
    description: "Aplicação de gerenciamento de tarefas com interface intuitiva, sincronização em tempo real e sistema de notificações.",
    image: projectTasks,
    technologies: ["React", "Firebase", "Material-UI", "PWA"],
    liveUrl: "https://productivity-app-demo.netlify.app",
    githubUrl: "https://github.com/gustavobueno/productivity-app"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, combinando criatividade e tecnologia
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary hover:shadow-glow transition-smooth"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}