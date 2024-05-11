import {LocalSwitcher} from '@/components/LocalSwitcher';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <h1>{t('title')}</h1>
      <LocalSwitcher />
    </main>
  );
}
