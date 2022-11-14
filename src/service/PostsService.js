import { axiosInstance } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosInstance.get("/posts");
    return response.data;
  }

  async get(id) {
    const data = await axiosInstance.get(
      `/posts/${id}?filter={"include":["comments"]}`
    );
    return data.data;
  }

  async add(body) {
    const res = await axiosInstance.post("/posts", body);
    return res.status;
  }

  async edit(id, body) {
    const res = await axiosInstance.put(`/posts/${id}`, body);
    return res;
  }

  async delete(id) {
    const res = await axiosInstance.delete(`/posts/${id}`);
    return res.status;
  }

  async addComment(id, comment) {
    const res = await axiosInstance.post(`/posts/${id}/comments`, comment);
    return res;
  }
  async getCount(id) {
    const res = await axiosInstance.get(`/posts/${id}/comments/count`);
    return res.data;
  }
  async removeComment(id) {
    const res = await axiosInstance.delete(`/comments/${id}`);
    return res;
  }
}

export default new PostsService();
