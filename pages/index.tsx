import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h4>
        <Link href="/selectBird">
          <a>Open Test</a>
        </Link>
      </h4>
      </>
  )
}
