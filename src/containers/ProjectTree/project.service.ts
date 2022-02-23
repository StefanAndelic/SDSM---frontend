import axios from 'axios'

const BASE_URL = 'http://137.184.232.178:3900/'
const LOCAL_URL = 'http://192.168.1.4:3900/'

export async function getProjectDetails() {
  let response

  try {
    response = await axios.get(`${BASE_URL}ibm/api/v1/project`)
  } catch (error) {
    console.log(error)
  }
  return response
}

export async function addPhase(
  id: string,
  phase: string,
  activity: string,
  task: string,
  input: string,
  output: string,
) {
  let response

  try {
    response = await axios.post(`${BASE_URL}ibm/api/v1/project`, {
      id,
      phase,
      activity,
      task,
      input,
      output,
    })
  } catch (error) {
    console.log(error)
  }
  return response
}

export async function deleteProjectStep(id: any) {
  let response

  try {
    response = await axios.delete(`${BASE_URL}ibm/api/v1/project/${id}`)
  } catch (error) {
    console.log(error)
  }
  return response
}
