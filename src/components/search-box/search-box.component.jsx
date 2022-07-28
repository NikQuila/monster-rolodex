import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChange } = props;
  return (
    <div className="box">
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      <i className="lupa">🔍</i>
    </div>
  );
};

export default SearchBox;
