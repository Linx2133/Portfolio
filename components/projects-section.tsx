import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Projet Automatisation de contrat",
      description: "Un module sur un intranet, permettant d'automatiser la génération de contrat de travail, avec article personnalisés",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["PHP", "Jquery", "MySQL"],
    },
    {
      title: "Projet Controle Balance",
      description: "Création d'une application desktop permettant de faire un controle des balances sur ligne de production, plus gestion des balances sur intranet",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["C#", "MySQL", "PHP", "JS"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

