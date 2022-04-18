import Image from 'next/image'
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="sticky top-0 z-[1000] flex h-[72px] items-center bg-black px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      ></Image>
      <div className="ml-10 hidden items-center space-x-6 md:flex">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
    </div>
  )
}
