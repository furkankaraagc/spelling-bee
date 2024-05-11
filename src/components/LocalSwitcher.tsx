'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import {ChangeEvent, useTransition} from 'react';

export const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const localChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    startTransition(() => {
      router.replace(`${locale}`);
    });
  };

  return (
    <div>
      <select
        disabled={isPending}
        defaultValue={localActive}
        onChange={localChangeHandler}
      >
        <option value='en'>English</option>
        <option value='tr'>Turkish</option>
      </select>
    </div>
  );
};
