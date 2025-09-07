import React from "react"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className={`flex-1 py-20 ${className}`}>
      {children}
    </div>
  )
}
