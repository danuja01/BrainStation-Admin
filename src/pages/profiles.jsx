import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileLayout from "@/components/layout/profile";
import { getUserById } from "@/service/UserService";
import { Loader } from "@/components";
import Scrollbars from "react-custom-scrollbars-2";

const ProfilePage = () => {
  const { userId } = useParams(); // Get userId from the URL
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(userId); // Fetch user by ID
        console.log(response);
        setUserData(response); // Assuming response contains user object
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const navToMetrics = () => {
    navigate("/admin-portal/metrics"); // Navigate to the metrics page
  };

  if (!userData) {
    return <Loader />; // Show loading state until userData is fetched
  }

  return (
    <div className="p-4 px-6">
      {/* Scrollbars Component Wrapping the Profile Content */}
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMax={"calc(100vh - 200px)"}
        thumbMinSize={30}
        universal={true}
        className="rounded-lg"
      >
        <ProfileLayout
          profilePhoto={userData.profilePhoto || "https://cdn-icons-png.freepik.com/512/219/219966.png"} // Fallback profile photo
          userName={userData.data.username}
          email={userData.data.email}
          organization={userData.data.organization}
          onClick={() => navToMetrics(userData._id)} // Pass userId to navigate to metrics
        />
      </Scrollbars>
    </div>
  );
};

export default ProfilePage;
