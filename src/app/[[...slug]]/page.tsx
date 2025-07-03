"use client"

import DashboardContent from "@/components/sections/dashboard"
import PortraitsContent from "@/components/sections/styles/portraits"
import { useSidebar } from "@/components/ui/sidebar"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"


function MainContent() {
  const [selectedPage, setSelectedPage] = useState("dashboard")
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const pathname = usePathname()

  // Update selected page based on current pathname
  useEffect(() => {
    const pathToPage: { [key: string]: string } = {
      '/': 'dashboard',
      '/dashboard': 'dashboard',
      '/styles/portraits': 'styles-portraits',
      '/styles/anime': 'styles-anime',
      '/styles/3d-avatars': 'styles-3d',
      '/styles/professional': 'styles-professional',
      '/styles/cartoon': 'styles-cartoon',
      '/styles/abstract': 'styles-abstract',
      '/creations': 'creations-all',
      '/creations/favorites': 'creations-favorites',
      '/creations/history': 'creations-history',
      '/credits/buy': 'credits-buy',
      '/credits/usage': 'credits-usage',
      '/credits/plans': 'credits-plans',
      '/settings/profile': 'settings-profile',
      '/settings/upload': 'settings-upload',
      '/settings/notifications': 'settings-notifications'
    }
    
    const updatePage = () => {
      const currentPath = window.location.pathname
      const page = pathToPage[currentPath] || 'dashboard'
      setSelectedPage(page)
    }

    updatePage()
    
    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', updatePage)
    
    return () => {
      window.removeEventListener('popstate', updatePage)
    }
  }, [pathname])

  const renderContent = () => {
    switch (selectedPage) {
      case "dashboard":
        return <DashboardContent isCollapsed={isCollapsed} />

      // 🎨 Styles
      case "styles-portraits":
        return <PortraitsContent isCollapsed={isCollapsed} />
      // case "styles-anime":
      //   return <AnimeContent />
      // case "styles-3d":
      //   return <ThreeDContent />
      // case "styles-professional":
      //   return <ProfessionalContent />
      // case "styles-cartoon":
      //   return <CartoonContent />
      // case "styles-abstract":
      //   return <AbstractContent />

      // // My Creations
      // case "creations-all":
      //   return <AllCreations />
      // case "creations-favorites":
      //   return <FavoriteCreations />
      // case "creations-history":
      //   return <HistoryCreations />

      // // Credits
      // case "credits-buy":
      //   return <BuyCredits />
      // case "credits-usage":
      //   return <UsageCredits />
      // case "credits-plans":
      //   return <PlansCredits />

      // // ⚙️ Settings
      // case "settings-profile":
      //   return <ProfileSettings />
      // case "settings-upload":
      //   return <UploadSettings />
      // case "settings-notifications":
      //   return <NotificationSettings />

      default:
        return <DashboardContent isCollapsed={isCollapsed} />
    }
  }

  return renderContent()
}

export default function CatchAllPage() {
  return <MainContent />
}