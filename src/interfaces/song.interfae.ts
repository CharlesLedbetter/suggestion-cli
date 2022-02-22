export interface song {
    id: number,
    uri: URL,
    artists_sort: string,
    title: string,
    country?: string,
    genres?: string[],
    styles?: string[],
    tracklist: track[]
  }

export interface track {
    position: string,
    type_: string,
    title: string,
    duration: string
  }