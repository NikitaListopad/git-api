import {Icon, Text} from "../elements";
import {ReactComponent as StarIcon} from '../assets/star-icon.svg';
import {ReactComponent as HumanIcon} from '../assets/human-icon.svg';
import styles from '../styles/rate-item.module.css';

const mappingIcons = (watchers, stars) => ([
    {icon: <StarIcon />, text: 'stars', display: stars},
    {icon: <HumanIcon />, text: 'watchers', display: watchers},
])

const RateItem = ({watchers, stars}) => {

    const iconItems = mappingIcons(watchers, stars);

    return (
        <div className={styles.rateContainer}>
            {iconItems.map(item => {
                return (
                    <div className={styles.rateItemsContainer}>
                        <Icon children={item.icon} className={styles.icon} />
                        <Text text={`${item.display} ${item.text}`} />
                    </div>
                )
            })}
        </div>
    )
}

export default RateItem;

