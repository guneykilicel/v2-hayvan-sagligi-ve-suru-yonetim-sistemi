import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
  <SidebarProvider>
    <App />
  </SidebarProvider>
</ThemeProvider>
)
