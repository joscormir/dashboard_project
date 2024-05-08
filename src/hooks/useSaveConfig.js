export function useSaveConfig(repository){
    function save(token){
        repository.save(token)
    }
    return{save}
}