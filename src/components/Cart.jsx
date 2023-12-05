import { ButtonHold } from './ButtonHold';
import style from './cart.module.scss';
import cover from '../assets/img/coverbook.jpg';

export const Cart = () => {
  return (
    <div className={style.cart}>
      <h5 className={style.title}>
        Your Cart <span className={style.totalCount}>(01) items</span>
      </h5>
      <div className={style.content}>
        <ul className={`${style.list} listReset`}>
          <li className={style.item}>
            <div className={style.img}>
              <a href="">
                <img src={cover} alt="book cover" className={style.cover} />
              </a>
            </div>
            <div className={style.info}>
              <p className={style.author}>Author name</p>
              <p className={style.name}> book name </p>
              <button className={`${style.btnDelete} btnReset`}>
                <svg
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="TRASH">
                    <path
                      id="Vector"
                      d="M25.8835 7H5.36328"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12.8251 13V21"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M18.4216 13V21"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M24.018 7V26C24.018 26.2652 23.9197 26.5196 23.7448 26.7071C23.5699 26.8946 23.3326 27 23.0853 27H8.1615C7.91412 27 7.67687 26.8946 7.50195 26.7071C7.32703 26.5196 7.22876 26.2652 7.22876 26V7"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_5"
                      d="M20.287 7V5C20.287 4.46957 20.0905 3.96086 19.7406 3.58579C19.3908 3.21071 18.9163 3 18.4215 3H12.8251C12.3304 3 11.8559 3.21071 11.506 3.58579C11.1562 3.96086 10.9597 4.46957 10.9597 5V7"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.img}>
              <a href="">
                <img src={cover} alt="book cover" className={style.cover} />
              </a>
            </div>
            <div className={style.info}>
              <p className={style.author}>Author name</p>
              <p className={style.name}> book name</p>
              <button className={`${style.btnDelete} btnReset`}>
                <svg
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="TRASH">
                    <path
                      id="Vector"
                      d="M25.8835 7H5.36328"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12.8251 13V21"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M18.4216 13V21"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M24.018 7V26C24.018 26.2652 23.9197 26.5196 23.7448 26.7071C23.5699 26.8946 23.3326 27 23.0853 27H8.1615C7.91412 27 7.67687 26.8946 7.50195 26.7071C7.32703 26.5196 7.22876 26.2652 7.22876 26V7"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_5"
                      d="M20.287 7V5C20.287 4.46957 20.0905 3.96086 19.7406 3.58579C19.3908 3.21071 18.9163 3 18.4215 3H12.8251C12.3304 3 11.8559 3.21071 11.506 3.58579C11.1562 3.96086 10.9597 4.46957 10.9597 5V7"
                      stroke="#676767"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </li>
        </ul>
        <ButtonHold>Place hold(s)</ButtonHold>
      </div>
    </div>
  );
};
