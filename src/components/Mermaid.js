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
            console.log("Attempting to render Mermaid ID:", id)
            mermaid.render(id, chart).then(({ svg }) => {
                console.log("Mermaid Render Success")
                setSvg(svg)
            }).catch((e) => {
                console.error("Mermaid Render Error:", e)
                setSvg(`<div class="text-red-500 p-2 border border-red-500 rounded">Failed to render diagram. Error: ${e.message}</div>`)
            })
        }
    }, [chart, id])

    return (
        <div className="mermaid flex justify-center my-8" dangerouslySetInnerHTML={{ __html: svg }} />
    )
}

export default Mermaid
