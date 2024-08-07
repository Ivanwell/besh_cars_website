import styles from '../app/page.module.css'
import Link from 'next/link'
import { telephon, listCheck, youTube, tiktok, facebook } from './icons'

const HeaderMobile = () => {
  return (
    <div className={styles.header_cont_mobile}>
      <div className={styles.menu_header}>{listCheck}Наші послуги</div>
      <a className={styles.phone_header} href="tel:+380937396620">
        {telephon}Зателефонувати
      </a>
      <img className={styles.logo_mobile} src="/Logo_Beshcars_color.svg" />
      <span className={styles.slogon}>
        Лише <span className={styles.blue_font}>перевірені</span> авто
      </span>
    </div>
  )
}

export default HeaderMobile
