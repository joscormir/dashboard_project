import { Router } from './Router'
import { WidgetConxtextProvider } from './components/widget/WidgetContextProvider'
import { LocalStorageRepositoryWidgetRepository } from './infrastructure/LocalStorageRepositoryWidgetRepository'

const repository = new LocalStorageRepositoryWidgetRepository()
function App() {
  return (
    
    <WidgetConxtextProvider repository={repository}>
      <Router />
    </WidgetConxtextProvider>
  )
}

export default App
