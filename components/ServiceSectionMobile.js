import styles from '../app/page.module.css'
import { arrowRight } from './icons'

const ServiceSectionMobile = ({ service, handleOpenRequest }) => {
  const {
    image,
    titleDescription,
    description,
    titleText,
    id,
    prons,
    revers,
    ukrName,
  } = service
  const titleRes = titleText()
  return (
    <div className={styles.service_mobile_cont}>
      <div className={styles.title_service_direct}>{titleRes}</div>

      <img className={styles.image_mobile} src={image} />
      <div className={styles.prons_list}>
        {prons.map(pron => (
          <div className={styles.pron_mobile}>{pron}</div>
        ))}
      </div>
      <span className={styles.question_title}>{titleDescription}</span>
      <p className={styles.description_mobile}>{description}</p>
      <div className={styles.diveder_mobile}></div>
    </div>
  )
}

export default ServiceSectionMobile
