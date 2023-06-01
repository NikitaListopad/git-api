
export const Input = ({className, type, value, onChange, placeholder}) => {

    return(
        <label>
            <input
                className={className}
                type={type ?? 'text'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}