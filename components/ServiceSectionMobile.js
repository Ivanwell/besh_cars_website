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
      {titleRes}
      <img className={styles.image_mobile} src={image} />
    </div>
  )
}

export default ServiceSectionMobile
