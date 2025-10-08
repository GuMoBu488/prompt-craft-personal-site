import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float [animation-delay:-0s]"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float [animation-delay:-2s]"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float [animation-delay:-4s]"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Gustavo Moreira Bueno"
                className="w-40 h-40 rounded-full object-cover shadow-elegant border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Olá, eu sou</span>
              <br />
              <span className="text-gradient">Gustavo Bueno</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Estudante de Engenharia de Software | Técnico de celular
            </p>
            
            <p className="text-lg md:text-xl text-primary font-medium">
              Transformando ideias em código
            </p>
            
            <p className="text-muted-foreground max-w-lg mx-auto">
              📍 Curitiba - Paraná
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-glow transition-smooth"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:buenogustavo436@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/GuMoBu488"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-moreira-bueno-87713937a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}