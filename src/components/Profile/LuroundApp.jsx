/* @format */
import "../style.css";
import { useState, useReducer } from "react";
import Sidebar from "./LuroundSidebar";
import Bookings from "../Bookings/Bookings";
import Event from "../Services/Event/Event";
import One from "../Services/OneOff/OneOff";
import Program from "../Services/Program/Program";
import Retainer from "../Services/Retainer/Retainer";
import "../style.css";
import AboutDetails from "./AboutDetails";
import Search from "./LuroundSearch";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Transaction from "../Transactions/TransactionPage";
import axios from "axios";
import React, { useEffect } from "react";
import Login from "./Login";
export default function LuroundApp() {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");
  const [Name, setName] = useState("");
  const [Company, setComapny] = useState("");
  const [url, seturl] = useState("");
  const [logo, setlogo] = useState("");
  const [photo, setphotourl] = useState("");
  const [About, setAbout] = useState("");
  const [socialLink, setsocialLink] = useState([]);
  const [isOccupation, setIsOccupation] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [logindetail, setLogindetail] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);
  const [isValue, setIsValue] = useState({
    // upload2: "",
    firstName: "",
    lastName: "",
    occupation: "",
    company: "",
    logo_url: "",
  });

  //change clicks
  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  //login details
  function LoginDetail(e) {
    setLogindetail({ ...logindetail, [e.target.name]: e.target.value });
  }

  //login email and password
  const data = { email: "olaniyanfeyikemi@gmail.com", password: "Feyikemi123" };

  //login submit button
  function Submit(e) {
    e.preventDefault();

    if (
      logindetail.email === data.email &&
      logindetail.password === data.password
    ) {
      alert("Login");
      setLogin(true);
    } else if (
      logindetail.email != data.email &&
      logindetail.password === data.password
    ) {
      alert("Email not correct");
      setLogin(false);
    } else if (
      logindetail.email === data.email &&
      logindetail.password != data.password
    ) {
      alert("Password not correct");
      setLogin(false);
    } else {
      alert("Kindly Sign up");
      setLogin(false);
    }

    // // Login function

    axios
      .post(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log("response:", res.data);

        const token = res.data.accessToken;

        localStorage.setItem("Token", token);
      });
  }

  //get profile details
  useEffect(() => {
    const local = localStorage.getItem("Token");

    async function fetchData() {
      try {
        const response = await axios.get(
          "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/get",
          {
            headers: {
              Authorization: `Bearer ${local}`,
            },
            params: {
              email: "olaniyanfeyikemi@gmail.com", // Pass email as a query parameter
            },
          }
        );

        // console.log("Response:", response);
        setName(response.data.displayName);
        seturl(response.data.luround_url);
        setComapny(response.data.company);
        setlogo(response.data.logo_url);
        setphotourl(response.data.photourl);
        setAbout(response.data.about);
        setsocialLink(response.data.media_links);
        setIsOccupation(response.data.occupation);
        setIsEmail(response.data.email);
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Error:", error);
        }
      }
    }

    fetchData(); // Call the fetch function
  }, [refreshKey]);

  //filter social media links
  useEffect(() => {
    if (socialLink.length > 0) {
      const uniqueSocialLinks = socialLink.reduce((acc, curr) => {
        const existingIndex = acc.findIndex(
          (link) => link.name.toLowerCase() === curr.name.toLowerCase()
        );

        // If a duplicate is found, replace the existing one
        if (existingIndex !== -1) {
          acc[existingIndex] = curr; // Keep the last occurrence
        } else {
          acc.push(curr); // Otherwise, add the new link
        }
        return acc;
      }, []);

      // Update state if there are changes
      if (uniqueSocialLinks.length !== socialLink.length) {
        setsocialLink(uniqueSocialLinks);
      }
    }
  }, [socialLink]);

  function handleEditProfile(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }

  //profile-details function
  async function handleSubmit(e) {
    e.preventDefault();

    // Retrieve token from localStorage
    const local = localStorage.getItem("Token");

    console.log("Token being sent:", local);

    const request = await axios.put(
      "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/personal-details/update",
      { ...isValue },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log("value", isValue);
    console.log("Update successful:", request);

    setIsValue({
      // upload2: "",
      firstName: "",
      lastName: "",
      company: "",
      occupation: "",
      logo_url: "",
    });

    setRefreshKey((prevKey) => prevKey + 1);
  }

  return (
    <div>
      {!login ? (
        <Login
          logindetail={logindetail}
          Submit={Submit}
          LoginDetail={LoginDetail}
        />
      ) : (
        <div className='grid-container'>
          {/*Sidebar container */}
          <Sidebar onComponentSwitch={handleOneOffClick} />
          {/*Profile container */}
          <div className='profiledashboard'>
            <Search
              onComponentSwitch={handleOneOffClick}
              Name={Name}
              Email={isEmail}
            />
            <div className={`profile-details ${visible}`}>
              {activeComponent === "editprofile" && (
                <EditProfile
                  handleEditProfile={handleEditProfile}
                  handleSubmit={handleSubmit}
                  isValue={isValue}
                  setIsValue={setIsValue}
                  setRefreshKey={setRefreshKey}
                />
              )}
              {activeComponent === "oneoff" && <One />}

              {activeComponent === "retainer" && <Retainer />}
              {activeComponent === "program" && <Program />}
              {activeComponent === "event" && <Event />}
              {activeComponent === "bookings" && <Bookings />}
              {activeComponent === "transaction" && <Transaction />}

              {activeComponent === "profile" && (
                <>
                  <Profile
                    Name={Name}
                    company={Company}
                    url={url}
                    logo={logo}
                    photo={photo}
                    Occupation={isOccupation}
                    handleEditProfile={handleEditProfile}
                    handleSubmit={handleSubmit}
                  />
                  <AboutDetails about={About} socialLink={socialLink} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
