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
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Tiktok</span>
          </div>
          <div className={styles.footer_row}>
            <h4>Є ще запитання?</h4>
            <span onClick={() => handleOpenRequest('Запитання')}>
              Залишити заявку
            </span>
          </div>
          <div className={styles.footer_row}>
            <img className={styles.logo_footer} src="/logo_new.svg" />
          </div>
        </div>
      </div>
      <div className={styles.footer_cont_mobile}>
        {' '}
        <img className={styles.logo_footer} src="/logo_new.svg" />
      </div>
    </>
  )
}

export default Footer
