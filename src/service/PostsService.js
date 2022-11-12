import { axiosInstance } from "./AxiosService";

class PostsService {

  async getAll() {
    const response = await axiosInstance.get("/posts");
    return response.data;
  }

  async get(id) {
    const data = await axiosInstance.get(`/posts/${id}`);
        return data.data;
  }

}

export default new PostsService();