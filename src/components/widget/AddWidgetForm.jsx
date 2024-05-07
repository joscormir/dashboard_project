import { useState } from 'react'
import styles from './AddWidgetForm.module.scss'
import Add from '../../assets/icons/add.svg'
import { useAddRepositoryWidget } from '../../hooks/useAddRepositoryWidget'
import { LocalStorageRepositoryWidgetRepository } from '../../infrastructure/LocalStorageRepositoryWidgetRepository'
export function AddWidgetForm() {
  const [isFormActive, setIsFormActive] = useState(false)
  const { save } = useAddRepositoryWidget(new LocalStorageRepositoryWidgetRepository())
  const  submitForm = async (ev) => {
    ev.preventDefault()
    const { id, repositoryUrl } = ev.target.elements
    await save({id :id.value,repositoryUrl: repositoryUrl.value})
    setIsFormActive(true)
    //save new repository
  }
  return (
    <article className={styles.add_widget}>
      <div className={styles.container}>
        {!isFormActive ? (
          <button
            onClick={() => setIsFormActive(true)}
            className={styles.add_button}
          >
            {<Add />}
            <p>Añadir repositorio</p>
          </button>
        ) : (
          <form className={styles.form} onSubmit={submitForm}>
            <div>
              <label htmlFor="id">Id</label>
              <input type="text" id="id" />
            </div>
            <div>
              <label htmlFor="url">Url del repositorio</label>
              <input type="text" id="repositoryUrl" />
            </div>

            <div>
              <input type="submit" value={'Añadir'} />
            </div>
          </form>
        )}
      </div>
    </article>
  )
}
