// Recharts Ex: https://recharts.org/en-US/examples/SimpleLineChart
// Removed Responsive container

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Updated props to take in data from parent
const SimpleLineChart = ({ engagementData }) => {
  return (
    <article style={styles.card} key={engagementData.index}>
      <h3>{engagementData.heading}</h3>
      <hr style={styles.divider} />
      <LineChart
        width={500}
        height={300}
        data={engagementData.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="rgba(40,54,24,0.15)" />
        <XAxis dataKey="name" tick={{ fill: "#283618" }} />
        <YAxis tick={{ fill: "#777" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="posts" stroke="#606C38" dot={{ r: 3 }} />
        <Line
          type="monotone"
          dataKey="comments"
          stroke="#DDA15E"
          dot={{ r: 3 }}
        />
        <Line type="monotone" dataKey="likes" stroke="#2A9D8F" dot={{ r: 3 }} />
      </LineChart>
    </article>
  );
};

export default SimpleLineChart;

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
