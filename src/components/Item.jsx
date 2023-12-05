import style from './item.module.scss';
import cover from '../assets/img/coverbook.jpg';
import bookmark from '../assets/img/bookmark.svg';

export const Item = () => {
  return (
    <article className={style.item} aria-label="book item">
      {/* <Link to={`/pizza/${props.id}`}></Link> */}
      <img src={cover} alt="book cover" className={style.cover} />
      <button className={`${style.btnBookamrk} btnReset`} aria-label="bookmark button">
        {/* <img src={bookmark} alt="" className={style.bookmarkImg} /> */}
        <svg
          className={style.bookmarkImg}
          width="18"
          height="25"
          viewBox="0 0 18 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="BOOKMARK_SIMPLE">
            <path
              id="Vector"
              d="M17 24L9 19L1 24V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V24Z"
              stroke="#3D3C3C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      <button className={`${style.btnItem} btn`}>Place hold</button>
    </article>
  );
};
