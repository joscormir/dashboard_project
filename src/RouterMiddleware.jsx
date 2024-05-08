import { useNavigate } from 'react-router'
import { LocalStorageGithubAccessTokenRepository } from './infrastructure/LocalStorageGithubAccessTokenRepository'
import { GithubAccessTokenSearcher } from './components/config/GithubAccessTokenSearcher'
import { useEffect } from 'react'

const ghAccessTokenRepository = new LocalStorageGithubAccessTokenRepository()
const ghAccessTokenSearcher = new GithubAccessTokenSearcher(ghAccessTokenRepository)
export function RouterMiddleware({ children }) {
  const navigate = useNavigate()
    const ghAccessToken = ghAccessTokenSearcher.search()
    useEffect(()=>{
        if(!ghAccessToken){
            navigate('/config')
        }
    },[ghAccessToken, navigate])

  return <>{children}</>
}
