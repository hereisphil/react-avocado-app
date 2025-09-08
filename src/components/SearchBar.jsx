import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form style={styles.form}>
      <span type="submit" style={styles.icon}>
        <FaSearch />
      </span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        required
        style={styles.input}
      />
    </form>
  );
};
export default SearchBar;

const styles = {
  form: {
    width: "max-content",
    maxWidth: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "Center",
    gap: "1rem",
    padding: "0.75rem 1rem",
    borderRadius: "2rem",
    background: "var(--orange)",
  },
  icon: {
    fontSize: "1.25rem",
    color: "var(--cream)",
  },
  input: {
    outline: "none",
    border: "none",
    background: "transparent",
    width: "300px",
  },
};
