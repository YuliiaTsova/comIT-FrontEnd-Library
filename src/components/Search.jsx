import style from './search.module.scss';

export const Search = () => {
  return (
    <form className={style.searchBar} /*onSubmit={}*/>
      <label className={style.label}>
        <input
          type="search"
          className={style.input}
          placeholder="Search for a book"
          //value={userInput}
          // onChange={onChange}
        />
        <button className={`${style.button} btnReset`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="MAGNIFYING_GLASS">
              <path
                id="Vector"
                d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z"
                stroke="#3D3C3C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.4437 14.4437L19 19"
                stroke="#3D3C3C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </label>
    </form>
  );
};
