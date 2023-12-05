import { Item } from './Item';
import style from './trand.module.scss';

export const Trand = () => {
  return (
    <section className={style.trand} aria-label="tranding book">
      <h2 className={`${style.title} heading2`}>Tranding books</h2>
      <div className={style.content}>
        <div className={`${style.more} viewMore`}>view more</div>
        <ul className={`${style.list} listReset`}>
          <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li>
        </ul>
      </div>
    </section>
  );
};
