import { Header } from 'layouts/header'
import { CarouselSection } from './carousel'
import { Slogan } from './slogan'
import { Solutions } from './solutions'

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSection />
      <Slogan />
      <Solutions />
    </>
  )
}
