import styles from '../app/page.module.css'

const Footer = ({ handleOpenRequest }) => {
  return (
    <>
      <div className={styles.footer_cont}>
        <div className={styles.footer_wrap}>
          <div className={styles.footer_row}>
            <h4>Наші контакти</h4>
            <span>beshcars@gmail.com</span>
            <span>(093) 739 66 20</span>
          </div>
          <div className={styles.footer_row}>
            <h4>Стежте за нами</h4>
            <a
              className={styles.footer_link}
              target="_blank"
              href={`https://www.instagram.com/beshcars`}
            >
              Instagram
            </a>
            <a
              className={styles.footer_link}
              target="_blank"
              href={`https://www.youtube.com/@BESHCARS`}
            >
              YouTube
            </a>
            <a
              className={styles.footer_link}
              target="_blank"
              href={`https://www.tiktok.com/@beshcars`}
            >
              Tiktok
            </a>
          </div>
          <div className={styles.footer_row}>
            <h4>Є ще запитання?</h4>
            <span
              className={styles.footer_link}
              onClick={() => handleOpenRequest('Запитання')}
            >
              Залишити заявку
            </span>
          </div>
          <div className={styles.footer_row}>
            <div className={styles.footer_row_new}>
              <img className={styles.logo_footer} src="/Logo_white.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_cont_mobile}>
        <a href="/contacts" className={styles.footer_contacts}>
          Контакти
        </a>
        <img className={styles.logo_footer} src="/Logo_white.svg" />
        <span className={styles.footer_rights}>
          © 2024 всі права захищені.{' '}
        </span>
      </div>
    </>
  )
}

export default Footer
