import API from "../../api/api";
const useItems = () => {
  const fetchItems = async () => {
    try {
      const response = await API.get("/items");

      if (response.data) {
        if (response.data.status === "success") {
          return response.data.items;
        } else {
          return [];
        }
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return { fetchItems };
};

export default useItems;
