import inputStyles from '../styles/input.module.css';

export const Input = ({className, type, value, onChange, placeholder}) => {

    return(
            <input
                className={className ?? inputStyles.input}
                type={type ?? 'text'}
                value={value ?? ''}
                onChange={onChange}
                placeholder={placeholder}
            />
    )
}