"use client"
import React, { useEffect, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'inherit',
})

const Mermaid = ({ chart }) => {
    const [svg, setSvg] = useState("")
    // Unique ID for each diagram instance
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

    useEffect(() => {
        if (chart) {
            mermaid.render(id, chart).then(({ svg }) => {
                setSvg(svg)
            }).catch((e) => {
                console.error("Mermaid error:", e)
                setSvg(`<div class="text-red-500 p-2 border border-red-500 rounded">Failed to render diagram. Check console for details.</div>`)
            })
        }
    }, [chart, id])

    return (
        <div className="mermaid flex justify-center my-8" dangerouslySetInnerHTML={{ __html: svg }} />
    )
}

export default Mermaid
