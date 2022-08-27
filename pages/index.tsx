import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile SurajitG</title>
      </Head>

      <div className="container-fluid p-0">
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </>
  )
}

export default Home
