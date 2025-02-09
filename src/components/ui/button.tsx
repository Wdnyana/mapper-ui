import type { ButtonTypes } from '@/types/types-components'
import { cn } from '@/utils/cn'

export function Button({ className, children }: ButtonTypes) {
  return (
    <button
      className={cn(
        'bg-primary font-lato my-2 p-2 font-normal tracking-widest shadow-sm',
        className,
      )}
    >
      {children}
    </button>
  )
}
