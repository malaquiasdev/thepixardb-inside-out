import Image from 'next/image'
import Link from 'next/link'
interface IMovieCard {
  id: string
  posterUrl: string
  bannerUrl: string
}

export default function MovieCard({ data }: { data: IMovieCard }) {
  return (
    <Link href={`demo/movies/${data.id}`}>
      <div className="flex min-h-[330px] min-w-[220px] transform cursor-pointer overflow-hidden rounded-lg border-[3px] border-[#f9f9f9] border-opacity-10 shadow-xl transition  duration-300 hover:scale-105 hover:border-opacity-80 hover:shadow-2xl md:min-h-[330px] md:min-w-[220px]">
        <Image
          src={data.posterUrl}
          width={220}
          height={330}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </Link>
  )
}
