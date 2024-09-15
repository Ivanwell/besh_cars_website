import styles from '../app/page.module.css'
import Link from 'next/link'
import { telephon, instagram, youTube, tiktok, facebook } from './icons'

const Header = () => {
  return (
    <div className={styles.header_cont}>
      <img className={styles.logo} src="/Logo_Beshcars_color.svg" />
      <div className={styles.link_container}>
        <Link href={`/`}>Головна</Link>
        <Link href={`/about_us`}>Про нас</Link>
        <Link href={`/contacts`}>Контакти</Link>
        <Link href={`/`}>{telephon}(093) 739 66 20</Link>
        <a target="_blank" href={`https://www.instagram.com/beshcars`}>
          {instagram}
        </a>
        <Link href={`/`}>{youTube}</Link>
        <a target="_blank" href={`https://www.tiktok.com/@beshcars`}>
          {tiktok}
        </a>
        <Link href={`/`}>{facebook}</Link>
      </div>
    </div>
  )
}

export default Header
