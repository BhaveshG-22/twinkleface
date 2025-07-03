'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PortraitsContentProps {
  isCollapsed?: boolean
}

export default function PortraitsContent({ isCollapsed = false }: PortraitsContentProps) {
  const portraitStyles = [
    {
      id: 'P1',
      title: 'Professional Headshot',
      description: 'Corporate and business portraits',
      color: 'from-blue-600 to-purple-600',
      icon: '👔'
    },
    {
      id: 'P2', 
      title: 'Artistic Portrait',
      description: 'Creative and artistic styles',
      color: 'from-pink-600 to-rose-600',
      icon: '🎨'
    },
    {
      id: 'P3',
      title: 'Vintage Portrait',
      description: 'Classic and timeless looks',
      color: 'from-amber-600 to-orange-600',
      icon: '📸'
    },
    {
      id: 'P4',
      title: 'Fashion Portrait',
      description: 'High fashion and editorial',
      color: 'from-purple-600 to-indigo-600',
      icon: '🎨'
    },
    {
      id: 'P5',
      title: 'Glamour Portrait',
      description: 'Hollywood glamour style',
      color: 'from-rose-600 to-pink-600',
      icon: '💄'
    },
    {
      id: 'P6',
      title: 'Natural Portrait',
      description: 'Soft and natural lighting',
      color: 'from-green-600 to-teal-600',
      icon: '🌿'
    }
  ]

  return (
    <div className="flex flex-col gap-6 pb-12 w-full">
      <div className={`flex flex-col gap-6 transition-all duration-300 ${isCollapsed ? 'px-8' : 'px-6'}`}>
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2">
            <span className="text-purple-400">📸</span>
            <span className="text-purple-300 text-sm font-medium">PORTRAIT STYLES</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white">
            Professional Portraits
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Transform your photos into stunning professional portraits. Perfect for LinkedIn, business cards, or personal branding.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-8">
          <div className="flex items-center gap-2 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">5,000+ portraits created</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 text-blue-400">
            <span className="text-sm font-medium">⚡ Professional quality</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 text-purple-400">
            <span className="text-sm font-medium">🎨 6 unique styles</span>
          </div>
        </div>

        {/* Portrait Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portraitStyles.map((style) => (
            <div
              key={style.id}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {style.icon}
                </div>
                
                <div className="text-center space-y-2">
                  <Badge className="bg-white/20 text-white font-bold px-3 py-1 text-xs mb-2">
                    {style.id}
                  </Badge>
                  <h3 className="text-xl font-bold">{style.title}</h3>
                  <p className="text-white/80 text-sm">{style.description}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Button className="bg-white/90 text-black hover:bg-white font-bold shadow-2xl px-6 py-2">
                    <span className="text-purple-600">🎨</span> Try This Style
                  </Button>
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/40 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-12 border-t border-gray-800/50 mt-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
              <span className="text-emerald-400">🚀</span>
              <span className="text-emerald-300 text-sm font-medium">COMING SOON</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              More Portrait Styles
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re working on adding more professional portrait styles including corporate, casual, and artistic variations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}