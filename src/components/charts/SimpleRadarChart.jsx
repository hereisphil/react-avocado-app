// Recharts Ex: https://recharts.org/en-US/examples/SimpleRadarChart
// Removed Responsive container

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

// Updated props to take in data from parent
const SimpleRadarChart = ({ activityData }) => {
  return (
    <article style={styles.card}>
      <h3>{activityData.heading}</h3>
      <hr style={styles.divider} />
      <RadarChart
        width={400}
        height={300}
        data={activityData.data}
        cx="50%"
        cy="50%"
        outerRadius="70%"
      >
        <PolarGrid stroke="rgba(40,54,24,0.2)" />
        <PolarAngleAxis dataKey="activity" tick={{ fill: "#283618" }} />
        <PolarRadiusAxis tick={{ fill: "#777" }} angle={45} />
        <Radar
          name="Activity"
          dataKey="value"
          stroke="#BC6C25"
          fill="#BC6C25"
          fillOpacity={0.45}
        />
        <Tooltip />
      </RadarChart>
    </article>
  );
};

export default SimpleRadarChart;

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
