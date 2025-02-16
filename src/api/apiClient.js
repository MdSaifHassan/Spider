const BASE_URL = "http://139.59.59.238:8081/api/v1";

const apiClient = async (endpoint, options = {}) => {
  let token = typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null;

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "An error occurred during the request.");
    }

    return data;
  } catch (error) {
    console.error("API Client Error:", error);
    throw error;
  }
};

export default apiClient;
