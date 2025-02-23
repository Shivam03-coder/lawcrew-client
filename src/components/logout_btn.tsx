"use client";
import React from "react";
import { Button } from "../ui/button";
import { useLogoutUserMutation } from "@/store/api-endpoints/auth";
import { useRouter } from "next/navigation";
import { showToast } from "./show-toast";

const LogoutButton = () => {
  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const resp = await logoutUser().unwrap();

      showToast({
        title: "Logged out successfully",
        type: "success",
      });
      showToast({
        title: resp.message,
        type: resp.status === "success" ? "success" : "error",
      });
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button onClick={handleLogout} className="text-white" disabled={isLoading}>
      {isLoading ? "Logging out..." : "LOGOUT"}
    </Button>
  );
};

export default LogoutButton;
