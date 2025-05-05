import React from 'react'
import Header from './Header'
import Head from './Head'
import Sidenav from './Sidenav'
import Innerbody from './Innerbody'
import Footer from './Footer'

function Page() {
  return (
    <div style={{width:'100%'}}>
        <div style={{display:'flex',height: '50px'}}>
        <Head/><Header/>
        
        </div>
        <div style={{display:'flex'}}>
        <Sidenav/>
        <Innerbody/>
        </div>
        <Footer/>
    
    </div>
  )
}

export default Page
