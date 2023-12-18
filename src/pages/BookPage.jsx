import { BookDetail } from '../components/BookDetail';
import { useParams } from 'react-router-dom';
import { Trand } from '../components/Trand';

export const BookPage = () => {
  return (
    <>
      <BookDetail />
      <Trand />
    </>
  );
};
