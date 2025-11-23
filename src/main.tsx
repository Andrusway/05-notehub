import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import 'modern-normalize/modern-normalize.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
    <App />
  </StrictMode>,
  </QueryClientProvider>
)
