import Head from "next/head"
import { Header } from "../components/Header"
import { NavigationBar } from "../components/NavigationBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <Header />
      <NavigationBar />
    </>
  )
}
