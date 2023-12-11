import bookopen from '../assets/img/BookOpen.png';
import style from './nothingFound.module.scss';

export const NothingFound = () => {
  return (
    <div className={style.content}>
      <img src={bookopen} alt="book picture" className={style.img} />
      <p className={style.text}>Nothing was found :\</p>
    </div>
  );
};
