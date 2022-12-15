import styles from './Information.module.css'
import information from './information_list'

const Information = () => {
  return (
    <section className={styles.information_section}>
      <div className={styles.container}>
        <span className={styles.anchor} id="information_id"></span>
        <h2 className={styles.title}>Полезная информация</h2>
        <ul className={styles.cards_list}>
          {
            information.map((item, index) => {
              return( 
                <li key={index} className={styles.cards_item}>
                  <img src={item.img} alt="" />
                  <p>{item.textContent}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Information