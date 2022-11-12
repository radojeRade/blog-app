import { axiosInstance } from "./AxiosService";

class PostsService {

  async getAll() {
    const response = await axiosInstance.get("/posts");
    return response.data;
  }

}

export default new PostsService();