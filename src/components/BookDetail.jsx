import { ButtonBookmark } from './ButtonBookmark';
import style from './bookDetail.module.scss';
import cover from '../assets/img/coverbook.jpg';
import { ButtonHold } from './ButtonHold';
import { Item } from './Item';

export const BookDetail = () => {
  return (
    <>
      <section className={style.bookDetail}>
        <div className={style.cover}>
          <img src={cover} alt="book cover" className={style.coverImg} />
          {/* <img src={props.imageUrl} alt="pizza" /> */}
        </div>
        <article className={style.detail}>
          <div className={style.header}>
            <h2 className="heading2">A hipótese do Amoddddddd ddddd dddddddr</h2>
            <div className={style.bookmarkPosition}>
              <ButtonBookmark />
            </div>
          </div>
          <p className={style.author}>Author : Author's name</p>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
            accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className={style.additionInfo}>
            <p className={style.language}>
              Language :<span className={style.text}>English</span>
            </p>
            <p className={style.copies}>
              Copies :<span className={style.text}>2</span>
            </p>
          </div>
          <div className={style.btnPosition}>
            <ButtonHold>Place hold</ButtonHold>
          </div>
        </article>
      </section>
      <section className={style.moreBooks}>
        <div className="viewMore">view more</div>
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
      </section>
    </>
  );
};
