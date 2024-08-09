import styles from '../app/page.module.css'
import { check, star, rightDownArr } from './icons'

const FirstSection = () => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div className={styles.page_container}>
      <section className={styles.welcome_section}>
        <div className={styles.welcome_wrap}>
          <div className={styles.left_part}>
            <div className={styles.main_title}>
              Лише <span className={styles.blue_font}>перевірені</span> та
              підготовлені авто
            </div>
            <div
              className={styles.reviews_cont}
              onClick={() =>
                window.open(
                  'https://www.google.com/search?q=beshcars&oq=beshcars&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgYIBRBFGDsyBggGEEUYPDIGCAcQRRg80gEINDI2MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x473ae7a770f3bc51:0x9ae7b09da0b17c24,1,,,,',
                  '_ blank'
                )
              }
            >
              {star}
              {star}
              {star}
              {star}
              {star}
              <span className={styles.bif_font}>4.9</span>{' '}
              <i>відгуки наших клієнтів</i>
            </div>
            <span className={styles.choose_option}>
              Дізнайтесь більше про нас та наші послуги{rightDownArr}
            </span>
          </div>
          <div className={styles.right_part}>
            <div className={styles.car_background}></div>
            <div className={styles.approv_besh}>
              {check} Перевірено BESHCARS
            </div>
            <img className={styles.main_car} src="/g30.png" />
          </div>
        </div>

        <div className={styles.our_services} id="services">
          <a
            href="https://auto.ria.com/uk/dealers/beshcars/3708/"
            target="_blank"
            className={styles.service_btn}
          >
            Наші авто
          </a>
          <button
            onClick={() => scrolltoHash('sale')}
            className={styles.service_btn}
          >
            Викуп авто
          </button>
          <button
            onClick={() => scrolltoHash('select')}
            className={styles.service_btn}
          >
            Підбір авто
          </button>
          <button
            onClick={() => scrolltoHash('comision')}
            className={styles.service_btn}
          >
            Комісія
          </button>
          <button
            onClick={() => scrolltoHash('trade')}
            className={styles.service_btn}
          >
            Обмін Trade-in
          </button>
        </div>
      </section>
    </div>
  )
}

export default FirstSection
