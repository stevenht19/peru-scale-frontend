import React from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { Toaster } from 'react-hot-toast'

export default function ConfigProvider({ children }: {
  children: React.ReactNode
}) {
  return (
    <AntdConfigProvider
      theme={{
        token: {
          colorPrimary: '#6366f1',
        },
        components: {
          Button: {
            colorPrimary: '#6366f1 !important',
            colorPrimaryHover: '#818cf8 !important',
            colorBgContainerDisabled: '#818df81d !important',
          },
        },
      }}
    >
      {children}
      <Toaster />
    </AntdConfigProvider>
  )
}
