// Recharts Ex: https://recharts.org/en-US/examples/SimpleBarChart
// Removed Responsive container

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Updated props to take in data from parent
const SimpleBarChart = ({ categoryData }) => {
  return (
    <article style={styles.card} key={categoryData.index}>
      <h3>{categoryData.heading}</h3>
      <hr style={styles.divider} />
      <BarChart
        width={500}
        height={300}
        data={categoryData.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="rgba(40,54,24,0.12)" />
        <XAxis dataKey="category" tick={{ fill: "#283618" }} />
        <YAxis tick={{ fill: "#777" }} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="posts"
          fill="#DDA15E"
          activeBar={<Rectangle fill="#BC6C25" stroke="#606C38" />}
        />
      </BarChart>
    </article>
  );
};

export default SimpleBarChart;

const styles = {
  card: {
    margin: "2rem auto",
    background: "#fff",
    maxWidth: "fit-content",
    borderRadius: "0.5rem",
    padding: "1rem 0.5rem",
    boxShadow: "2px 4px 8px 2px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  divider: {
    maxWidth: "80%",
    margin: "0 auto",
    marginBottom: "0.5rem",
    borderColor: "var(--olive-green)",
  },
};
