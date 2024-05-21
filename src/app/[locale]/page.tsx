import AnswersTable from '@/components/AnswersTable';
import FoundWordsTable from '@/components/FoundWordsTable';
import HiveWrapper from '@/components/HiveWrapper';
import HowToPlay from '@/components/HowToPlay';
import {LocalSwitcher} from '@/components/LocalSwitcher';
import TimerAndScore from '@/components/TimerAndScore';
// import {promises as fs} from 'fs';
import fs from 'fs';
import {getLocale, getTranslations} from 'next-intl/server';
import path from 'path';

export default async function Home() {
  const t = await getTranslations('Home');
  const locale = await getLocale();
  const filePath = path.join(process.cwd(), `/src/mock/data-${locale}.json`);
  const file = fs.readFileSync(filePath, 'utf8');
  console.log(file);
  const data = JSON.parse(file).data;

  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedLetters = data[randomIndex];
  return (
    <>
      <HowToPlay t={t.raw('HowToPlay')} />
      <main className='mx-auto mt-10 lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[300px]'>
        <section className='flex items-center gap-10 '>
          <h1 className='font-bold text-3xl'>Spelling Bee</h1>
          <LocalSwitcher />
        </section>
        <section className='lg:p-16 md:p-10  pt-5'>
          <TimerAndScore t={t.raw('Score')} />
          <section className=' sm:flex  gap-4'>
            <HiveWrapper selectedLetters={selectedLetters} t={t.raw('Input')} />
            <FoundWordsTable t={t.raw('Table')} />
            <AnswersTable
              t={t.raw('Table')}
              answers={selectedLetters.answers}
            />
          </section>
        </section>
      </main>
    </>
  );
}
