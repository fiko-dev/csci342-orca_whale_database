<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> Dima4.0
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
function CreateDiscussion({setState}) {
=======
function CreateDiscussion() {
>>>>>>> Dima4.0
  const [formData, setFormData] = useState({
    lat: "",
    long: "",
    species: "",
    description: "",
    user: "",
<<<<<<< HEAD
    image: ""
  });

  const user = useSelector((state) => state.auth.user);
=======
    image: "",
  });

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
>>>>>>> Dima4.0

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // If the input is for an image file, set the state to the selected file
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      // For other input fields, update the form data as usual
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!formData.description) {
      toast.error("Please fill in the description.");
      return;
    }
    if ((formData.long && !formData.lat) || (formData.lat && !formData.long)) {
      toast.error("Only one location coordinate is not allowed.");
      return;
    }
=======
>>>>>>> Dima4.0

    if (!user.userName) {
      // If the user is not logged in, display an error toast
      toast.error("You need to sign in before posting.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("user", user.userName);
<<<<<<< HEAD
    formDataToSend.append("email", user.email);
    // If lat and long are not empty, append them to formDataToSend
    if (formData.lat.trim() !== "") {
      formDataToSend.append("lat", formData.lat);
    } else {
      // Provide a default value for lat if it's empty
      formDataToSend.append("lat", "");
    }

    if (formData.long.trim() !== "") {
      formDataToSend.append("long", formData.long);
    } else {
      // Provide a default value for long if it's empty
      formDataToSend.append("long", "");
    }
=======
    formDataToSend.append("lat", formData.lat.trim());
    formDataToSend.append("long", formData.long.trim());
>>>>>>> Dima4.0
    formDataToSend.append("species", formData.species);
    formDataToSend.append("description", formData.description);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

<<<<<<< HEAD
    axios
      .post("http://localhost:3000/posts", formDataToSend)
      .then((response) => {
        console.log("Post created successfully:", response.data.result);
        // Optionally, you can reset the form fields after successful submission
=======
    console.log("formDataToSend:", formDataToSend);
    console.log(
      "before post creation",
      formData.lat.trim(),
      formData.long.trim()
    );

    axios
      .post("http://localhost:3000/posts", formDataToSend)
      .then((response) => {
        console.log("Post created successfully:", response.data);
        toast.success("Post created successfully! See post in account");

        // Check if both latitude and longitude are provided
        const lat = formData.lat.trim();
        const long = formData.long.trim();
        if (lat && long) {
          const reqBody = {
            lat: formData.lat,
            long: formData.long,
            user: user.userName,
            species: formData.species,
            description: formData.description,
          };
          axios
            .post("http://localhost:3000/sightings", reqBody)
            .then((response) => {
              console.log("Sighting created successfully:", response.data);
              toast.success("Sighting was successfully created!");
            })
            .catch((error) => {
              console.error("Error creating Sighting:", error);
              toast.error("Error creating sighting");
            });
        }

        // Reset form fields after successful submission
>>>>>>> Dima4.0
        setFormData({
          lat: "",
          long: "",
          species: "",
          description: "",
          image: null,
        });
<<<<<<< HEAD
        // Rerender the posts
        setState(formData);
=======
>>>>>>> Dima4.0
      })
      .catch((error) => {
        console.error("Error creating Post:", error);
        toast.error("Error creating post");
      });
<<<<<<< HEAD

    toast.success("Post created successful! See post in posts page or account.");
=======
>>>>>>> Dima4.0
  };

  const handleCancel = () => {
    // Clear all form fields
    setFormData({
      lat: "",
      long: "",
      species: "",
      description: "",
      image: null, // Reset image to null
    });
  };
  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Sighting
      </div>
      <form
        className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Latitude (optional)"
          type="text"
          name="lat"
          value={formData.lat}
          onChange={handleChange}
        />
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Longitude (optional)"
          type="text"
          name="long"
          value={formData.long}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Species (optional)"
          type="text"
          name="species"
          value={formData.species}
          onChange={handleChange}
        />
        <textarea
          className="description bg-gray-100 sec p-2 h-60 w-full border border-gray-300 outline-none mb-4"
=======
        <select
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          name="species"
          value={formData.species}
          onChange={handleChange}
        >
          <option value="">Select Species</option>
          <option value="orca">Orca</option>
          <option value="gray">Gray Whale</option>
          <option value="humpback">Humpback Whale</option>
          <option value="blue">Blue Whale</option>
          <option value="fin">Fin Whale</option>
          <option value="minke">Minke Whale</option>
          <option value="uncertain">Other/Uncertain</option>
        </select>
        <textarea
          className="description bg-gray-100 sec p-2 h-60 w-full border border-gray-300 outline-none"
>>>>>>> Dima4.0
          spellCheck="false"
          placeholder="Description (required)"
          name="description"
          value={formData.description}
          onChange={handleChange}
<<<<<<< HEAD
        />
=======
        ></textarea>

>>>>>>> Dima4.0
        <input type="file" name="image" onChange={handleChange} />
        <p>Image not required*</p>

        <div className="buttons flex">
          <button
            type="button"
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
<<<<<<< HEAD
            className="btn border border-indigo-500 p-1 px-4 
          font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
=======
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
>>>>>>> Dima4.0
          >
            Post
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
}

export default CreateDiscussion;
