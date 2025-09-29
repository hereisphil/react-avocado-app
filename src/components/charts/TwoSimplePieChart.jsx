// Recharts Ex: https://recharts.org/en-US/examples/TwoSimplePieChart
// Removed Responsive container

import { Pie, PieChart, Tooltip } from "recharts";

// Updated props to take in data from parent
const TwoSimplePieChart = ({ deviceData }) => {
  return (
    <article style={styles.card}>
      <h3>{deviceData.heading}</h3>
      <hr style={styles.divider} />
      <PieChart width={400} height={300}>
        <Pie
          data={deviceData.data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="52%"
          outerRadius={100}
          label
        />
        <Tooltip />
      </PieChart>
    </article>
  );
};

export default TwoSimplePieChart;

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
