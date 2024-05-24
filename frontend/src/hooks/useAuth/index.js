import API from "../../api/api";

const useAuth = () => {
  const signUp = async (body) => {
    try {
      const response = await API.post("/auth/signup", JSON.stringify(body));
      console.log(response);
      if (response.data) {
        return response.data?.status ?? "try again";
      }

      return "try again";
    } catch (error) {
      console.log(error);
      return "Something went wrong";
    }
  };

  const login = async (payload) => {
    try {
      const data = JSON.stringify(payload);

      const response = await API.post("/auth/login", data);

      if (response?.data) {
        const data = response.data;

        return data.status === "success"
          ? { user: data.user, message: data.status }
          : { user: null, message: data.status, token: null };
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error from useAuth's login", error);
      return false;
    }
  };

  return { signUp, login };
};

export default useAuth;
