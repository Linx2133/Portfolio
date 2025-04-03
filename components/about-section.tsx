import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=256&width=256" alt="Portrait" fill className="object-cover" />
            </div>
          </div>
          <Card className="border border-primary/20">
            <CardContent className="pt-6">
              <p className="mb-4">
                Bonjour ! Je suis Kévin, développeur Web/Desktop/Mobile en alternance à La Fournée Dorée et en formation pour obtenir le titre Concepteur et développeur d'application.
              </p>
              <p className="mb-4">
                Au cours de mes formations j'ai pu apprendre plusieurs technologies comme le PHP en utilisant Laravel, JavaScript en utilisant Next.js,
                HTML et CSS ainsi que le C# avec le .Net framework, pour le mobile j'ai pu utiliser dart avec Flutter.
              </p>
              <p>
                En dehors du code, j'aime le sport, les jeux vidéos et les sciences humaines et sociales. J'adore comprendre et analyser ce que je fais.
                Chercher l'optimisation est mon principal objectif, tout en tenant compte les problèmatiques humaines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

