import style from './checkouts.module.scss';

export const Checkouts = () => {
  return (
    <section className={style.info}>
      <p className={style.title}>
        <strong>
          Total items chekouts: <span> 2</span>
        </strong>
      </p>
      <div className={style.content}>
        <div className={style.heading}>Cover</div>
        <div className={style.heading}>Title/Author</div>
        <div className={style.heading}>Due Date</div>
        <div>jjnnj</div>
        <div>King</div>
        <div>12/12/2023</div>
        <div>jjnnj</div>
        <div>King</div>
        <div>12/12/2023</div>
      </div>
    </section>
  );
};
