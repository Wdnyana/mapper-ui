import TodoLayout from '@/components/layout/todo-layout'
import Loading from '@/components/ui/loading'
import { lazy, Suspense } from 'react'

const TodoContent = lazy(() => import('../components/todo/todo-component'))

const TodoPage = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <TodoLayout>
          <TodoContent />
        </TodoLayout>
      </Suspense>
    ),
  },
]

export default TodoPage
