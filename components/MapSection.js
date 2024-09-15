import styles from '../app/page.module.css'
import { arrowRight } from './icons'

const MapSection = ({ handleOpenRequest }) => {
  return (
    <div className={styles.service_section_cont}>
      <div className={styles.service_left}>
        <h2 className={styles.title_service}>
          <span className={styles.blue_font}>Завітайте</span> <br /> до нас
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.0358685108357!2d24.05937603075281!3d49.88802600742889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7a770f3bc51%3A0x9ae7b09da0b17c24!2sBESHCARS!5e0!3m2!1sen!2sua!4v1725108678703!5m2!1sen!2sua"
          width="100%"
          height="60%"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={styles.map_box}
        ></iframe>
      </div>
      <div className={styles.service_right}>
        <h3 className={styles.service_title_descr}>Наші контакти</h3>
        <p className={styles.service_description}>
          Ми завжди раді вітати Вас у нашому автосалоні! У нас Ви маєте чудову
          можливість насолодитися ароматною кавою, спробувати наші автомобілі
          під час тест-драйву та отримати кваліфіковану консультацію від наших
          досвідчених менеджерів. Наша команда готова допомогти Вам з вибором та
          відповісти на всі Ваші питання, забезпечивши комфортні умови для
          приємного та інформативного візиту.
        </p>
        <button
          className={styles.leave_request_btn}
          onClick={() => handleOpenRequest('Головна сторінка (контакти)')}
        >
          Залишити заявку
        </button>
        <div className={styles.prons_cont}>
          <div className={styles.pron}>
            {arrowRight}
            Малехів, вул. Жовківська 10А
          </div>
          <div className={styles.pron}>
            {arrowRight}
            (093) 739 66 20
          </div>
          <div className={styles.pron}>
            {arrowRight}
            beshcars@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapSection
