import BaseApi from '../api'

export default class randomApi extends BaseApi {
  static async getAll() {
    return await this.api.get(`/users`, {}).then(({ data }) => data)
  }

  static async getById(id) {
    return await this.api.get(`/users/${id}`, {}).then(({ data }) => data)
  }

  static async createData(payload) {
    return await this.api.post(`/users`, { payload }).then(({ data }) => data)
  }

  static async updateById(id) {
    return await this.api.patch(`/users/${id}`, {}).then(({ data }) => data)
  }

  static async delById(id) {
    return await this.api.delete(`/users/${id}`, {}).then(({ data }) => data)
  }
}
