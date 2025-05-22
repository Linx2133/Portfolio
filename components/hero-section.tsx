"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Développeur Web/Desktop/Mobile"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="absolute inset-0 -z-10 hero-gradient"></div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Kévin Roufaud</h1>
      <div className="h-8 mt-4">
        <h2 className="text-xl md:text-2xl text-primary">
          {typedText}
          <span className="animate-blink text-primary">|</span>
        </h2>
      </div>
      <p className="mt-6 max-w-lg text-muted-foreground">
        Je suis développeur Web/Desktop/Mobile, Actuellement en formation en alternance à La Fournée Dorée
      </p>
      <div className="flex gap-4 mt-8">
        {/* <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#contact">Me contacter</Link>
        </Button> */}
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="#projects">Voir mes projets</Link>
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Github"
          className="text-primary hover:text-primary/90 hover:bg-primary/10"
        >
          <Github className="h-5 w-5" href="https://github.com/Linx2133" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="LinkedIn"
          className="text-primary hover:text-primary/90 hover:bg-primary/10"
        >
          <Linkedin className="h-5 w-5" href="https://www.linkedin.com/in/kévin-roufaud-24b103244/"/>
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 animate-bounce text-primary hover:text-primary/90 hover:bg-primary/10"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  )
}

