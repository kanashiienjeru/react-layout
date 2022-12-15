import styles from './Consultants.module.css'
import consultants from './consultants_list.js'

const Consultants = () => {
  return(
    <section className={styles.consultants_section}>
      <div className={styles.container}>
        <span className={styles.anchor} id="consultants_id" ></span>
        <h2 className={styles.title}>Наши консультанты</h2>
        <div className={styles.cards}>
          <ul className={styles.cards_list}>
            {
              consultants.map((item, index) => {
                return(
                  <li key={index} className={styles.cards_item}>
                    <img src={item.img} alt="" />
                    <div className={styles.text_content}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.desc}>{item.desc}</p>
                      <button className={styles.button}>НАПИСАТЬ</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Consultants