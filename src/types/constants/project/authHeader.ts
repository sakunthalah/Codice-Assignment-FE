export const fetchAuthHeader = async () => {
    const token = localStorage.getItem("authToken");;
    return {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
   };