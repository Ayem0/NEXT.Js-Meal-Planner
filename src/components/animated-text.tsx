"use client"

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function AnimatedText({
  text,
  className,
  speed = 50,
  delay = 300
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState(' ')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      let i = 0
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1))
        i++
        if (i === text.length) {
          clearInterval(intervalId)
          setIsAnimating(false)
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return (
    <h1 className={cn(className, isAnimating ? "after:content-['|'] after:animate-pulse after:ml-1 text-4xl md:text-6xl font-bold leading-tight" : "text-4xl md:text-6xl font-bold leading-tight")}>
      {displayedText}
    </h1>
  )
}