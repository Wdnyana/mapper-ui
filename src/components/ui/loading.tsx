import { ButtonTypes } from '@/types/types-components'
import { cn } from '@/utils/cn'
import { Loader2 } from 'lucide-react'

export default function Loading({ className }: ButtonTypes) {
  return (
    <div className={cn('relative h-screen w-full', className)}>
      <div className="absolute z-10 flex h-full w-full items-center justify-center transition duration-75">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    </div>
  )
}
