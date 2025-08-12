import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Gustavo Bueno</h3>
            <p className="text-muted-foreground">
              Estudante de Engenharia de Software e Técnico de celular, 
              transformando ideias em código e soluções criativas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                Sobre
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                Projetos
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
                Habilidades
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">📍 Curitiba - Paraná</p>
              <a 
                href="mailto:buenogustavo@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-smooth block"
              >
                ✉️ buenogustavo@gmail.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="mailto:buenogustavo@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gustavobueno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/gustavo-moreira-bueno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© {currentYear} Gustavo Moreira Bueno. Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>e React</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}