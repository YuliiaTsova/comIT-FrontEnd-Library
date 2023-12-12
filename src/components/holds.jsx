import style from './holds.module.scss';

export const Holds = () => {
  return (
    <section className={style.info}>
      <div className={style.content}>
        <p className={style.item}>
          <strong>Items on hold:</strong>
          <span> 2</span>
        </p>

        <p className={style.item}>
          <strong>Ready for Pickup:</strong>
          <span> 2</span>
        </p>
      </div>
    </section>
  );
};
