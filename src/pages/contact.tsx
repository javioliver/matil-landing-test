
import React from 'react'
import Head from 'next/head'
import Contact from '../Content/Components/contact'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'

const Contacto =()=>{

    const t = useTranslations('Sections')
    return(
    <>
      <Head>
            <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
            <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="MyWebSite" />
            <link rel="manifest" href="/images/favicon/site.webmanifest" />
            <title>{t('Contact_Title')}</title>
            <meta name="description" content={t('Contact_Description')} /> 
        </Head >
        <Contact/>
    </>
   )
}

export default Contacto

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
