import { Component } from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import AdCard from "./components/AdCard";

class App extends Component {
  render() {
    return (
      <>
        {/* Header */}
        <Header />
        {/* LeftNav */}
        <main style={styles.container}>
          <LeftNav />
          {/* CenterContent */}
          <section style={styles.centerContent}>
            <Form userName="Phillip" />
            <PostCard
              userName="Phillip Cantu"
              title="Today is a good day"
              caption="Yup, I said it. I won't take it back. I believe it."
            />
          </section>
          {/* AdContent */}
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
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
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
