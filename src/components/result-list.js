import ResultItem from "./result-item";
const mockObject = {
    title: 'Repo name',
    author: 'Author',
    language: 'JavaScript',
    description: 'Lorem lorem fdosp fpd dposfkpods op opdospop sd'
}
const ResultList = () => {
    return (
        <ul>
            <ResultItem item={mockObject}/>
            <ResultItem item={mockObject}/>
            <ResultItem item={mockObject}/>
        </ul>
    )
}

export default ResultList;