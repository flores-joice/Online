// const INITIAL_STATE = {
//   nome: '',
//   email: '',
//   password: '',
//   token: ''
// }

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {

//     case 'submit_user':
//       let url = 'http://localhost:52231/api/login'
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           'mode': 'no-cors',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then((response) => response.json())
//         .then(json => console.log(json))
//         return{ response }

//     default:
//       { console.log('action', action) }
//       return state.reponse
//   }
// }