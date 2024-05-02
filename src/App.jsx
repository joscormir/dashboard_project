import { Router } from './Router'
import { WidgetConxtextProvider } from './components/widget/WidgetContextProvider'

function App() {
  return (
    <WidgetConxtextProvider>
      <Router />
    </WidgetConxtextProvider>
  )
}

export default App
