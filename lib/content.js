import styles from '../app/page.module.css'

export const services = {
  sales: {
    id: 'sale',
    ukrName: 'Викуп',
    title: () => {
      return (
        <>
          <span className={styles.blue_font}>Викупимо</span> <br /> Ваше авто
          <br /> швидко та зручно
        </>
      )
    },
    titleText: () => {
      return (
        <div className={styles.title_service_mobile}>
          <span className={styles.blue_font}>Викупимо</span>
          <br /> Ваше авто <br />
          швидко та зручно
        </div>
      )
    },
    titleDescription: 'Для кого ця послуга?',
    description:
      'Дана послуга буде цікавою для тих клієнтів, які не мають часу та бажання щоб займатись продажем свого авто. Тут ви зможете отримати максимально швидку оцінку та розрахунок за ваш автомобіль. Також ми надаємо супровід в сервісному центрі при його продажі. Заощаджуйте свій час та отримуйте максимальну вигідну пропозицію за ваше авто. З нами вигідно, швидко, зручно та просто!',
    prons: ['10 років досвіду', 'Перевірені авто', 'Власний автомайданчик'],
    image: '/calculator.jpg',
    revers: false,
  },
  select: {
    id: 'select',
    ukrName: 'Підбір',
    title: () => {
      return (
        <>
          <span className={styles.blue_font}>Підберемо</span> <br />
          найкраще авто
          <br /> для Вас
        </>
      )
    },
    titleText: () => {
      return (
        <>
          <span className={styles.blue_font}>Підберемо</span> <br /> найкраще
          авто
          <br /> для Вас
        </>
      )
    },
    titleDescription: 'Що таке підбір?',
    description:
      'Купівля авто завжди була складним та затратним по часу та фінансах процесом. В результаті часто не дослідивши добре свій майбутній вибір ви стикались з обманом з боку продавця. З послугою підбору авто під ключ ці всі процеси ми беремо на себе. Більше 10 років досвіду , а також професійні експерти по всій Україні. Супровід експертом при перевірці авто на профільному СТО (при побажанні на офіційному дилері). Можливість доставки авто по Україні та за її межами. З нами вигідно, швидко, зручно та просто!',
    prons: ['Вигідно', 'Зручно', 'Швидко'],
    image:
      'https://s3-alpha-sig.figma.com/img/bd6b/5902/82da701484556248a9ed6fa0416daa57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxF1WyKv6E6kWqcShabjUJvcpSs4O10T2iQsdVcG1DDBnZKSruKEpW3enqvaOZ-7hVIt18dlln24-TEk6Du8t9~w56i6kGZQuDTJ5b51ME0j29sPjjUdxa-7hbnxQU0e7JHSYgAWoJc3P5tAgq5OOF5kN1EA~Zj7X3yBT3YNCQipq18BeCVpXGMfTd4szVoqC3AcMmCShZ7Es7vjBSA26AMSl0Maw86AoolH4Ifse8gamcYG5SKiEK4rqM-g3EiBTvGCZhVP5S~n8RsC8~ECFORpmvlEbgFrBH0en81KAEQhO-Z9BY8sjzJUjbTBAKufqA0YGdXrLWey2RhNxcLLdA__',
    revers: true,
  },
  comision: {
    id: 'comision',
    ukrName: 'Комісія',
    title: () => {
      return (
        <>
          <span className={styles.blue_font}>Продамо</span> <br /> Ваше авто
          <br /> без зайвих турбот
        </>
      )
    },
    titleText: () => {
      return (
        <>
          <span className={styles.blue_font}>Продамо</span>
          <br /> Ваше авто
          <br /> без зайвих турбот
        </>
      )
    },
    titleDescription: 'Як це відбувається?',
    description:
      'Допоможемо на всіх етапах продажу вашого авто. Визначимо реальну вартість вашого автомобіля. Підкажемо та при потребі організуємо передпродажну підготовку. Розмістимо та прорекламуємо на сайтах з продажу авто , а також в соц мережах, що значно вплине на швидкість продажу. Наявність власного майданчика в перспективному місці. Допомога при перереєстрації в Сервісному центрі. З нами вигідно, швидко, зручно та просто!',
    prons: ['Підготуємо', 'Продамо', 'Оформимо'],
    image: '/sale.jpg',
    revers: false,
  },
  trade: {
    id: 'trade',
    ukrName: 'Обмін',
    title: () => {
      return (
        <>
          <span className={styles.blue_font}>Обмін</span> <br /> TRADE-IN
        </>
      )
    },
    titleText: () => {
      return (
        <>
          <span className={styles.blue_font}>Обмін</span> TRADE-IN
        </>
      )
    },
    titleDescription: 'Як це працює?',
    description:
      'З нами ви з легкістю зможете швидко обміняти свій автомобіль на будь який доступний в нас на продажі. Даємо адекватну оцінку вашого авто. Можливість обміну як на дорожче так і на дешевше авто. З нами вигідно, швидко, зручно та просто!',
    prons: ['Обмін за 1 день', 'Адекватна оцінка', 'Ваша або наша доплата'],
    image: '/trade_in.jpg',
    revers: true,
  },
}
