import logo from './logo.svg';
// import './App.scss';
import styles from './App.module.scss';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className={styles.wrapper}>
    //   <Header />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />

        {/* <Route path="cart" element={<CartPage />} />
      <Route path="pizza/:id" element={<PizzaDetailBlock />} />
      <Route path="*" element={<NotFoundPage />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
