'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../page.module.css'
import Link from 'next/link'
import Dialog from '@mui/material/Dialog'
import RequestForm from '@/components/RequestForm'
import { telephon, envelop } from '@/components/icons'
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
          <h1 className={styles.about_title}>Давайте знайомитись! </h1>
          <p className={styles.service_description}>
            Ми - команда BESHCARS, спеціалізуємось на продажі, викупі та підборі
            авто, гарантуючи нашим клієнтам безпеку, зручність та вигідні умови.
            <br />
            <br /> В нашому асортименті завжди великий вибір автомобілів. Усі
            авто ретельно перевірені нашими експертами. Ми дбаємо про те, щоб
            кожен клієнт знайшов своє ідеальне авто, яке буде відповідати всім
            його потребам та бюджетним вимогам.
            <br />
            <br />
            Якщо вам потрібно швидко і вигідно продати автомобіль – Beshcars
            зробить це максимально комфортно для вас. Ми пропонуємо чесну та
            ринкову ціну за ваш автомобіль, а наш процес оцінювання і викупу
            відбувається прозоро та оперативно. Заповніть заявку онлайн або
            зателефонуйте до нашого офісу
          </p>
        </div>
        <div className={styles.about_descr_cont}>
          <img className={styles.image_about} src="/box.jpg" />
          <Link className={styles.tel_btn} href="tel:+380937396620">
            {telephon}Зателефонувати
          </Link>
          <button
            onClick={() => handleOpenRequest('з сторінки про нас')}
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
