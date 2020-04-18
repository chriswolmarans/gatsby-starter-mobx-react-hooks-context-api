import React from 'react';
import StoreProvider from './RootLayout'
// export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
// export { StoreProvider } from './RootLayout'

export const wrapRootElement = StoreProvider
