import { VFC } from 'react'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}

export default Home
