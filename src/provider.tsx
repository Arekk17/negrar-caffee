'use client'

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

export function ReduxProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>
}
