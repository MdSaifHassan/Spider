import { useMutation, useQuery } from "@tanstack/react-query";
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
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (values) =>
      apiClient("userlogin", {
        method: "POST",
        body: JSON.stringify(values),
      }),
    onSuccess: (data) => {
      if (data?.result === "success" && data?.data?.token) {
        const { token, ...user } = data.data;
        dispatch(loginSuccess({ token, user }));
        sessionStorage.setItem("authToken", token);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error.message);
    },
  });
};

export const useSignup = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (values) =>
      apiClient("usersignup", {
        method: "POST",
        body: JSON.stringify(values),
      }),
    onSuccess: (data) => {
      if (data?.result === "success" && data?.data?.token) {
        const { token, ...user } = data.data;
        dispatch(signupSuccess({ token, user }));
        sessionStorage.setItem("authToken", token);
      }
    },
    onError: (error) => {
      console.error("Signup Failed:", error.message);
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (values) =>
      apiClient("forgot-password", {
        method: "PUT",
        body: JSON.stringify(values),
      }),
    onSuccess: (data) => {
      console.log("Password reset successfully", data);
    },
    onError: (error) => {
      console.error("Password reset failed:", error.message);
    },
  });
};
