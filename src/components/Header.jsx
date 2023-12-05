import styles from './header.module.scss';
import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.svg';
import bookmark from '../assets/img/bookmark.svg';
import cart from '../assets/img/cart.svg';
import { Cart } from './Cart';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <img src={logo} alt="" className={styles.headerImg} />
            <a href="#" className={styles.headerTitle}>
              my library
            </a>
          </div>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} listReset`}>
              <li className={`${styles.navItem} `}>
                <a href="" className={styles.navLink}>
                  <img src={user} alt="profile" className={styles.navImgUser} />
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="" className={styles.navLink}>
                  <img src={bookmark} alt="bookmark" className={styles.navImgBookmark} />
                </a>
              </li>
              <li className={styles.navItem}>
                {/* <a href="" className={styles.navLink}> */}
                <button className={`${styles.buttonCart} btnReset`}>
                  <img src={cart} alt="cart" className={styles.navImgCart} />
                </button>
                {/* <div className={`${styles.cartOverlay} ${styles.active} `}>
                  <Cart />
                </div> */}
                {/* </a> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
