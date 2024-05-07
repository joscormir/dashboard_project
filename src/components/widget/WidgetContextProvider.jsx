import { createContext, useContext, useEffect, useState } from 'react'
import { DashboardConfig } from '../../dashboard_project_config'
//Initialize context
const WidgetConxtext = createContext({
  repositoryWidgets: [], //id, repositoryUrl fetching will be done with the dashboard factory
})

//Create the components  (wrapper)
export function WidgetConxtextProvider({ children, repository }) {
  const [repositoryWidgets, setRepositoryWidgets] = useState([])
  
  useEffect(() => {
    repository.search().then((repositoryWidgets) => {
      if (repositoryWidgets.length === 0) {
        setRepositoryWidgets(
          DashboardConfig.widgets.map((widget) => ({
            id: widget.id,
            repositoryUrl: widget.repository_url,
          })),
        )
        return
      }
      setRepositoryWidgets(repositoryWidgets)
    })
    
  }, [repository])
  useEffect(() => {
    const reloadRepositoryWidgets = () => {
      repository.search().then(setRepositoryWidgets)
    }
    
    document.addEventListener('repositoryWidgetAdded', reloadRepositoryWidgets)
    return () =>
      document.removeEventListener('repositoryWidgetAdded',reloadRepositoryWidgets)
  }, [repository])
  return (
    <WidgetConxtext.Provider value={{ repositoryWidgets }}>
      {children}
    </WidgetConxtext.Provider>
  )
}
//custom hook for the wrapper
export const useWidgetContext = () => useContext(WidgetConxtext)
