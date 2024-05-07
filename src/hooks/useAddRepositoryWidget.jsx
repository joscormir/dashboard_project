import { RepositoryAlreadyExistsError } from "../infrastructure/RepositoryAlreadyExists"

export function useAddRepositoryWidget(repositoryToAdd){
     async function save(widget){
      const widgetRepositories = await repositoryToAdd.search()
      if (widgetRepositories.some((w)=>w.repositoryUrl === widget.repositoryUrl)){
         return new RepositoryAlreadyExistsError(widget.repositoryUrl)
      }
      await repositoryToAdd.save(widget)
      document.dispatchEvent(new CustomEvent('repositoryWidgetAdded'))
     }
     return {save}
}

