export interface reelgoodProgram {
    id: string,
    title: string,
    overview: string,
    tagline: string,
    classification: string,
    runtime: number,
    released_on?: Date,
    imdb_rating?: number,
    rt_critics_rating?: number,
    reelgood_score?: number,
    genres: number[],
    season_count?: number,
    content_type?: string
  }