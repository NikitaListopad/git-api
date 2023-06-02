import {Icon, Text} from "../elements";
import {ReactComponent as StarIcon} from '../assets/images/star-icon.svg';
import {ReactComponent as HumanIcon} from '../assets/images/human-icon.svg';
import styles from '../styles/rate-item.module.css';

const mappingIcons = (watchers, stars) => ([
    {icon: <StarIcon />, text: 'stars', display: stars, className: styles.starsText},
    {icon: <HumanIcon />, text: 'watchers', display: watchers, className: ''},
])

const RateItem = ({watchers, stars}) => {

    const iconItems = mappingIcons(watchers = 146, stars = 146);

    return (
        <div className={styles.rateContainer}>
            {iconItems.map(item => {
                return (
                    <div className={styles.rateItemsContainer}>
                        <Icon children={item.icon} className={styles.icon} />
                        <Text text={`${item.display} ${item.text}`} className={`${styles.rateText} ${item.className}`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RateItem;

