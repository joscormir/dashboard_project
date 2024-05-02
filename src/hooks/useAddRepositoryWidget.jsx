
export function useAddRepositoryWidget(repositoryToAdd){
     async function save(widget){
        await repositoryToAdd.save(widget)
     }
     return {save}
}

