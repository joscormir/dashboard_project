import { githubApiResponses } from "../github_api_responses";

export class inMemoryGitHubRepositoryRepository{
    search(){
        return githubApiResponses 
    }
}