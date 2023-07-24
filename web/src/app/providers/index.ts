import compose from 'compose-function'
import { withQuery } from './with-query'
import { withSuspense } from './with-suspense'
import { withStore } from './with-store'

export const withProviders = compose(withQuery, withSuspense, withStore)
