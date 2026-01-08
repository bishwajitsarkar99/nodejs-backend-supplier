"use client"

import Link from "next/link"
import { twMerge } from "tailwind-merge"

import Div from "../div/div"
import Span from "../span/span"

type NavGroup = {
  groupTitle: string
  url?: string
}

type ActiveNav = {
  moduleTitle?: string
  groups?: NavGroup[]
  currentPath?: string
}

export default function NavBarUrl({
  activeNav,
}: {
  activeNav: ActiveNav
}) {
  const groups = activeNav.groups ?? []

  return (
    <Div className="mx-2.5 my-2.5 p-2">
      <nav className="w-full h-auto shadow-ms inset-0.5 p-0.5 rounded-full bg-accent/90">
        <Div className="ps-3 flex items-center flex-wrap">

          {/* STATIC PART (NOT LOOPED) */}
          <Span className="text-sm font-medium text-gray-600">
            {activeNav.moduleTitle ?? "Products"} Module :
          </Span>

          {/* LOOPED PART */}
          {groups.map((item, index) => {
            const isLast = index === groups.length - 1
            const isActive = item.url === activeNav.currentPath

            return (
              <Div key={index} className={twMerge(
                "ps-0.5"
              )}>
                {item.url ? (
                  <Link
                    href={item.url}
                      className={twMerge(
                        "text-sm font-medium text-indigo-400 cursor-pointer hover:text-indigo-500 transition duration-200",
                        "hover:underline-offset-1 hover:underline",
                        isActive
                        ? "text-indigo-600 font-semibold underline"
                        : "text-indigo-400"
                      )}
                    >
                      {item.groupTitle}
                  </Link>
                ) : (
                  <Span className="text-sm font-medium text-gray-600">
                    {item.groupTitle}
                  </Span>
                )}

                {!isLast && (
                  <Span className="px-1 text-gray-400">/</Span>
                )}
              </Div>
            )
          })}
        </Div>
      </nav>
    </Div>
  )
}
