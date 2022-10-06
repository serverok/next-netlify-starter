import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to ServerOK WordPress Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <Link href="https://serverok.in">ServerOk.in</Link><br/>
          <Link href="/services">Services</Link><br/>
          <Link href="/contact">Contact</Link><br/>
        </p>
      </main>

      <Footer />
    </div>
  )
}
