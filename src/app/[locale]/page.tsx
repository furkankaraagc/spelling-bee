import HiveWrapper from '@/components/HiveWrapper';
import Wrapper from '@/components/Wrapper';
import {promises as fs} from 'fs';
import {getLocale, getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');
  const locale = await getLocale();
  const file = await fs.readFile(
    process.cwd() + `/src/mock/data-${locale}.json`,
    'utf8'
  );
  const data = JSON.parse(file).data;
  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedLetters = data[randomIndex];
  return (
    <main>
      <Wrapper t={t.raw('HowToPlay')} />
      <HiveWrapper selectedLetters={selectedLetters} />

      {/* <h1>{t('title')}</h1> */}
    </main>
  );
}
