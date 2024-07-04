const getState = ({ getStore, getActions, setStore }) => {
	/*
		getStore() --> Retorna todo lo que tiene el store
		getActions() --> Retorna todas las acciones disponibles(Todas las acciones)
		setStore({}) --> Enviamos lo que necesitamos modificar, pasar un objeto
	*/

	return {
		store: {
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
			user: {
				name: "Deimian Vásquez",
				age: 18
			},
			todos: [],
			urlBaseTodos: "https://playground.4geeks.com/todo"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			changeName: () => {
				setStore({
					user: {
						name: "Martin Coimbra"
					}
				})
			},
			getAllTask: async () => {
				try {
					let responde = await fetch(`${getStore().urlBaseTodos}/users/deimian`)
					let data = await responde.json()

					if (responde.status == 404) {
						// createUser()
						// getAllTask()
					} else {

						setStore({
							todos: data.todos
						})
					}
				} catch (error) {
					console.log(error)
				}
			},
			addTask: async (task) => {
				const store = getStore()
				const { urlBaseTodos } = store

				try {
					const responde = await fetch(`${urlBaseTodos}/todos/deimian`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(task)
					})

					if (responde.ok) {
						getActions().getAllTask()
						return true
					} else {
						console.log("debo manejar el error ")
						return false
					}
				} catch (error) {
					console.log(error)
				}
			},
			deleteTask: async (id) => {
				try {
					let response = await fetch(`${getStore().urlBaseTodos}/todos/${id}`, {
						method: "DELETE"
					})

					if (response.ok) {
						getActions().getAllTask()
						return true
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
