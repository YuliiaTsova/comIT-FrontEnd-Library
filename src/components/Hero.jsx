import backgroundimg from '../assets/img/background-img.jpg';
import { Search } from './Search';
//import explore from '../assets/img/explore.svg';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero} aria-label="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>What book are you looking for?</h1>
        <p className={styles.subTitle}>Explore our catalog and find your next read.</p>
        <Search />
        <div className={styles.bottom}>
          <button className={styles.btnExplore} aria-label="explore boks">
            Explore
            {/* <img src={explore} alt="explore" className={styles.exploreImg} /> */}
          </button>
          <p className={styles.line}></p>
        </div>
      </div>
      <div className={styles.picture}>
        <img src={backgroundimg} alt="background img" className={styles.contentImg} />
        <div className={styles.contentImgBg}></div>
      </div>
    </section>
  );
};
