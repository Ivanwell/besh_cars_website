import styles from '../app/page.module.css'
import { check, star, rightDownArr } from './icons'

const FirstSectionMobile = () => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div className={styles.first_section_cont}>
      <div className={styles.page_container_mobile}>
        <img className={styles.main_car} src="/g30.png" />
      </div>
      <div
        className={styles.stars}
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
        <span className={styles.review_mark}>4.9</span>
      </div>
      <div
        className={styles.reviews_descr}
        onClick={() =>
          window.open(
            'https://www.google.com/search?q=beshcars&oq=beshcars&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgYIBRBFGDsyBggGEEUYPDIGCAcQRRg80gEINDI2MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x473ae7a770f3bc51:0x9ae7b09da0b17c24,1,,,,',
            '_ blank'
          )
        }
      >
        Підтвердженні відгуки від наших клієнтів
      </div>
      <a
        href="https://auto.ria.com/uk/dealers/beshcars/3708/"
        target="_blank"
        className={styles.in_stock_btn}
      >
        Авто в наявності
      </a>
      <div className={styles.services_list} id="services_mobile">
        <span className={styles.title_service}>
          Дізнайтесь більше про нас та наші послуги
        </span>
        <div className={styles.table_services}>
          <button
            className={styles.service_btn_mobile}
            onClick={() => scrolltoHash('sale_mobile')}
          >
            Викуп авто
          </button>
          <button
            className={styles.service_btn_mobile}
            onClick={() => scrolltoHash('select_mobile')}
          >
            Підбір авто
          </button>
          <button
            className={styles.service_btn_mobile}
            onClick={() => scrolltoHash('comision_mobile')}
          >
            Комісія
          </button>
          <button
            className={styles.service_btn_mobile}
            onClick={() => scrolltoHash('trade_mobile')}
          >
            Обмін Trade-IN
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstSectionMobile
