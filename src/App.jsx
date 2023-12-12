import logo from './logo.svg';
// import './App.scss';
import styles from './App.module.scss';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { BookPage } from './pages/BookPage';
import { ResultPage } from './pages/ResultPage';

import { Route, Routes } from 'react-router-dom';
import { PersonalInfo } from './pages/PersonalInfo';
import { LayoutProfile } from './components/LayoutProfile';
import { HeaderProfile } from './components/HeaderProfile';
import { UserInfo } from './components/UserInfo';
import { Checkouts } from './components/Checkouts';
import { Holds } from './components/holds';

function App() {
  return (
    // <div className={styles.wrapper}>
    //   <Header />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* <Route path="/personal" element={<PersonalInfo />} /> */}
        <Route path="/profile" element={<LayoutProfile />}>
          <Route path="" element={<UserInfo />} />
          <Route path="/profile/check" element={<Checkouts />} />
          <Route path="/profile/holds" element={<Holds />} />
        </Route>
        {/* <Route path="cart" element={<CartPage />} />
      <Route path="pizza/:id" element={<PizzaDetailBlock />} />
      <Route path="*" element={<NotFoundPage />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
