


export default function ApiLogin(user) {
  const url = `/users/login`
  

  const data  = {
    email : user.email,
    password: user.password
  }

  return api().post(url,data)
    

}


