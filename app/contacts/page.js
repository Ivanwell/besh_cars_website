'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../page.module.css'
import Dialog from '@mui/material/Dialog'
import RequestForm from '@/components/RequestForm'
import Link from 'next/link'
import { telephon, envelop, locationIcon } from '@/components/icons'
import { useState } from 'react'

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
    <main className={styles.main}>
      <Header />
      <div className={styles.about_us_cont}>
        <div className={styles.about_descr_cont}>
          <h1 className={styles.about_title}>Завжди раді Вам!</h1>
          <div className={styles.contacts_cont}>
            <span className={styles.contact}>
              {locationIcon} Львівська обл. Малехів, вул. Жовківська 10А
            </span>
            <span className={styles.contact}>{envelop}beshcars@gmail.com</span>
            <span className={styles.contact}>{telephon}(093) 739 66 20</span>
          </div>
        </div>
        <div className={styles.about_descr_cont}>
          <img className={styles.image_about} src="/park.jpg" />
          <Link className={styles.tel_btn} href="tel:+380937396620">
            {telephon}Зателефонувати
          </Link>
          <button
            onClick={() => handleOpenRequest('з сторінки контакти')}
            className={styles.tel_btn}
          >
            {envelop}Залишити заявку
          </button>
        </div>
      </div>
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
  )
}
