import { useState } from 'react'
import styles from './AddWidgetForm.module.scss'
export function AddWidgetForm(){
    
    const {isFormActive, setIsFormActive} = useState(false)
    const submitForm =(ev)=>{
        ev.preventDefault()
        setIsFormActive(true)
        console.log('submitted')
        //save new repository
    }
	return (
		<article className={styles.add_widget}>
			<div className={styles.container}>
				{!isFormActive ? (
					<button onClick={() => setIsFormActive(true)} className={styles.add_button}>
						{//Add repo
                        }
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
							<input type="text" id="url" />
						</div>

						<div>
							<input type="submit" value={"Añadir"} />
						</div>
					</form>
				)}
			</div>
		</article>
	)

    
}