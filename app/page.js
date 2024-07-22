'use client'

import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { check, rightDownArr } from '@/components/icons'

export default function Home() {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.page_container}>
        <section className={styles.welcome_section}>
          <div className={styles.welcome_wrap}>
            <div className={styles.left_part}>
              <div className={styles.main_title}>
                Лише <span className={styles.blue_font}>перевірені</span> та
                підготовлені авто
              </div>
              <span className={styles.choose_option}>
                Дізнайтесь більше про нас та наші послуги{rightDownArr}
              </span>
            </div>
            <div className={styles.right_part}>
              <div className={styles.car_background}></div>
              <div className={styles.approv_besh}>
                {check} Перевірено BESHCARS
              </div>
              <img className={styles.main_car} src="/g30.png" />
            </div>
          </div>

          <div className={styles.our_services}>
            <button className={styles.service_btn}>Наші авто</button>
            <button
              onClick={() => scrolltoHash('sale')}
              className={styles.service_btn}
            >
              Викуп авто
            </button>
            <button
              onClick={() => scrolltoHash('buy')}
              className={styles.service_btn}
            >
              Підбір авто
            </button>
            <button
              onClick={() => scrolltoHash('comision')}
              className={styles.service_btn}
            >
              Комісія
            </button>
            <button
              onClick={() => scrolltoHash('trade')}
              className={styles.service_btn}
            >
              Обмін Trade-in
            </button>
          </div>
        </section>
      </div>
      <div className={styles.devider_small} id="sale">
        <span className={styles._props_blue}>10 років досвіду</span>
        <div className={styles.devide_line_blue}></div>
        <span className={styles._props_blue}>Власний автомайданчик</span>
        <div className={styles.devide_line_blue}></div>
        <span className={styles._props_blue}>Перевірені авто</span>
      </div>
      <div className={styles.page_container}>
        <section className={styles.service_section}>
          <h2>Викупимо Ваше авто швидко та зручно</h2>
          <div className={styles.service_info}>
            <div className={styles.service_box}>
              <span className={styles.title_description}>
                Для кого ця послуга?
              </span>
              <div className={styles.service_description_cont}>
                Дана послуга буде цікавою для тих клієнтів, які не мають часу та
                бажання щоб займатись продажем свого авто. Тут ви зможете
                отримати максимально швидку оцінку та розрахунок за ваш
                автомобіль. Також ми надаємо супровід в сервісному центрі при
                його продажі. Заощаджуйте свій час та отримуйте максимальну
                вигідну пропозицію за ваше авто. З нами вигідно, швидко, зручно
                та просто!
              </div>
              <button className={styles.leave_req_btn}>Залишити заявку</button>
            </div>

            <div className={styles.image_container}>
              <img className={styles.service_image} src="/calculator.jpg" />
            </div>
          </div>
        </section>
      </div>

      <div className={styles.devider} id="buy">
        <span className={styles._props}>Вигідно</span>
        <div className={styles.devide_line}></div>
        <span className={styles._props}>Зручно</span>
        <div className={styles.devide_line}></div>
        <span className={styles._props}>Швидко</span>
      </div>
      <div className={styles.page_container}>
        <section className={styles.service_section}>
          <h2>Підберемо найкраще авто для Вас</h2>
          <div className={styles.service_info}>
            <div className={styles.service_box}>
              <span className={styles.title_description}>Що таке підбір?</span>
              <div className={styles.service_description_cont}>
                Купівля авто завжди була складним та затратним по часу та
                фінансах процесом. В результаті часто не дослідивши добре свій
                майбутній вибір ви стикались з обманом з боку продавця. З
                послугою підбору авто під ключ ці всі процеси ми беремо на себе.
                Більше 10 років досвіду , а також професійні експерти по всій
                Україні. Супровід експертом при перевірці авто на профільному
                СТО (при побажанні на офіційному дилері). Можливість доставки
                авто по Україні та за її межами. З нами вигідно, швидко, зручно
                та просто!
              </div>
              <button className={styles.leave_req_btn}>Залишити заявку</button>
            </div>

            <div className={styles.image_container}>
              <img className={styles.service_image} src="/pidbir.jpg" />
            </div>
          </div>
        </section>
      </div>
      <div className={styles.devider_small} id="comision">
        <span className={styles._props_blue}>Підготуємо</span>
        <div className={styles.devide_line_blue}></div>
        <span className={styles._props_blue}>Продамо</span>
        <div className={styles.devide_line_blue}></div>
        <span className={styles._props_blue}>Оформимо</span>
      </div>
      <div className={styles.page_container}>
        <section className={styles.service_section}>
          <h2>Продамо Ваше авто без зайвих турбот</h2>
          <div className={styles.service_info}>
            <div className={styles.service_box}>
              <span className={styles.title_description}>
                Як це відбувається?
              </span>
              <div className={styles.service_description_cont}>
                Допоможемо на всіх етапах продажу вашого авто. Визначимо реальну
                вартість вашого автомобіля. Підкажемо та при потребі організуємо
                передпродажну підготовку. Розмістимо та прорекламуємо на сайтах
                з продажу авто , а також в соц мережах, що значно вплине на
                швидкість продажу. Наявність власного майданчика в
                перспективному місці. Допомога при перереєстрації в Сервісному
                центрі. З нами вигідно, швидко, зручно та просто!
              </div>
              <button className={styles.leave_req_btn}>Залишити заявку</button>
            </div>

            <div className={styles.image_container}>
              <img className={styles.service_image} src="/sale.jpg" />
            </div>
          </div>
        </section>
      </div>
      <div className={styles.devider} id="trade">
        <span className={styles._props}>Обмін за 1 день</span>
        <div className={styles.devide_line}></div>
        <span className={styles._props}>Ваша або наша доплата</span>
        <div className={styles.devide_line}></div>
        <span className={styles._props}>Адекватна оцінка</span>
      </div>
      <div className={styles.page_container}>
        <section className={styles.service_section}>
          <h2>Обмін - TRADE-IN</h2>
          <div className={styles.service_info}>
            <div className={styles.service_box}>
              <span className={styles.title_description}>Як це працює?</span>
              <div className={styles.service_description_cont}>
                З нами ви з легкістю зможете швидко обміняти свій автомобіль на
                будь який доступний в нас на продажі. Даємо адекватну оцінку
                вашого авто. Можливість обміну як на дорожче так і на дешевше
                авто. З нами вигідно, швидко, зручно та просто!
              </div>
              <button className={styles.leave_req_btn}>Залишити заявку</button>
            </div>

            <div className={styles.image_container}>
              <img className={styles.service_image} src="/trade_in.jpg" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
