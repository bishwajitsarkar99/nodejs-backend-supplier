"use client"

import { useEffect, useState, useTransition } from "react"
import { usePathname } from "next/navigation"
import PageLoading from "@/components/loader/pageLoader"

export default function RouteChangeLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);

    return () => clearTimeout(timer);
    
  }, [pathname])

  return <PageLoading open={loading} />
}
