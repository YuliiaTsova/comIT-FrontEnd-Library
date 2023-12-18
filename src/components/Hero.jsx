import backgroundimg from '../assets/img/background-img.jpg';
import { Search } from './Search';
import book from '../assets/img/BookOpen.png';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero} aria-label="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>What book are you looking for?</h1>
        <p className={styles.subTitle}>Explore our catalog and find your next read.</p>
        <Search />
        <div className={styles.bottom}>
          <img src={book} alt="book img" aria-hidden className={styles.bookImg} />
        </div>
      </div>
      <div className={styles.picture}>
        <img src={backgroundimg} alt="background img" className={styles.contentImg} />
        <div className={styles.contentImgBg}></div>
      </div>
    </section>
  );
};
