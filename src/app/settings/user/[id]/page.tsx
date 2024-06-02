import { getUserInfoById } from '@/app/lib/settings';
import { notFound } from 'next/navigation';

export default async function User({ params }: { params: { id: string } }) {
  const { name, email, id } = await getUserInfoById(params.id);

  if (!id) notFound();

  return (
    <div>
      <h1>Settigs User: {id}</h1>
      <div>
        <p>name: {name}</p>
      </div>
      <div>
        <p>email: {email}</p>
      </div>
    </div>
  );
}
