import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <Image
      src='/witcher.jpeg'
      alt={`The Witcher-${index}`}
      fill={true}
      className='rounded border-gray-200'
    />
  );
};

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110
                  md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]'
          >
            <MovieCard key={index} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
