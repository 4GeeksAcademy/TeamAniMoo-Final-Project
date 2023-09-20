const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: [],
			token:null
		},
		actions: {
			// Use getActions to call a function within a fuction
			 logout:()=>{
				localStorage.removeItem('token')
				setStore({token:null})
				window.location.href='https://automatic-dollop-465jj7w657j3jqqv-3000.app.github.dev/'
			 },
			 login: async(email,password) => {
		
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json"
				  },
				  body: JSON.stringify({
					"email": email,
					"password": password
				  })
				}

				try {
					const resp = await fetch("https://automatic-dollop-465jj7w657j3jqqv-3001.app.github.dev/api/token", opts)
						let data = await resp.json()
						console.log(data?.access_token)
						localStorage.setItem("token", data.access_token)
						setStore({token: data.access_token})
						return true
					}
				catch(error) {
				  console.error("There was an error!",error)
				}
			  },

			 signup: async(firstName,lastName,email,password) => {
		
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json"
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
					firstname: firstName,
					lastname : lastName
				  })
				}

				try {
					const resp = await fetch("https://automatic-dollop-465jj7w657j3jqqv-3001.app.github.dev/api/signup", opts)
						let data = await resp.json()
						console.log(data)
						localStorage.setItem("user", data[1])
						setStore({user: data[0]})
						window.location.href = "https://automatic-dollop-465jj7w657j3jqqv-3000.app.github.dev/login"
						return true
					}
				catch(error) {
				  console.error("There was an error!",error)
				}
			  }

			



		}
	};
};

export default getState;
