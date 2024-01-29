import BaseApi from '../api'

export default class studentsApi extends BaseApi {
  static async getAll() {
    return await this.api.get(`/posts`, {}).then(({ data }) => data)
  }

  static async getById(id) {
    return await this.api.get(`/posts/${id}`, {}).then(({ data }) => data)
  }

  static async createData(payload) {
    return await this.api.post(`/posts`, { payload }).then(({ data }) => data)
  }

  static async updateById(id, payload) {
    return await this.api
      .patch(`/posts/${id}`, { payload })
      .then(({ data }) => data)
  }

  static async delById(id) {
    return await this.api.delete(`/posts/${id}`, {}).then(({ data }) => data)
  }
}
