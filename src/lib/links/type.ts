export interface Links {
  books?: {
    title: string
    author: string
    url: string
  }[]
  articles?: string[]
  youtubeChannels: {
    name: string
    url: string
  }[]
  docs: {
    name: string
    url: string
  }
}
