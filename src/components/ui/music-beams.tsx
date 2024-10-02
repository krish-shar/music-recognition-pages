import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const BackgroundBeams = ({
  className,
}: {
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const beams = [
    {
      color: "from-purple-500 to-indigo-500",
      position: "left-0 top-0",
      size: "w-[400px] h-[200px]",
    },
    {
      color: "from-blue-500 to-cyan-500",
      position: "right-0 bottom-0",
      size: "w-[300px] h-[250px]",
    },
    {
      color: "from-pink-500 to-rose-500",
      position: "left-1/2 top-1/2",
      size: "w-[350px] h[300px]",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-0 overflow-hidden opacity-50",
        className
      )}
    >
      {beams.map((beam, index) => (
        <div
          key={index}
          className={`absolute ${beam.position} ${beam.size} bg-gradient-to-r ${beam.color} blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transition: "all 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}