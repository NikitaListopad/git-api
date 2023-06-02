import {Text} from "../elements";
import styles from '../styles/display-error.module.css'


const DisplayError = ({errorMessage}) => {
    return (
        <Text text={errorMessage} className={styles.errorMessage} />
)
}

export default DisplayError
