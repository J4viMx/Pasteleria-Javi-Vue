import { createStore } from 'vuex'

export default createStore({
  state: {
    prueba: 1,
    sabores: [
      {
        nombre: "Pastelitos",
        cantidad: 30,
        precio: 200,
        imagen: require('../assets/img/SaboresPastel/Kopia-Delicias_Muffins-scaled-e1612743410916-600x600.jpg')
      },
      {
        nombre: "Pastel de limón",
        cantidad: 40,
        precio: 250,
        imagen: require('../assets/img/SaboresPastel/Kopia-Delicias_pie_de_limon-scaled-e1612748614914-600x600.jpg')
      },
      {
        nombre: "Pastel del 3 leches",
        cantidad: 60,
        precio: 150,
        imagen: require('../assets/img/SaboresPastel/Kopia-Delicias_Postre-3-Leches-scaled-e1612741890790-600x600.jpg')
      },
      {
        nombre: "Pastel de berries",
        cantidad: 50,
        precio: 300,
        imagen: require('../assets/img/SaboresPastel/Kopia-Delicias_tartaleta_berries-scaled-e1612749812349-600x600.jpg')
      },
      {
        nombre: "Pastel de vainilla",
        cantidad: 40,
        precio: 250,
        imagen: require('../assets/img/SaboresPastel/Kopia-Torta_Bizcocho-Pina-Vainilla-scaled-e1613012282631-600x600.jpg')
      },
      {
        nombre: "Pastel de Nuez",
        cantidad: 20,
        precio: 180,
        imagen: require('../assets/img/SaboresPastel/Kopia-Torta_bizcocho_nuez-scaled-e1613010044483-600x600.jpg')
      },
      {
        nombre: "Pastel Dulce leche",
        cantidad: 10,
        precio: 190,
        imagen: require('../assets/img/SaboresPastel/Kopia-Torta_Hoja_lucuma_manjar-scaled-e1612743729675-600x600.jpg')
      },
      {
        nombre: "Pastel de Vainilla",
        cantidad: 30,
        precio: 250,
        imagen: require('../assets/img/SaboresPastel/Kopia-Torta_Hoja_Vainilla_Crema-scaled-e1613009003257-600x600.jpg')
      }
    ],

    Adornos: [
      {
        nombre: "Fruta",
        cantidad: 50,
        precio: 40,
        imagen: require('../assets/img/adornos/fruta.jpeg')
      },
      {
        nombre: "Chocolate",
        cantidad: 60,
        precio: 60,
        imagen: require('../assets/img/adornos/chocolate.jpg')
      },
      {
        nombre: "Cerezas",
        cantidad: 30,
        precio: 30,
        imagen: require('../assets/img/adornos/pastel-cereza.jpg')
      },
      {
        nombre: "Chantilli",
        cantidad: 100,
        precio: 30,
        imagen: require('../assets/img/adornos/chantillin.jpg')
      }

    ],

    pedidos:[
      {
        nombre: "Javier Juárez",
        telefono: "5544559483",
        email: "javi@correo.com",
        descripcion: "Pastel de 1 piso redondo",
        sabores: ['chocolate'],
        adornos: ["fruta"]
      }
    ]



  },
  getters: {
  },
  mutations: {
    agregarPedido(state, informacion) {
      state.pedidos.push(informacion)
    }
  },
  actions: {
  },
  modules: {
  }
})
