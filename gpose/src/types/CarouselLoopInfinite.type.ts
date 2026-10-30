import type { ReactNode } from "react"

export type CarouselLoopProp = {
    items: ReactNode[],
    duration: number,
    gap: number,
}