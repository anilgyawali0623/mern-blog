import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../user/userSlice";
 
function DashSidebar() {
   const dispatch= useDispatch();

  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    // location.search give the string of the url  urlParams helps to perform
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={"user"}
            labelColor="dark"
             as="button"
            >
            Profile
          </Sidebar.Item>
            </Link>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer"  onClick={handleSignout}>
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;