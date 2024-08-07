import styles from '../app/page.module.css'
import { arrowRight } from './icons'

const ServiceSection = ({ service, handleOpenRequest }) => {
  const {
    image,
    titleDescription,
    description,
    title,
    id,
    prons,
    revers,
    ukrName,
  } = service
  const titleRes = title()
  return (
    <div
      className={
        revers
          ? styles.service_section_cont_reverse
          : styles.service_section_cont
      }
      id={id}
    >
      <div className={styles.service_left}>
        <h2 className={styles.title_service}>{titleRes}</h2>
        <img src={image} alt="calculator" className={styles.image_service} />
      </div>
      <div className={styles.service_right}>
        <h3 className={styles.service_title_descr}>{titleDescription}</h3>
        <p className={styles.service_description}>{description}</p>
        <button
          className={styles.leave_request_btn}
          onClick={() => handleOpenRequest(ukrName)}
        >
          Залишити заявку
        </button>
        <div className={styles.prons_cont}>
          {prons.map(pron => {
            return (
              <div className={styles.pron}>
                {arrowRight}
                {pron}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
