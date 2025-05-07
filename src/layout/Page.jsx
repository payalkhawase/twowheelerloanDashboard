import React from 'react'

import Sidenav from './Sidenav'
import Innerbody from './Innerbody'
import Footer from './Footer'

function Page() {
  return (
    <div style={{width:'100%'}}>
        <div style={{display:'flex'}}>
        <Sidenav/>
        <Innerbody/>
        </div>
        <Footer/>
    </div>
  )
}

export default Page
