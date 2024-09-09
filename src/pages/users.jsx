import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "@/components/cards/user-card";
import FilterIcon from "@/components/icons/filter-icon";
import SearchIcon from "@/components/icons/search-icon";

// Sample data, ensure you have correct data structure
const users = [
  { userId: 1, profilePhoto: "https://cdn-icons-png.freepik.com/512/219/219966.png", userName: "Oshadha Thawalampola" },
  { userId: 2, profilePhoto: "https://cdn-icons-png.freepik.com/512/219/219966.png", userName: "Oshadha Thawalampola" },
  { userId: 3, profilePhoto: "https://cdn-icons-png.freepik.com/512/219/219966.png", userName: "Oshadha Thawalampola" },
  { userId: 4, profilePhoto: "https://cdn-icons-png.freepik.com/512/219/219966.png", userName: "Oshadha Thawalampola" },
  { userId: 5, profilePhoto: "https://cdn-icons-png.freepik.com/512/219/219966.png", userName: "Oshadha Thawalampola" }
];

const Users = () => {
  const navigate = useNavigate();

  const navToUserProfile = () => {
    navigate("/admin-portal/profile");
  };

  return (
    <div className="p-4 px-6">
      {/* Search Bar */}
      <div className="flex justify-center">
        <div
          className="flex justify-center border rounded-full h-14"
          style={{ boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex items-center px-3 py-2 min-w-80" style={{ width: "500px" }}>
            <div
              className="flex justify-between items-center border rounded-full w-full h-8 bg-neutral-200"
              style={{ boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)" }}
            >
              <SearchIcon />
              <p className="text-xl mx-2 text-slate-700">|</p>
              <input
                type="text"
                id="userName"
                placeholder="Search Users..."
                className="flex-grow placeholder-slate-600	bg-neutral-200 focus:outline-none"
              />
            </div>
            <FilterIcon className="ml-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="mt-8 mx-20">
        {users.map((user) => (
          <UserCard
            key={user.userId}
            profilePhoto={user.profilePhoto}
            userName={user.userName}
            onClick={() => navToUserProfile(user.userId)} // Corrected onClick reference
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
