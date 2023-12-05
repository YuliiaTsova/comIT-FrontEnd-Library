import { Categories } from './Categories';
import { Item } from './Item';
import style from './categoriesHome.module.scss';

export const CategoriesHome = () => {
  return (
    <>
      <section className={style.categoriesHome}>
        {/* <img src="" alt="folder" className={style.folder} aria-hidden="true" /> */}
        <h2 className={`${style.title} heading2`}>categories</h2>
        {/* <ul className={`${style.list} listReset`}>
          <li className={style.item}>
            <a href="" className={style.link}>
              Romance
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Adventure
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Detective
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Fantasy
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Classic
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Horror
            </a>
          </li>
        </ul> */}
        <Categories />
      </section>
      <section className={style.content}>
        <h2 className={`${style.title} heading2`}>romance</h2>
        <ul className={`${style.listItems} listReset`}>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
        </ul>
        <div className={`${style.morePosition} viewMore`}>view more</div>
      </section>
    </>
  );
};
