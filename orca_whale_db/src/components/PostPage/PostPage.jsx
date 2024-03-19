<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> Dima4.0
import axios from "axios";
import CreateDiscussion from "../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../DiscussionPost/DiscussionPost";
import Banner from "../HomePage/Banner/Banner";
import Sightings from "../Sightings/Sightings";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [filterDate, setFilterDate] = useState("");
<<<<<<< HEAD
  const [displayDate, setDisplayDate] = useState("");
  const [reverseOrder, setReverseOrder] = useState(false);
  const [state, setState] = useState("");
=======
  const [reverseOrder, setReverseOrder] = useState(false);
>>>>>>> Dima4.0

  useEffect(() => {
    // Fetch sightings data from backend when component mounts
    axios
<<<<<<< HEAD
      .get("http://localhost:3000/posts") // Assuming your backend is running on port 5001
      .then((response) => {
=======
      .get("http://localhost:3000/posts") // Assuming your backend is running on port 3000
      .then((response) => {
        console.log(response.data.result);
>>>>>>> Dima4.0
        setPosts(response.data.result); // Assuming sightings data is stored in response.data.result
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    // Set the initial value of filterDate to the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month starts from 0
    const day = currentDate.getDate().toString().padStart(2, "0");
<<<<<<< HEAD
    const dayAfter = (currentDate.getDate() + 1).toString().padStart(2, "0");
    setFilterDate(`${year}-${month}-${dayAfter}`);
    setDisplayDate(`${year}-${month}-${day}`)
  }, [state]);

  const handleFilterChange = (e) => {
    const year = e.target.value.slice(0, 4);
    const month = e.target.value.slice(5, 7);
    const day = e.target.value.slice(8, 10);
    const dayAfter = String(Number(day) + 1);
    setDisplayDate(e.target.value);
    setFilterDate(`${year}-${month}-${dayAfter}`)
=======
    const formattedDate = `${year}-${month}-${day}`;
    setFilterDate(formattedDate);
  }, []);

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
>>>>>>> Dima4.0
  };

  const handleReverseOrder = () => {
    setReverseOrder(!reverseOrder); // Toggle the state to reverse the order
  };

  const filteredPosts = posts.filter(
    (post) => new Date(post.date) <= new Date(filterDate)
  );

  return (
    <>
      <Banner
        title={"See what people have been posting!"}
        backgroundImage={"./src/assets/grey-whale-banner.jpg"}
      />
      <div className="mt-8"></div>
      <Sightings />
      <form>
        <label
<<<<<<< HEAD
          htmlFor="displayDate"
          className="text-gray-700 ml-2 md:ml-[345px]"
        >
          Filter through Date:{" "}
=======
          htmlFor="filterDate"
          className="text-gray-700 ml-2 md:ml-[345px]"
        >
          Filter up to a Date:{" "}
>>>>>>> Dima4.0
        </label>
        <input
          className="text-gray-700 bg-[#e2e0df]"
          type="date"
<<<<<<< HEAD
          id="displayDate"
          name="displayDate"
          value={displayDate}
=======
          id="filterDate"
          name="filterDate"
          value={filterDate}
>>>>>>> Dima4.0
          onChange={handleFilterChange}
        />
      </form>
      <div className="mt-6"></div>
      <button
        onClick={handleReverseOrder}
        className="block w-36 h-10 text-black text-sm bg-white p-12px rounded-2rem font-bold text-decoration-none border border-gray-700 ml-2 md:ml-[345px]
<<<<<<< HEAD
        active:bg-gray-100 transition duration-150 hover:scale-[1.1]"
=======
        active:bg-gray-100"
>>>>>>> Dima4.0
      >
        Reverse Order
      </button>
      <div className="mt-6"></div>
      {reverseOrder
        ? filteredPosts.map((post) => (
            <DiscussionPost
              key={post._id} // Assuming sighting objects have a unique identifier like _id
<<<<<<< HEAD
              id={post._id}
              email={post.email}
=======
>>>>>>> Dima4.0
              username={post.user}
              lat={post.lat}
              long={post.long}
              time={post.time}
              date={post.date}
              description={post.description}
              image={post.image}
<<<<<<< HEAD
              species={post.species}
=======
>>>>>>> Dima4.0
            />
          ))
        : filteredPosts
            .slice()
            .reverse()
            .map((post) => (
              <DiscussionPost
                key={post._id} // Assuming sighting objects have a unique identifier like _id
<<<<<<< HEAD
                id={post._id}
                email={post.email}
=======
>>>>>>> Dima4.0
                username={post.user}
                lat={post.lat}
                long={post.long}
                time={post.time}
                date={post.date}
                description={post.description}
                image={post.image}
<<<<<<< HEAD
                species={post.species}
                setState={setState}
              />
            ))}
      <CreateDiscussion setState={setState}/>
=======
              />
            ))}
      <CreateDiscussion />
>>>>>>> Dima4.0
      <div className="mb-8"></div>
    </>
  );
}

export default PostPage;
