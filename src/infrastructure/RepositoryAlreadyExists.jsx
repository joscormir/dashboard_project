export class RepositoryAlreadyExistsError extends Error{
	constructor(url) {
		super(`The repository with url ${url} already exists`)
	}
}