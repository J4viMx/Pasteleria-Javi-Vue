<template>

    <section class="container-xl text-center mb-5 mx-auto">
        <h2 class="pt-5 padding-5-y mx-auto">Adornos</h2>

        <div class="row justify-content-around">
            <div v-for="(adorno, index) in $store.state.Adornos" :key="index" class="col-md-2 d-flex flex-column align-items-center mb-5 p-1  border bg-white medida-pasteles .flex-wrap contenedor-img-galeria">
                <img class="img-galeria imagen-adornos" v-bind:src="adorno.imagen" v-bind:alt="adorno.imagen">
                <p>{{adorno.nombre}}</p>
                <div class="precio-pastel">
                    <p>Precio ${{adorno.precio}}</p>
                </div>
            </div>

        </div>

    </section>

</template>


<script>
export default {
  name: 'Adornos',
  
}
</script>