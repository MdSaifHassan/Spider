import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginSuccess, signupSuccess } from "@/src/utils/slices/authSlice";
import apiClient from "./apiClient";

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const token = typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null;
      if (!token) throw new Error("Authentication token missing.");

      return apiClient("service", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  });
};

export const useLogin = () => {
    return useMutation({
      mutationFn: async (values) =>
        apiClient("userlogin", {
          method: "POST",
          body: JSON.stringify(values),
        }),
      onSuccess: (data) => {
        console.log("Login Success:", data);
        return data;
      },
      onError: (error) => {
        console.error("Login Failed:", error.message);
      },
    });
  };

export const useSignup = () => {
    return useMutation({
      mutationFn: async (values) =>
        apiClient("usersignup", {
          method: "POST",
          body: JSON.stringify(values),
        }),
      onSuccess: (data) => {
        console.log("Signup Success:", data);
        return data; 
      },
      onError: (error) => {
        console.error("Signup Failed:", error.message);
      },
    });
  };
