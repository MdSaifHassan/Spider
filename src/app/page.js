'use client';
import { store } from '@/utils/store';
import { Provider } from 'react-redux';
import HomePage from './Home/page';
import ModalExamplePage from "./Modal/page";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
      <ModalExamplePage/>

    </Provider>


  );
}
