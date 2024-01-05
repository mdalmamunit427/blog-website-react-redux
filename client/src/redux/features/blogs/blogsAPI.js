/* eslint-disable no-const-assign */
import publicAxios from "../../../components/publicAxios";

export const getBlogs = async (tags, search) => {
  let queryString = tags.length ? `tags_like=${tags.join(",")}` : "";

  if (search !== "") {
    queryString += `${queryString ? "&" : ""}q=${search}`;
  }
  
  try {
    const response = await publicAxios.get(`/blogs/?${queryString}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
