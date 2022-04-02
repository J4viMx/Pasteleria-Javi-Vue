<template>
     <section class=" d-flex justify-content-center flex-column align-items-center">
        <h1 class="galeria-titulo">Conoce nuestros productos más recientes</h1>
        <div class="container-xl">
            <div class="row justify-content-around flex-wrap">
                <div v-for="(sabor, index) in $store.state.sabores" :key="index" class="col-md-2 d-flex flex-column align-items-center mb-5 p-1  border medida-pasteles contenedor-img-galeria">
                    <img class="img-galeria" v-bind:src="sabor.imagen" v-bind:alt="sabor.nombre">
                    <p>{{sabor.nombre}}</p>
                    <div class="precio-pastel">
                        <p>Precio ${{sabor.precio}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<script>
export default {
  name: 'Pasteles',
  
}
</script>

<style>
    .medida-pasteles{
        flex: 0 0 auto;
        width: 24%;
    }

    .flex-wrap{
        flex-wrap: wrap;
        column-gap: 1rem;
    }

    @media (max-width: 768px) {
        .medida-pasteles{
            width: 90%;
        }
    }

</style>