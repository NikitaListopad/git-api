import {Image} from "../elements";
import ItemDescription from "./item-description";
import styles from '../styles/result-item.module.css'
import defaultAvatar from '../assets/default-avatar.jpeg'

const ResultItem = ({item}) => {

    const {title, avatar = defaultAvatar, author, language, description, stars, watchers} = item;

    return (
        <div className={styles.resultItemContainer}>
            <Image className={styles.resultImage} image={avatar}/>
            <ItemDescription {...item}/>
        </div>
    )
}

export default ResultItem