import style from './userInfo.module.scss';

export const UserInfo = () => {
  return (
    <section className={style.info}>
      <p className={style.title}>
        <strong>User name</strong>
      </p>
      <div className={style.pesonalData}>
        <p>Street:</p>
        <p>123 Queen St </p>
        <p>City: </p>
        <p>Fredericton</p>
        <p>Province</p>
        <p>NB</p>
        <p>Postal code</p>
        <p>1A0 1A0</p>
        <p>Phone</p>
        <p>(000) 00 00000</p>
      </div>
    </section>
  );
};
