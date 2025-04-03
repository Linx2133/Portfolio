import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Computer, Database, Globe, Layout, Smartphone, Zap } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      category: "Framework",
      icon: <Layout className="h-6 w-6 text-primary" />,
      items: ["Laravel", "React.js", "Next.js", "JAVA spring boot","flutter"],
    },
    {
      category: "Base de données",
      icon: <Database className="h-6 w-6 text-primary" />,
      items: ["MySQL", "PostgreSQL", "SQLServer"],
    },
    {
      category: "Outils",
      icon: <Zap className="h-6 w-6 text-primary" />,
      items: ["Git", "GitHub", "VS Code", "CI/CD", "Docker"],
    },
    {
      category: "Web",
      icon: <Globe className="h-6 w-6 text-primary" />,
      items: ["PHP", "CSS", "HTML", "JS"]
    },
    {
      category: "Desktop",
      icon: <Computer className="h-6 w-6 text-primary" />,
      items: ["C#", "Windev", ".net Framework"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      items: ["React Native", "dart"],
    },
    {
      category: "Autres",
      icon: <Code className="h-6 w-6 text-primary" />,
      items: ["Figma", "Agile", "draw.io"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Compétences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

