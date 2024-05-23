import Image from 'next/image';
import Header from './components/header/Header';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-t from-transparent lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/witcher.jpeg'
              alt='The Witcher'
              fill={true}
              priority={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            O mutante Geralt de Rívia é um caçador de monstros que luta para
            encontrar seu lugar num mundo onde as pessoas muitas vezes são mais
            perversas que as criaturas selvagens.
          </p>
          <div className='flex space-x-4'>
            <button className='cursos-pointer flex items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
              Play
            </button>

            <button className='cursos-pointer flex items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
              More info
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
