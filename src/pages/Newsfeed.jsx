import { useState, useEffect } from "react";
import Form from "../components/Form";
import PostCard from "../components/PostCard";
// importing avatars for user profile photos (pAvatar)
// https://www.flaticon.com/free-icons icons created by Prosymbols Premium - Flaticon
import phillipCantuAvatar from "../images/man.png";
import samanthaLeeAvatar from "../images/woman.png";
import jordanAlvarezAvatar from "../images/boy.png";

function Newsfeed() {
  const [posts, setPosts] = useState([
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
  ]);

  // NEW State to help know which post per id is being edited (null = none)
  const [editingPostId, setEditingPostId] = useState(null);

  // State background color for PostCard
  const [postCardBg, setPostCardBg] = useState("black");
  // useEffect to update background color
  useEffect(() => {
    const t = setTimeout(() => {
      setPostCardBg("var(--olive-green)");
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  const addPost = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const newTitle = data.get("pTitle");
    const newContent = data.get("pContent");

    if (!newTitle || !newContent) {
      alert("Please complete both the title and content before posting!");
      return;
    }

    setPosts((prev) => {
      const nextId =
        prev.length > 0 ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      return [
        ...prev,
        {
          id: nextId,
          pDate: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          pTitle: newTitle,
          pContent: newContent,
        },
      ];
    });

    e.target.reset();
  };

  const removePost = (idToDelete) => {
    setPosts((prev) => prev.filter((p) => p.id !== idToDelete));
  };

  // NEW handleEdit with postId reference
  // Just sets the id for it to be edited
  const handleEdit = (postId) => {
    setEditingPostId(postId);
  };

  // NEW handleSubmit with that uses the above postID
  const handleSubmit = (e, postId) => {
    // prevent page refresh
    e.preventDefault();
    // use JavaScript's new FormData
    const data = new FormData(e.target);
    const updatedTitle = data.get("pTitle");
    const updatedContent = data.get("pContent");
    // simple validation
    if (!updatedTitle || !updatedContent) {
      alert("Please complete both the title and content before submitting!");
      return;
    }

    // Update only the matching post per id
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, pTitle: updatedTitle, pContent: updatedContent }
          : post
      )
    );
    // return id to null to close form
    setEditingPostId(null);
  };

  // NEW handleCancel to just remove id to close form
  const handleCancel = () => {
    setEditingPostId(null); // discard and close
  };

  return (
    <>
      <Form addPost={addPost} userName="Phillip" />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          val={post}
          color={postCardBg}
          delete={() => removePost(post.id)}
          edit={post.id === editingPostId} // Uses new state to set id to edit
          editPost={() => handleEdit(post.id)} // the actual edit function
          handleSubmit={(e) => handleSubmit(e, post.id)} // update state
          handleCancel={handleCancel} // close form
        />
      ))}
    </>
  );
}

export default Newsfeed;
