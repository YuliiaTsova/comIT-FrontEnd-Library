import style from './select.module.scss';

export const Select = () => {
  return (
    <div className={style.selects}>
      <div className={style.categories}>
        <div className={style.title}>Results "name "</div>
        <div className={style.parameters}>
          <select name="" id="" className={style.selectCategories}>
            <option value="romance" className={style.option} selected disabled>
              Categories
            </option>
            <option value="adventure" className={style.option}>
              Adventure
            </option>
            <option value="detective" className={style.option}>
              Detective
            </option>
          </select>
          <select name="" id="" className={style.filter}>
            <option value="romance" className={style.option} selected disabled>
              Filter
            </option>
            <option value="adventure" className={style.option}>
              Most popular
            </option>
            <option value="detective" className={style.option}>
              New
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
