import { addDays, subDays } from "date-fns"
import { DateRange } from "react-day-picker"
import { create } from "zustand"

interface DateRangeStore {
  dateRange: DateRange | undefined
  setDateRange: (range: DateRange | undefined) => void
}

export const useDateRangeStore = create<DateRangeStore>((set) => ({
  dateRange: {
    from: subDays(new Date(), 10),
    to: addDays(new Date(), 10),
  },
  setDateRange: (range) => set({ dateRange: range }),
}))
