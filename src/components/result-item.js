import {Image} from "../elements";
import ItemDescription from "./item-description";
import styles from '../styles/result-item.module.css'
import defaultAvatar from '../assets/default-avatar.jpeg'
import RateItem from "./rate-item";

const ResultItem = ({item}) => {

    const {avatar = defaultAvatar, stars, watchers } = item;

    return (
        <div className={styles.resultItemContainer}>
            <Image className={styles.resultImage} image={avatar}/>
            <ItemDescription {...item}/>
            <RateItem stars={stars} watchers={watchers}/>
        </div>
    )
}

export default ResultItem