import Head from "next/head"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import styles from '../styles/Home.module.css'


const Layout = ({children}) => {
  return (
   
    <div>
     <Head>
        <title>Lorena Rodriguez Dev</title>
        <meta name="description" content="my porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
    <Navbar/>
    
    {children}
    
    </div>
    
  )
}

export default Layout