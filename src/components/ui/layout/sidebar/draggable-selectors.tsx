import { useFavorites, useOthers } from "@/store/globalStore"
import { useDroppable } from "@dnd-kit/core"
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

function DraggableItem({ id }: { id: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center gap-2 p-2 cursor-grab hover:bg-sidebar-hover rounded-md group"
    >
      <GripVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-sm">{id}</span>
    </div>
  )
}

function DroppableSection({
  id,
  title,
  items,
}: {
  id: string
  title: string
  items: string[]
}) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div className="p-2">
      <h3 className="text-[0.8rem] font-bold mb-2 ml-3">{title}</h3>
      <div ref={setNodeRef} className="space-y-1">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((name) => (
            <DraggableItem key={name} id={name} />
          ))}
        </SortableContext>
      </div>
    </div>
  )
}

export function DraggableSelectors() {
  const favorites = useFavorites()
  const others = useOthers()

  return (
    <div className="space-y-4">
      <DroppableSection id="favorites" title="Favorites" items={favorites} />
      <DroppableSection id="others" title="Others" items={others} />
    </div>
  )
}
