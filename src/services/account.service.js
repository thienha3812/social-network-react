import axios from '../ultis/axios.config';


export async function signinService(username, password) {
  const request = await axios({
    url: '/api/account/signin',
    method: 'POST',
    data: { username, password },
  });
  return request;
}

export async function signup() {

}
