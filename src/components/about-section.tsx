import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, GraduationCap } from "lucide-react"

// Tipagem para os destaques
interface Highlight {
  icon: React.ElementType
  title: string
  description: string
}

// Array de destaques
const highlights: Highlight[] = [
  {
    icon: Smartphone,
    title: "Experiência em Hardware",
    description: "Atuação técnica em reparos de celulares, unindo prática e precisão."
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Estudante de Engenharia de Software com foco em soluções criativas."
  },
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description: "Cursando Engenharia de Software (3º ano) e sempre aprendendo mais."
  }
]

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Texto principal */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuo na área técnica de reparos em celulares e sou estudante de Engenharia de Software. 
                Combino experiência prática em hardware com conhecimento teórico em desenvolvimento de software.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha paixão por tecnologia me levou a explorar tanto o lado físico dos dispositivos quanto 
                o mundo do desenvolvimento de software, sempre buscando soluções criativas e eficientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que a combinação entre conhecimento técnico e criatividade é fundamental para 
                resolver problemas complexos e criar experiências significativas para os usuários.
              </p>
            </div>

            {/* Cards com destaques */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-smooth border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
