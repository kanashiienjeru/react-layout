import styles from './Catalog.module.css'
import categories from './categories'
import products from './products'

const Catalog = () => {
  console.log(categories)
  return (
    <section className={styles.catalog_section}>
      <span className={styles.anchor} id="catalog_id"></span>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Каталог</h2>
          <ul className={styles.category_list}>
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <button className={styles.category_button}>
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.cards}>
          <ul className={styles.cards_list}>
            {
              products.map((item,index) => {
                return(
                  <li key={index} className={styles.cards_item}>
                    <p className={styles.category}>{item.category}</p>
                    <img src={item.photo} alt="" />
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>{item.price}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Catalog