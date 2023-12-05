import { Search } from '../components/Search';
import { Select } from '../components/Select';
import style from './resultPage.module.scss';
import { Item } from '../components/Item';

export const ResultPage = () => {
  return (
    <>
      <div className={style.searchPosition}>
        <Search />
      </div>
      <Select />
      <div className={style.result}>
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
      </div>
    </>
  );
};
