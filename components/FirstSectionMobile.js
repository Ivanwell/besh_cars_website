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
      <div className={styles.stars}>
        {star}
        {star}
        {star}
        {star}
        {star}
        <span className={styles.review_mark}>4.9</span>
      </div>
      <div className={styles.reviews_descr}>
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
          <button className={styles.service_btn_mobile}>Викуп авто</button>
          <button className={styles.service_btn_mobile}>Підбір авто</button>
          <button className={styles.service_btn_mobile}>Комісія</button>
          <button className={styles.service_btn_mobile}>Обмін Trade-IN</button>
        </div>
      </div>
    </div>
  )
}

export default FirstSectionMobile
