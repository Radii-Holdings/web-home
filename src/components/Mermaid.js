"use client"
import React, { useEffect, useRef } from "react"
import mermaid from "mermaid"

mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'inherit',
})

/**
 * Renders a Mermaid diagram inside a Shadow DOM so that Mermaid's injected
 * <style> elements are fully scoped and cannot bleed into the rest of the page.
 */
const Mermaid = ({ chart }) => {
    const containerRef = useRef(null)
    // Stable ID — never changes between renders to avoid infinite loops
    const idRef = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`)

    useEffect(() => {
        if (!chart || !containerRef.current) return

        mermaid.render(idRef.current, chart)
            .then(({ svg }) => {
                // Use Shadow DOM so Mermaid's <style> blocks are scoped here
                // and cannot override the host page's prose text colors.
                const host = containerRef.current
                const shadow = host.shadowRoot ?? host.attachShadow({ mode: 'open' })
                shadow.innerHTML = svg
            })
            .catch((e) => {
                console.error("Mermaid Render Error:", e)
                if (containerRef.current) {
                    containerRef.current.innerHTML =
                        `<div class="text-red-500 p-2 border border-red-500 rounded">Failed to render diagram. Error: ${e.message}</div>`
                }
            })
    }, [chart])

    return (
        <div ref={containerRef} className="mermaid flex justify-center my-8" />
    )
}

export default Mermaid
