// Import React Hooks(s)
import { useState } from "react";
// Import rechart components
import SimpleLineChart from "../components/charts/SimpleLineChart";
import SimpleBarChart from "../components/charts/SimpleBarChart";
import TwoSimplePieChart from "../components/charts/TwoSimplePieChart";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";

function Dashboard() {
  // Create 4 states for the 4 recharts
  const [engagementData] = useState([
    {
      heading: "User Engagement Over Time",
      data: [
        { name: "Mon", posts: 5, comments: 12, likes: 40 },
        { name: "Tue", posts: 8, comments: 15, likes: 52 },
        { name: "Wed", posts: 6, comments: 9, likes: 33 },
        { name: "Thu", posts: 9, comments: 17, likes: 61 },
        { name: "Fri", posts: 4, comments: 7, likes: 20 },
      ],
    },
  ]);

  const [categoryData] = useState([
    {
      heading: "Top Categories of Posts",
      data: [
        { category: "Food", posts: 30 },
        { category: "Tech", posts: 18 },
        { category: "Lifestyle", posts: 25 },
        { category: "Fitness", posts: 15 },
      ],
    },
  ]);

  const [deviceData] = useState([
    {
      heading: "User Device Breakdown",
      // The only one that required a color to be mapped as well
      data: [
        { name: "Desktop", value: 65, fill: "#606C38" },
        { name: "Mobile", value: 35, fill: "#DDA15E" },
      ],
    },
  ]);

  const [activityData] = useState([
    {
      heading: "User Activity Distribution",
      data: [
        { activity: "Posts", value: 120 },
        { activity: "Messages", value: 80 },
        { activity: "Watch", value: 40 },
        { activity: "Notifications", value: 100 },
      ],
    },
  ]);

  return (
    <>
      <h2>Dashboard</h2>
      <hr />
      {/* ez pz lemon squee z standard mapping */}
      {engagementData.map((engagementData, index) => (
        <SimpleLineChart key={index} engagementData={engagementData} />
      ))}
      {categoryData.map((categoryData, index) => (
        <SimpleBarChart key={index} categoryData={categoryData} />
      ))}
      {deviceData.map((deviceData, index) => (
        <TwoSimplePieChart key={index} deviceData={deviceData} />
      ))}
      {activityData.map((activityData, index) => (
        <SimpleRadarChart key={index} activityData={activityData} />
      ))}
    </>
  );
}

export default Dashboard;
