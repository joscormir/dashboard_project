import { createContext, useContext, useEffect, useState } from 'react'
import {DashboardConfig} from '../../dashboard_project_config'
//Initialize context
const WidgetConxtext = createContext({
  repositoryWidgets: [], //id, repositoryUrl fetching will be done with the dashboard factory
})

//Create the components  (wrapper)
export function WidgetConxtextProvider({ children }) {
    const [repositoryWidgets, setRepositoryWidget] = useState([])
    useEffect(()=>{
        setRepositoryWidget(DashboardConfig.widgets.map((widget)=>({
            id:widget.id, repositoryUrl:widget.repository_url
        })))
    },[])
  return (
    <WidgetConxtext.Provider value={{repositoryWidgets}}>
      {children}
    </WidgetConxtext.Provider>
  )
}

export const useWidgetContext = ()=>useContext(WidgetConxtext)