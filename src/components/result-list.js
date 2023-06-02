import ResultItem from './result-item';

const ResultList = ({ items, index }) => {
  return (
    <ul>
      {items.map((item) => (
        <ResultItem item={item} index={index} />
      ))}
    </ul>
  );
};

export default ResultList;
