import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function DashSidebar() {
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
            >
            Profile
          </Sidebar.Item>
            </Link>
             <Link to='/dashboard?tab=signout'>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign out
          </Sidebar.Item>
             </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
