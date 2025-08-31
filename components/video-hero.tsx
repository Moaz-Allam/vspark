"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

interface VideoHeroProps {
  videoSrc: string
  thumbnailSrc: string
  youtubeUrl: string
  alt: string
  className?: string
}

export function VideoHero({
  videoSrc,
  thumbnailSrc,
  youtubeUrl,
  alt,
  className = ""
}: VideoHeroProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleVideoClick = () => {
    // Always redirect to YouTube when clicked
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {/* Video Element */}
      <video
        className="w-full h-auto transition-all duration-700 ease-in-out"
        poster={thumbnailSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* YouTube Link Overlay */}
      <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ease-in-out z-[500] ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="bg-black/80 backdrop-blur-sm text-white rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2 justify-center border border-white/20 shadow-lg">
          <ExternalLink className="w-4 h-4" />
          Click to Watch on YouTube
        </div>
      </div>

      {/* Click Indicator (always visible) */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white rounded-full p-2 shadow-lg z-[500]">
        <ExternalLink className="w-4 h-4" />
      </div>

      {/* Hover Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-primary/10 rounded-xl border-2 border-primary/50 transition-all duration-300" />
      )}
    </div>
  )
}
