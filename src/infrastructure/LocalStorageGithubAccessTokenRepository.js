export class LocalStorageGithubAccessTokenRepository {
    localStorageKey = 'github_access_token'
    search(){
        const token = localStorage.getItem(this.localStorageKey)
        return token ?? ''
    }
    save(token){
        localStorage.setItem(this.localStorageKey, token)
    }
}