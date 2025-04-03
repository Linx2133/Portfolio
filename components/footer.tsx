"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Kévin Roufaud</h3>
            <p className="text-muted-foreground mt-2">Développeur Web/Desktop/Mobile</p>
          </div>

          <div className="flex gap-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" aria-label="Github">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" href="https://www.linkedin.com/in/k%C3%A9vin-roufaud-24b103244/"/>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <Button variant="outline" size="icon" onClick={scrollToTop} aria-label="Retour en haut">
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kévin Roufaud. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

