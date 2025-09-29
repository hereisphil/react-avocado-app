import { Routes, Route } from "react-router";

// Components
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import AdCard from "./components/AdCard";

// Pages
import Newsfeed from "./pages/Newsfeed";
import Messages from "./pages/Messages";
import Watch from "./pages/Watch";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

// PARENT COMPONENT
function App() {
  return (
    <>
      <Header />
      <main style={styles.container}>
        <LeftNav />
        <section style={styles.centerContent}>
          <Routes>
            <Route path="/" element={<Newsfeed />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
        <aside style={styles.adSection}>
          <AdCard
            title="Limited Time Offer"
            img="https://images.pexels.com/photos/16392183/pexels-photo-16392183.jpeg"
            subtitle="$5.00 and Free Shipping on our now Avocado plush."
          />
          <AdCard
            title="Don't Miss Out"
            img="https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg"
            subtitle="Join our exclusive email newsletter today to receive curated weekly discounts."
          />
        </aside>
      </main>
    </>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  centerContent: {
    width: "100%",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  adSection: {
    width: "300px",
    padding: "1.5rem 0.25rem 0 0",
  },
};
