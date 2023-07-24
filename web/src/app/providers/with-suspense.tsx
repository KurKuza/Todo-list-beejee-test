import { Spin } from 'antd'
import { Suspense } from 'react'

export const withSuspense = (component: () => React.ReactNode) => () =>
  <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>{component()}</Suspense>
