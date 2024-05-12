import Wrapper from '@/components/Wrapper';
import {promises as fs} from 'fs';

export default async function Home() {
  // const t = useTranslations('Home');
  // const [isGameStarted, setIsGameStarted] = useState(false);
  const file = await fs.readFile(process.cwd() + '/src/mock/data.json', 'utf8');
  const data = JSON.parse(file).data;
  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedLetters = data[randomIndex];

  return (
    <main>
      <Wrapper />
      {/* <h1>{t('title')}</h1> */}
    </main>
  );
}
