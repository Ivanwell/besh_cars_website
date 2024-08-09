'use client'

import styles from '../app/page.module.css'
import { useState } from 'react'
import axios from 'axios'
import { close } from './icons'

const RequestForm = ({ id, handleCloseRequest }) => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    comment: '',
  })

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFormChange = e => {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const options = {
      method: 'POST',
      url: `/api/send_message`,
      data: {
        text: `<b>Новий запит від клієнта:</b>\nІм'я : ${formData.name}\nНомер телефону : ${formData.phone}\nКоментар : ${formData.comment}\nПослуга : ${id}`,
      },
    }

    return axios
      .request(options)
      .then(response => {
        setLoading(false)
        setResult('ok')
        setFormData({ phone: '', name: '', comment: '' })
        return response.data
      })
      .catch(error => {
        setResult('error')
        setLoading(false)
      })
  }

  return (
    <form className={styles.dialog} onSubmit={handleSubmit}>
      <div className={styles.close_cont} onClick={handleCloseRequest}>
        {close}
      </div>
      <img className={styles.logo_form} src="/Logo_Beshcars_color.svg" />
      <div className={styles.label_and_input_box}>
        <label htmlFor="name">Ваше ім'я</label>
        <input
          className={styles.input_form}
          required
          minLength={3}
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          autoComplete="off"
        />
      </div>
      <div className={styles.label_and_input_box}>
        <label htmlFor="phone">Ваш номер телефону</label>
        <input
          required
          minLength={10}
          className={styles.input_form}
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleFormChange}
          autoComplete="off"
        />
      </div>
      <div className={styles.label_and_input_box}>
        <label htmlFor="comment">Коментар (необов'язково)</label>
        <textarea
          name="comment"
          className={styles.text_area_form}
          value={formData.comment}
          onChange={handleFormChange}
        />
      </div>

      <button className={styles.send_btn} type="submit">
        {loading ? <span className={styles.loader}></span> : 'Надіслати'}
      </button>
      {result === 'ok' ? (
        <div className={styles.result_tittle}>
          Запит успішно створений. Менеджер зв'яжеться з Вами найближчим часом
        </div>
      ) : result === 'error' ? (
        <div className={styles.result_error_tittle}>
          Упс.. Помилка... Спробуйте будь ласка ще раз
        </div>
      ) : null}
    </form>
  )
}

export default RequestForm
