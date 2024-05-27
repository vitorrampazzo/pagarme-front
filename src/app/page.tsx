import { Banner } from './components/Banner';
import { MovieRow } from './components/MovieRow';
import Header from './components/header/Header';

export default function Home() {
  return (
    <div className='relative pb-8'>
      <Header />
      <main className='relative overflow-y-scroll bg-gradient-to-b p-8 pb-20 scrollbar-hide lg:px-16'>
        <Banner />
        <MovieRow sectionTitle='Wow' />
        <MovieRow sectionTitle='See again' />
        <MovieRow sectionTitle='Trend' />
      </main>
    </div>
  );
}
