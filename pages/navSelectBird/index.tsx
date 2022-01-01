import Link from 'next/link'

export default function Test() {
  return (
    <>
      <h1>Test</h1>
      <h4>
        <Link href="/selectBird">
          <a>Click here to return back to Select a Bird</a>
        </Link>
      </h4>
    </>
  )
}