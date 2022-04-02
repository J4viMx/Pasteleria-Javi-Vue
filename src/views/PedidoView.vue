<template>

    <section class=" d-flex align-items-center contenedor-pedido">

        <div class="pedidoRealizado">
            <p>Pedido Realizado con exito</p>
        </div>
        
        <div class="mx-auto contenedor-formulario text-center margin-formulario">
            <h2 class=" text-white mx-auto my-5">Realiza tu pedido Aquí</h2>
            <form @submit.prevent="procesar">

            <div class="d-flex flex-column justify-content-center align-items-center">
                <label class="label-formulario text-white" for="Nombre">Nombre:</label>
                <input required v-model="pedido.nombre" class="input-formulario" type="text">

                <label class="label-formulario text-white" for="Telefono">Teléfono:</label>
                <input required v-model="pedido.telefono" class="input-formulario" type="tel">

                <label class="label-formulario text-white" for="E-mail">Email:</label>
                <input required v-model="pedido.email" class="input-formulario" type="email">

                <label for="descripcion" class="text-white">Descripción General:</label>
                <textarea v-model="pedido.descripcion" name="" id="" cols="30" rows="5"></textarea>
            </div>

                <fieldset class="d-flex flex-column">

                <label for="sabores" class="text-white">Selecciona el/los sabores que deseas:</label>
                    <div class="opciones">
                        <div class="opciones d-flex justify-content-around flex-wrap align-items-center">
                            <div class="medida-pasteles mt-5" v-for="(sabor, index) in $store.state.sabores" :key="index">
                                <label class="label-formulario text-white"  v-bind:for="sabor.nombre">{{sabor.nombre}}</label>
                                <input class="checkbox me-5" type="checkbox" v-bind:id="sabor.nombre" v-bind:value="sabor.nombre" v-model="pedido.sabores">
                            </div>
                        </div>
                    </div>

                </fieldset>

                <fieldset>

                    <label for="sabores" class="text-white">Selecciona los adornos de tu pastel:</label>
                    <div class="opciones">
                        <div class="opciones d-flex justify-content-around flex-wrap align-items-center">

                            <div class="medida-pasteles mt-5" v-for="(adorno, index) in $store.state.Adornos" :key="index">
                            <label class="label-formulario text-white" v-bind:for="adorno.nombre">{{adorno.nombre}}</label>
                            <input class="checkbox me-5"  type="checkbox" v-bind:id="adorno.nombre" v-bind:value="adorno.nombre" v-model="pedido.adornos">
                            </div>
                        </div>
                    </div>

                </fieldset>

                <input type="submit" class="btn btn-outline-warning">
            </form>
        </div>
    </section>

  <Footer/>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    Footer

  },
    data(){
      return{
        pedido: {
          nombre: '',
          telefono: '',
          email: '',
          descripcion: '',
          sabores: '',
          adornos: '',
          sabores: [],
          adornos: []
        }
      }
  },
  methods: {
      procesar()
      {

          this.$store.commit('agregarPedido',{
              nombre: this.pedido.nombre,
              telefono: this.pedido.telefono,
              email: this.pedido.email,
              descripcion: this.pedido.descripcion,
              sabores: this.pedido.sabores,
              adornos: this.pedido.adornos
          })
          event.target.reset();
          this.pedidoRealizado();
      },
      pedidoRealizado(){
          const notificacion = document.querySelector('.pedidoRealizado');
          notificacion.style.display = "block"

          setTimeout(() => {
              notificacion.style.display= "none"
          }, 3000);
      }

  }
}
</script>


<style>
    .my-5{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .text-white{
        color: #fff;
    }
    .me-5{
        margin-left: 2rem;
    }
    fieldset{
        border: none;
    }

    .btn-outline-warning{
        width: 20%;
        background: green;
        border-radius: 5px;
        color: white;
        padding: 5px;
        margin-top: 2rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
    }
    .pedidoRealizado{
        width: 40rem;
        height: 10rem;
        background-color: pink;
        color: white;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        position: fixed;
        bottom: 2%;
        right: 0;
        display: none;
    }
    .pedidoRealizado p{
        margin-top: 2rem;
    }
</style>