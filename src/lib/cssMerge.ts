/**
 * className css Merge Util
 * ex) className={cn('bg-red-100', 'color-red-100')}
 * @param inputs ClassValue Array
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
