/* Стили */
import styles from './Advantages.module.css'
/* Картинки */
import arrow from './img/arrow.svg'
/* Данные */
import advantagesList from './advantages_list'
const Advantages = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.advantages}>
          <span className={styles.anchor} id="advantages_id"></span>
          <h2 className={styles.title}>Наши преимущества</h2>
          <div className={styles.arrow_buttons}>
            <button>
              <img className={styles.arrow_left} src={arrow} alt="" />
            </button>
            <button>
              <img className={styles.arrow_right} src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div>
          <ul className={styles.advantages_list}>   
            {advantagesList.map((element, index) => (
              <li className={styles.advantages_item} key={index}>
                <img src={element.img} alt="" />
                <p>{element.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages