import styles from './header.module.scss';
import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.svg';
import bookmark from '../assets/img/bookmark.svg';
import cart from '../assets/img/cart.svg';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [activeCart, setActiveCart] = useState(false);
  console.log('activeCart', activeCart);

  const openCart = () => {};
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <img src={logo} alt="" className={styles.headerImg} />
            <Link to="/" className={styles.headerTitle}>
              {/* // <a href="#" className={styles.headerTitle}> */}
              my library
              {/* </a> */}
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} listReset`}>
              <li className={`${styles.navItem} `}>
                <Link to="/profile" className={styles.navLink}>
                  <img src={user} alt="profile" className={styles.navImgUser} />
                </Link>
              </li>
              <li className={styles.navItem}>
                <a href="" className={styles.navLink}>
                  <img src={bookmark} alt="bookmark" className={styles.navImgBookmark} />
                </a>
              </li>
              <li className={styles.navItem}>
                {/* <a href="" className={styles.navLink}> */}
                <button
                  className={`${styles.buttonCart} btnReset`}
                  onClick={() => setActiveCart(!activeCart)}
                >
                  <img src={cart} alt="cart" className={styles.navImgCart} />
                </button>
                {activeCart && (
                  <div className={`${styles.cartOverlay} ${styles.active} `}>
                    <Cart />
                  </div>
                )}

                {/* </a> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
