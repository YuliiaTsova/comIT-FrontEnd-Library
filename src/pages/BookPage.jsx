import { BookDetail } from '../components/BookDetail';
import { useParams } from 'react-router-dom';
import { Trand } from '../components/Trand';

export const BookPage = () => {
  //const { bookId } = useParams();
  //console.log(useParams());
  //console.log('aaaaaaaaaaa', bookId);

  return (
    <>
      <BookDetail />
      <Trand />
    </>
  );
};
