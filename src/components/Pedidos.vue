
<template>
    
<table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Télefono</td>
                    <td>E-mail</td>
                    <td>Descripción</td>
                    <td>Sabores</td>
                    <td>Adornos</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pedido, index) in $store.state.pedidos" :key="index">
                    <th>{{pedido.nombre}}</th>
                    <th>{{pedido.telefono}}</th>
                    <th>{{pedido.email}}</th>
                    <th>{{pedido.descripcion}}</th>
                    <th> {{pedido.sabores.join(', ')}} </th>
                    <th>{{pedido.adornos.join(', ')}}</th>
                </tr>

            </tbody>
        </table>


</template>

<script>
export default {
  name: 'Pedidos',
  
}
</script>
