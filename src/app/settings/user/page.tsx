import { getUserInfo } from '@/app/lib/settings';

export default async function User() {
  const { name, email, age } = await getUserInfo();
  return (
    <div>
      <h1>Settings Page</h1>
      <div>
        <p>name: {name}</p>
      </div>
      <div>
        <p>email: {email}</p>
      </div>
      <div>
        <p>age: {age}</p>
      </div>
    </div>
  );
}
