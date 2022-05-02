import {
  TerminalIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Centralized Data',
    description:
      'One API to you pick a accurate data from TMDB, IMDb, Rotten Tomatoes, Metacritic, Justwatch and others.',
    icon: GlobeAltIcon,
  },
  {
    name: 'How can I use it?',
    description:
      'We are RESTful. With nearly limitless quota on requests, you have the freedom to create what you want with our API.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Price',
    description: 'We are Free.',
    icon: ScaleIcon,
  },
  {
    name: 'Open Source',
    description:
      'You can focus on making your app while we keep the requests rolling.',
    icon: TerminalIcon,
  },
]

export default function Feature() {
  return (
    <div className="relative mx-auto mt-7 px-10 md:px-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
            What is this?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            We are a metadata aggregation engine focused on Pixar Animation
            Studios.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
