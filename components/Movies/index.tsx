import MovieThumbnail from './MovieThumbnail/index'
export interface IMovieData {
  id: string
  title: string
  posterUrl: string
  bannerUrl: string
}

export function Movies({
  data,
  title,
}: {
  data?: IMovieData[]
  title: string
}): JSX.Element {
  return (
    <div className="relative my-10 mx-auto flex max-w-[1900px] flex-col space-y-2 px-8">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll p-2">
        {data?.map((m: IMovieData) => {
          const movie = {
            id: m.id,
            posterUrl: m.posterUrl,
            bannerUrl: m.bannerUrl,
          }
          return <MovieThumbnail key={m.id} data={movie} />
        })}
      </div>
    </div>
  )
}
