import Image from 'next/image'
import { useRouter } from 'next/router'
interface IMovieThumbnail {
  id: string
  posterUrl: string
  bannerUrl: string
}

export default function MovieThumbnail({
  data,
}: {
  data: IMovieThumbnail
}): JSX.Element {
  const router = useRouter()
  return (
    <div className="flex min-h-[330px] min-w-[220px] transform cursor-pointer overflow-hidden rounded-lg border-[3px] border-[#f9f9f9] border-opacity-10 shadow-xl transition  duration-300 hover:scale-105 hover:border-opacity-80 hover:shadow-2xl md:min-h-[330px] md:min-w-[220px]">
      <Image
        src={data.posterUrl}
        width={220}
        height={330}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}
