import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Wrench, Database, Globe, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Reparos Técnicos",
    icon: Smartphone,
    skills: ["Soldagem de componentes", "Diagnóstico de hardware", "Troca de telas", "Reparo de placas", "Microsoldagem"],
    color: "text-blue-500"
  },
  {
    title: "Desenvolvimento Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    color: "text-green-500"
  },
  {
    title: "Ferramentas & Tecnologias",
    icon: Wrench,
    skills: ["Git", "VS Code", "Vite", "Node.js", "Figma", "Adobe XD"],
    color: "text-purple-500"
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["PostgreSQL", "Firebase", "REST APIs", "Express.js", "Supabase"],
    color: "text-orange-500"
  },
  {
    title: "Versionamento",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Controle de versão", "Branching", "Merge requests"],
    color: "text-red-500"
  },
  {
    title: "Soft Skills",
    icon: Code,
    skills: ["Resolução de problemas", "Trabalho em equipe", "Comunicação", "Aprendizado contínuo", "Atenção aos detalhes"],
    color: "text-indigo-500"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competências técnicas e experiências que adquiri ao longo da minha jornada
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Technical Skills Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Principais Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Git", "Reparos de Celulares"].map((skill) => (
              <Badge
                key={skill}
                className="text-sm px-4 py-2 gradient-primary hover:shadow-glow transition-smooth"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}