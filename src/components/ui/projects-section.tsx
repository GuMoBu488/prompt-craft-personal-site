import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio em React, TS e Tailwind.",
    url: "https://github.com/GuMoBu488/portfolio"
  },
  {
    title: "App de Tarefas",
    description: "Um app simples de gerenciamento de tarefas.",
    url: "https://github.com/GuMoBu488/todo-app"
  }
]

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:underline"
                >
                  Ver projeto <ExternalLink className="ml-2 h-4 w-4"/>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
