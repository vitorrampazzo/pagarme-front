import BuggyButton from '../components/BuggyButton';
import { getAppSettings } from '../lib/settings';

export default async function Page() {
  const { theme, language } = await getAppSettings();
  return (
    <div>
      <h1>Settings Page</h1>
      <div>
        <p>Theme: {theme}</p>
      </div>
      <div>
        <p>language: {language}</p>
        <BuggyButton />
      </div>
    </div>
  );
}
