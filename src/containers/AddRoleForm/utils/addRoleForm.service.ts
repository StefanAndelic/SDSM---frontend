import axios from 'axios'
import production_config from '../../../config/production.env.json'

//backend url
const BASE_URL = 'http://137.184.232.178:3900'

//local url
const LOCAL_URL = 'http://192.168.1.4:3900'
export async function getTeamMembers() {
  let response

  try {
    response = await axios.get(`${production_config.BASE_URL}/ibm/api/v1/team`)
  } catch (error) {
    console.log(error)
  }
  return response
}

export async function addMember(
  id: string,
  name: string,
  role: string,
  email: string,
  password: string,
) {
  let response

  try {
    response = await axios.post(
      `${production_config.BASE_URL}/ibm/api/v1/team`,
      {
        id,
        name,
        role,
        email,
        password,
      },
    )
  } catch (error) {
    console.log(error)
  }
  return response
}

export async function deleteMember(id: any) {
  let response

  try {
    response = await axios.delete(
      `${production_config.BASE_URL}/ibm/api/v1/team/${id}`,
    )
  } catch (error) {
    console.log(error)
  }
  return response
}
