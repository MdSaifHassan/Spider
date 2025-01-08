'use client';
import { store } from '@/utils/store';
import { Provider } from 'react-redux';
import HomePage from './Home/page';

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
