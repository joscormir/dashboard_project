export class LocalStorageRepositoryWidgetRepository {
  localStorageKey = 'repositoryWidgets'
  async search() {
    const data = localStorage.getItem(this.localStorageKey)
    if (!data) {
      return Promise.resolve([])
    }
    return Promise.resolve(JSON.parse(data))
  } //This is not asynchronous but it will return a Promise
  async save(widget) {
    const currentRepositoryWidget = await this.search()
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(currentRepositoryWidget.concat(widget))
    )
  }
}
