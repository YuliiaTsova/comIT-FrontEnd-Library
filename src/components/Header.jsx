import styles from './header.module.scss';
import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.svg';
import bookmark from '../assets/img/bookmark.svg';
import cart from '../assets/img/cart.svg';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [activeCart, setActiveCart] = useState(false);
  const totalCount = useSelector((state) => state.cart.totalCount);

  //close pop up if click is outside+
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(cartRef.current)) {
        setActiveCart(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

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
          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <ul className={`${styles.navList} listReset`}>
                <li className={`${styles.navItem} `}>
                  <Link to="/profile/info" className={styles.navLink}>
                    <img src={user} alt="profile" className={styles.navImgUser} />
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/bookmarks" className={styles.navLink}>
                    <img
                      src={bookmark}
                      alt="bookmark"
                      className={styles.navImgBookmark}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={`${styles.buttonCart} btnReset`} ref={cartRef}>
              <img
                src={cart}
                alt="cart"
                className={styles.navImgCart}
                onClick={() => setActiveCart(!activeCart)}
              />
              <div className={styles.totalCount}>{totalCount}</div>
              {/* <div className={`${styles.cartOverlay} ${activeCart && styles.active} `}> */}
              <div className={`${styles.cartContent} ${activeCart && styles.active}`}>
                <Cart setOpen={setActiveCart} />
                {/* </div> */}
              </div>
            </div>
            {/* {activeCart && (
              <div className={`${styles.cartOverlay} ${styles.active} `}>
                <Cart />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
};
