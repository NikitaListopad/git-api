import {Input} from "../elements";

const Search = ({onChange, value}) => {

    return (
            <Input
                onChange={onChange}
                value={value}
                placeholder='Search'
            />
    )
}

export default Search;