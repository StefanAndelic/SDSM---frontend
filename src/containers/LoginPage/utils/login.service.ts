import axios from 'axios'
import production_config from '../../../config/production.env.json'

//backend
const BASE_URL = 'http://137.184.232.178:3900'

//local
const LOCAL_URL = 'http://192.168.1.4:3900'

export const handeLogin = async (email: any, password: any) => {
  let response
  try {
    response = await axios.post(
      `${production_config.BASE_URL}/ibm/api/v1/auth`,
      {
        email,
        password,
      },
    )
  } catch (error) {
    console.log(error)
  }
  return response
}
