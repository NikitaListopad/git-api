import {Text} from "../elements";
import styles from '../styles/item-description.module.css'

const ItemDescription = ({title, author, language, description}) => {
    return (
        <div className={styles.descriptionContainer}>
            <Text text={title} className={styles.title}/>
            <Text text={author} className={styles.author}/>
            <Text text={language} className={styles.language}/>
            <Text text={description} className={styles.description}/>
        </div>
    )
}

export default ItemDescription