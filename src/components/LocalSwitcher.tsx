'use client';

import {reset, setIsGameStarted} from '@/redux/features/hiveSlice';
import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import {ChangeEvent, useTransition} from 'react';
import {useDispatch} from 'react-redux';

export const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useDispatch();
  const localActive = useLocale();

  const localChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    dispatch(reset());
    dispatch(setIsGameStarted(false));

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
