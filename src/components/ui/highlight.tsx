import React from "react"

interface HighlightProps {
    children: React.ReactNode
}

export function Highlight({ children }: HighlightProps) {
    return (
        <em className="text-brand italic not-italic font-inherit">{children}</em>
    )
}
