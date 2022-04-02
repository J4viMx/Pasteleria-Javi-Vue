
<template>

        <table class="mb-5">
            <thead>
                <tr>
                    <td>Sabores</td>
                    <td>Cantidad</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sabor, index) in $store.state.sabores" :key="index">
                    <th>{{sabor.nombre}}</th>
                    <th>{{sabor.cantidad}}</th>
                </tr>
            </tbody>
        </table>


</template>

<script>
export default {
  name: 'SaboresDisponibles',
  
}
</script>
