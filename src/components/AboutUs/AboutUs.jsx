
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <span className={styles.anchor} id="about_us_id"></span>
      <div className={styles.container}>
        <div className={styles.text_content}>
          <h2 className={styles.title}>О нас</h2>
          <p>
            В нашем интернет-магазине представлен большой выбор гироскутеров,
            сигвеев и электросамокатов от известных мировых производителей.
          </p>
          <p>
            Все товары, представленные на нашем сайте, отобраны лучшими
            специалистами в этой области. Купить гироскутер, электросамокат или
            сигвей недорого, Вы можете в нашем интернет-магазине в любое время,
            когда Вам удобно. Доставка заказов осуществляется бесплатно, в любую
            точку России. Так же, вы можете заказать гироскутер, сигвей или
            электросамокат по низкой цене, позвонив нам. Или сделайте заказ,
            пообщавшись с нашим онлайн-консультантом консультантам. Продажа
            гироскутеров, электросамокатов и сигвеев, осуществляется напрямую,
            от производителей. Поэтому, в нашем интернет-магазине самые лучшие
            цены.
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p>Подпишитесь на нашу рассылку и оставайтесь в курсе событий</p>
            <form action="#">
              <input placeholder="Имя" type="text" name="name" />
              <input placeholder="Email" type="email" name="email" />
              <button>ПОДПИСАТЬСЯ</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs