import publicAxios from "../../../components/publicAxios";

export const getBlogs = async () => {
    const response = await publicAxios.get("/blogs");

    return response.data;
};

