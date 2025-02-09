import { Header } from '@/components/layout/header'
import { SideBar } from '@/components/layout/side-bar'
import { TypesLayout } from '@/types/types-layout'

export default function TodoLayout({ children }: TypesLayout) {
  return (
    <div className="responsive-container grid h-screen grid-cols-4 grid-rows-5 gap-4 py-20 md:grid-rows-4">
      <div className="col-span-4 md:col-span-1 md:row-span-4">
        <div className="h-full w-full">
          <SideBar />
        </div>
      </div>

      <div className="order-first col-span-4 md:order-none md:col-span-3">
        <div className="h-full w-full">
          <Header />
        </div>
      </div>

      <div className="scroll-bar col-span-4 row-span-3 overflow-y-auto md:col-span-3 md:row-span-3">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  )
}
