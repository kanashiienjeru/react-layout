import styles from './Brands.module.css'
import brands from './brands_list'

const Brands = () => {
  return (
    <section className={styles.brands_section}>
      <span className={styles.anchor} id="brands_id"></span>
      <ul className={styles.brands_list}>
        {brands.map((item, index) => {
          return <li className={styles.brand_item} key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
}

export default Brands