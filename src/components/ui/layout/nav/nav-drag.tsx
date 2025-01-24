import { useGlobalStore } from "@/store/globalStore"
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import * as React from "react"
import { DraggableSelectors } from "../sidebar/draggable-selectors"

export const NavDrag = () => {
  const [activeId, setActiveId] = React.useState<string | null>(null)
  const { moveToOther, moveToFavorite, setFavorites, setOthers } =
    useGlobalStore()
  const favorites = useGlobalStore((state) => state.favorites)
  const others = useGlobalStore((state) => state.others)
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    const sourceId = active.id as string
    const overId = over.id as string

    // Don't do anything if hovering over the container
    if (overId === "favorites" || overId === "others") return

    const sourceLists = {
      favorites,
      others,
    }

    const activeList = Object.entries(sourceLists).find(([, list]) =>
      list.includes(sourceId)
    )?.[0]

    const overList = Object.entries(sourceLists).find(([, list]) =>
      list.includes(overId)
    )?.[0]

    if (!activeList || !overList || activeList === overList) return

    if (activeList === "favorites" && overList === "others") {
      const fromIndex = favorites.indexOf(sourceId)
      moveToOther(fromIndex)
    } else if (activeList === "others" && overList === "favorites") {
      const fromIndex = others.indexOf(sourceId)
      moveToFavorite(fromIndex)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const sourceId = active.id as string
    const destinationId = over.id as string

    if (favorites.includes(sourceId)) {
      const oldIndex = favorites.indexOf(sourceId)
      const newIndex = favorites.indexOf(destinationId)
      if (newIndex !== -1) {
        const newFavorites = arrayMove(favorites, oldIndex, newIndex)
        setFavorites(newFavorites)
      }
    } else if (others.includes(sourceId)) {
      const oldIndex = others.indexOf(sourceId)
      const newIndex = others.indexOf(destinationId)
      if (newIndex !== -1) {
        const newOthers = arrayMove(others, oldIndex, newIndex)
        setOthers(newOthers)
      }
    }
    setActiveId(null)
  }
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <DraggableSelectors />
      <DragOverlay>
        {activeId ? (
          <div className="flex items-center gap-2 p-2 bg-white shadow-lg rounded-md">
            {activeId}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
