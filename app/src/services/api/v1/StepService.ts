import axios, { AxiosResponse } from "axios"

import { API_PREFIX } from "@/services/api/v1/const"

import { StepForm } from "@/types/schedule/task/StepInterface"

export default class TaskService {
  public addStep(form: StepForm): Promise<AxiosResponse> {
    return axios.post(`${API_PREFIX}/todo/task/step/create`, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      task_id: form.taskId,
      name: form.name
    })
  }

  public changeStepStatus(id: number, status: string): Promise<AxiosResponse> {
    return axios.patch(`${API_PREFIX}/todo/task/step/change-status`, {
      id,
      status
    })
  }

  public changeStepsStatus(ids: Array<number>, status: string): Promise<AxiosResponse> {
    return axios.patch(`${API_PREFIX}/todo/task/step/change-status/list`, {
      ids,
      status
    })
  }

  public removeStep(id: number): Promise<AxiosResponse> {
    return axios.delete(`${API_PREFIX}/todo/task/step/remove`, {
      data: {
        id
      }
    })
  }
}
