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

  async add(body){
    const res = await axiosInstance.post("/posts", body);
    return res.status;
  }

  async edit(id, body){
    const res = await axiosInstance.put(`/posts/${id}`, body);
    return res;
  }

}

export default new PostsService();