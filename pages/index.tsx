import Link from 'next/link'
import Birdies from '../src/components/Birds'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h4>
        <Link href="/test">
          <a>Click here to go to other page</a>
        </Link>
        
        <Birdies />
      </h4>
      </>
  )
}
