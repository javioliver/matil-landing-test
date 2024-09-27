
import React from 'react'
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
import { GetStaticPropsContext } from 'next'

const Contacto =()=>{
    return(
        <>
         <Contact/>
         <Footer/>
        </>
    )
}

export default Contacto

export async function getStaticProps({locale}:GetStaticPropsContext) {
    return {
      props: {
        messages: require(`../lang/${locale}.json`)
      }
  }
  }
