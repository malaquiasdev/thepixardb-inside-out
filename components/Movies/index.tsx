export interface IMovieData {
  id: number
  title: string
  posterUrl: string
}

export function Movies({ data }: { data?: IMovieData[] }) {
  return (
    <div>
      {data?.map((m: IMovieData) => {
        return <div key={m.id}>{m.title}</div>
      })}
    </div>
  )
}
