import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>
            В нашем интернет-магазине представлен большой выбор гироскутеров, сигвеев и электросамокатов от известных мировых производителей.
            </p>
            <p>
            Все товары, представленные на нашем сайте, отобраны лучшими специалистами в этой области. 
            </p>
            <span className={styles.span}>
              Copyright © 2020 My-Giro
            </span>
          </div>
          <nav className={styles.footer_nav}>
            <div className={styles.company}>
              <h3 className={styles.nav_title}>КОМПАНИЯ MY-GIRO</h3>
              <ul className={styles.company_list}>
                <li>
                  <a href="#about_us_id">О нас</a>
                </li>
                <li>
                  <a href="#advantages_id">Наши преимущества</a>
                </li>
                <li>
                  <a href="#consultants_id">Наши консультанты</a>
                </li>
              </ul>
            </div>
            <div className={styles.to_buyers}>
              <h3 className={styles.nav_title}>ПОКУПАТЕЛЯМ</h3>
              <ul className={styles.to_buyers_list}>
                <li>
                  <a href="#catalog_id">Каталог</a>
                </li>
                <li>
                  <a href="#brands_id">Бренды</a>
                </li>
                <li>
                  <a href="#information_id">Полезная информация</a>
                </li>
              </ul>
            </div>
            <div className={styles.help}>
              <h3 className={styles.nav_title}>ПОМОЩЬ</h3>
              <ul className={styles.help_list}>
                <li>
                  <a href="">Как оформить заказ</a>
                </li>
                <li>
                  <a href="">Способы оплаты</a>
                </li>
                <li>
                  <a href="">Обмен и возврат товара</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer