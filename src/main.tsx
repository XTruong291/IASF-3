import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Đã bỏ đuôi .jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

// Đã thêm dấu ! sau ('root')
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)