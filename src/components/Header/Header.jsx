import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.overheader}>
          <div className={styles.overheader_content}>
            <p>Мы всегда рады помочь по телефону +78005553535</p>
          </div>
          <div>
            <button className={styles.overheader_button}>
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h1>My-Giro</h1>
          </div>
          <nav>
            <ul className={styles.menu}>
              <li className={styles.menu_item}>
                <a href="">ПРЕИМУЩЕСТВА</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">О НАС</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">ОСОБЕННОСТИ</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">КАТАЛОГ</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">КОМАНДА</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">БРЕНДЫ</a>
              </li>
              <li className={styles.menu_item}>
                <a href="">ПОЛЕЗНОЕ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section className={styles.background}>
        <div className={styles.content}>
          <h1 className={styles.title}>My-Giro</h1>
          <p className={styles.text}>
            Крупнейший интернет-магазин гироскутеров, сигвеев и электросамокатов
            от известных мировых производителей
          </p>
          <button className={styles.button}>В КАТАЛОГ</button>
        </div>
      </section>
    </div>
  );
}
export default Header