import { Component } from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import AdCard from "./components/AdCard";
// importing avatars for user profile photos (pAvatar)
// https://www.flaticon.com/free-icons icons created by Prosymbols Premium - Flaticon
import phillipCantuAvatar from "./images/man.png";
import samanthaLeeAvatar from "./images/woman.png";
import jordanAlvarezAvatar from "./images/boy.png";

class App extends Component {
  state = {
    pData: [
      {
        id: 1,
        pAuthor: "Phillip Cantu",
        pAvatar: phillipCantuAvatar,
        pAlt: "Phillip Cantu's Profile Picture",
        pDate: "September 11, 2025",
        pTitle: "Launching my first ReactJS app",
        pContent:
          "I'm finally in my first ReactJS class at Full Sail University! I'm excited to be learning, using, and implementing React by building our a social-media-styled web app. Follow along to see my journey, and please do leave any suggestions. Thanks! 🚀",
      },
      {
        id: 2,
        pAuthor: "Samantha Lee",
        pAvatar: samanthaLeeAvatar,
        pAlt: "Samantha Lee's Profile Picture",
        pDate: "September 13, 2025",
        pTitle: "Exploring Styled Components in React",
        pContent:
          "Just wrapped up my first experiment with styled-components. I love how it keeps styles scoped and clean. Definitely feels like a step forward compared to plain CSS files. Curious if anyone has tips for managing global themes?",
      },
      {
        id: 3,
        pAuthor: "Jordan Alvarez",
        pAvatar: jordanAlvarezAvatar,
        pAlt: "Jordan Alvarez's Profile Picture",
        pDate: "September 15, 2025",
        pTitle: "Debugging React State Issues",
        pContent:
          "Spent hours tracking down a bug today, only to realize I was mutating state directly instead of using setState. Lesson learned! React really teaches you to think differently about how data flows. Anyone else ever make this mistake?",
      },
    ],
    color: "var(--dark-green)",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "var(--cream)" });
    }, 2000);
  }

  getInput = (e) => {
    this.setState({ pTitle: e.target.value });
  };
  getValue = (e) => {
    this.setState({ pContent: e.target.value });
  };

  addPost = (e) => {
    const lastPostId = this.state.pData[this.state.pData.length - 1].id;
    e.preventDefault();

    if (!this.state.pTitle || !this.state.pContent) {
      alert("Please complete both the title and content before posting!");
      return;
    }

    this.setState({
      pData: [
        ...this.state.pData,
        {
          id: lastPostId ? lastPostId + 1 : 1,
          pTitle: this.state.pTitle,
          pContent: this.state.pContent,
        },
      ],
      pTitle: "",
      pContent: "",
    });
    e.target.reset();
  };

  removePost = (postToBeDeleted) => {
    const newpData = this.state.pData.filter(
      (post) => post !== postToBeDeleted
    );
    this.setState(() => ({ pData: newpData }));
  };

  render() {
    let postData = this.state.pData.map((post) => {
      return (
        <PostCard
          key={post.id}
          val={post}
          delete={() => this.removePost(post)}
        />
      );
    });
    return (
      <>
        {/* Header */}
        <Header />
        {/* LeftNav */}
        <main
          style={{ ...styles.container, backgroundColor: this.state.color }}
        >
          <LeftNav />
          {/* CenterContent */}
          <section style={styles.centerContent}>
            <Form
              getInput={this.getInput}
              getValue={this.getValue}
              addPost={this.addPost}
              userName="Phillip"
            />
            {postData}
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
