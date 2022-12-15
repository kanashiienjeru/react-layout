import styles from './Features.module.css'

const Features = () => {
  return (
    <section className={styles.features_section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Особенности гироскутеров</h2>
        <div className={styles.features}>
            <ul className={styles.minus_list}>
              <li className={styles.minus_item}>Трясёт</li>
              <li className={styles.minus_item}>Нет сиденья</li>
              <li className={styles.minus_item}>Только для одного</li>
            </ul>
            <ul className={styles.plus_list}>
              <li className={styles.plus_item}>Исключительная компактность</li>
              <li className={styles.plus_item}>Небольшой вес</li>
              <li className={styles.plus_item}>Экономичность</li>
            </ul>
            <ul className={styles.plus_list}>
              <li className={styles.plus_item}>Доступность</li>
              <li className={styles.plus_item}>Манёвренность</li>
              <li className={styles.plus_item}>Простой в освоении</li>
            </ul>
          </div>
        <p className={styles.text}>
          Этих преимуществ гироскутера вполне достаточно для того, чтобы в своей
          нише данный вид транспорта являлся одним из самых лучших вариантов!
        </p>
      </div>
    </section>
  );
}

export default Features