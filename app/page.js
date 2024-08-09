'use client'

import styles from './page.module.css'
import Header from '@/components/Header'
import HeaderMobile from '@/components/HeaderMobile'
import Footer from '@/components/Footer'
import Dialog from '@mui/material/Dialog'
import ServiceSection from '@/components/ServiceSection'
import { useState } from 'react'
import RequestForm from '@/components/RequestForm'
import { services } from '@/lib/content'
import FirstSection from '@/components/FirstSection'
import FirstSectionMobile from '@/components/FirstSectionMobile'
import ServiceSectionMobile from '@/components/ServiceSectionMobile'

export default function Home() {
  const [openedRequest, setOpenRequest] = useState({
    opened: false,
    id: '',
  })

  const handleOpenRequest = id => {
    setOpenRequest(prev => {
      return { id, opened: true }
    })
  }

  const handleCloseRequest = () => {
    setOpenRequest(prev => {
      return { id: '', opened: false }
    })
  }

  return (
    <>
      <main className={styles.main}>
        <Header />
        <FirstSection />
        <ServiceSection
          service={services.sales}
          handleOpenRequest={handleOpenRequest}
        />
        <ServiceSection
          service={services.select}
          handleOpenRequest={handleOpenRequest}
        />
        <ServiceSection
          service={services.comision}
          handleOpenRequest={handleOpenRequest}
        />
        <ServiceSection
          service={services.trade}
          handleOpenRequest={handleOpenRequest}
        />

        <Footer handleOpenRequest={handleOpenRequest} />
        <Dialog
          open={openedRequest.opened}
          onClose={handleCloseRequest}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="xl"
          scroll="body"
        >
          <RequestForm
            id={openedRequest.id}
            handleCloseRequest={handleCloseRequest}
          />
        </Dialog>
      </main>
      <main className={styles.main_mobile}>
        <HeaderMobile />
        <FirstSectionMobile />
        <ServiceSectionMobile service={services.sales} />
        <ServiceSectionMobile service={services.select} />
        <ServiceSectionMobile service={services.comision} />
        <ServiceSectionMobile service={services.trade} />
        <Footer />
      </main>
    </>
  )
}
