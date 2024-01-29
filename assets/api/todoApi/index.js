import BaseApi from '../api'

export default class todoApi extends BaseApi {
  static async getAll() {
    return await this.api.get('/posts/1/comments', {}).then(({ data }) => data)
  }

  static async getPost() {
    return await this.api.get('/posts', {}).then(({ data }) => data)
  }

  static async postList(payload) {
    return await this.api.post(`/posts`, payload).then(({ data }) => data)
  }

  static async createData(payload) {
    return await this.api.post(`/posts`, payload).then(({ data }) => data);
  }

  static async updateById(id, payload) {
    return await this.api.patch(`/posts/${id}`, payload).then(({ data }) => data);
  }

  static async delById(id) {
    return await this.api.delete(`/posts/${id}`, {}).then(({ data }) => data);
  }
}
