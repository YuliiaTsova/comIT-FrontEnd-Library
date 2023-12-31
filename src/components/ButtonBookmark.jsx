import style from './buttonBookmark.module.scss';

export const ButtonBookmark = ({ bookmarkId }) => {
  return (
    <button
      className={`${style.btnBookamrk} btnReset ${bookmarkId ? style.bookmarkFill : ''}`}
      aria-label="bookmark button"
    >
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
  );
};
