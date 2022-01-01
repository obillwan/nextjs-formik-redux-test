import Link from 'next/link'
import FormikContainer from '../../src/components/Form/FormikContainer'

export default function Home() {
  return (
    <>
      <h4>
        1. Chose options and click submit 
        <FormikContainer/>
        <br/>
        2. 
        <Link href="../navSelectBird">
          <a>Click here to go to other page</a>
        </Link>
        <br/><br/>
        3. 
        <Link href="/">
          <a>Click here to go back to home</a>
        </Link>
      </h4>
      </>
  )
}
