"use client";

import { BackgroundBeams } from "@/components/ui/background-beams"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import {useRouter} from "next/navigation";

export default function LandingPage() {

    const router = useRouter();
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundBeams />
      
 

      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl font-extrabold mb-4 relative z-10">
              Identify Songs by Humming
            </h2>
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="absolute top-0 left-0 w-full h-full z-0"
              particleColor="#FFD700"
            />
          </div>
          <TextGenerateEffect words="Powered by advanced machine learning, HumTune AI recognizes songs from your humming. Experience the magic of music identification like never before." className="text-xl mb-8" />
          <a onClick={() => {
            // use router to navigate to project proposal page
            router.push("/midterm-report");

          }}>
          <MovingBorderButton
              
              borderRadius="1.75rem"
              className="bg-primary-foreground text-primary border-primary/10 hover:border-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground transition-all duration-300"
>
  View Midterm Report
</MovingBorderButton>
</a>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary/10">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
               

      
      </main>
    </div>
  )
}

const features = [
  {
    title: "Accurate Recognition",
    description: "Our advanced AI model accurately identifies songs from just a few seconds of humming.",
  },
  {
    title: "Vast Music Library",
    description: "Access a database of millions of songs across various genres and languages.",
  },
  {
    title: "Quick Results",
    description: "Get instant song matches with detailed information about the track and artist.",
  },
]