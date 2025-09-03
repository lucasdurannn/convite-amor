"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BookPageProps {
  children: ReactNode
  className?: string
  isVisible?: boolean
}

export function BookPage({ children, className, isVisible = true }: BookPageProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-white rounded-3xl shadow-2xl border border-rose-200/50",
        "transition-all duration-700 ease-out transform",
        !isVisible && "opacity-0 pointer-events-none scale-95 translate-y-4",
        isVisible && "opacity-100 scale-100 translate-y-0",
        "backdrop-blur-sm",
        className,
      )}
    >
      <div className="h-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden">
        {children}
      </div>
    </div>
  )
}
