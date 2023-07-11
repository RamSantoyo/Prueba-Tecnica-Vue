<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/Apis/apis.js"

const { getClientes, clientes, DeleteClient} = useGetData();

getClientes();

const refresh = () => {
    location.reload();
}

const deleteClient = (id) => {
    DeleteClient(id)
    .then( res => {
        alert('Cliente eliminado correctamente')
        refresh()
    })
}


</script>

<template>
    <div class="center">
        <h1>Lista de clientes</h1>
    </div>
    <div class="center">        
        <table>    
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody v-for="cliente in clientes" :key="cliente.id">
                <tr>            
                    <td>{{cliente.id}}</td>
                    <td>{{cliente.first_name}}</td>
                    <td>{{cliente.last_name}}</td>
                    <td>{{cliente.address}}</td>
                    <td>{{cliente.phone}}</td>
                    <td class="buttons">
                        <router-link :to="{name: 'editar', params: {id: cliente.id}}">
                            <button class="edit">Editar</button>
                        </router-link>
                        <button class="delete" @click="deleteClient(cliente.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
            <div class="center">
                <router-link to="/agregar">
                    <button class="add">Agregar</button>
                </router-link>
            </div>
        </table>
    </div>
</template>

<style>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
table{
    padding: 4rem;    
}
tr{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}
.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.add{
    padding: 1rem 4rem;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.edit{
    padding: 1rem 1.5rem;
    background-color: #ffb01e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.delete{
    padding: 1rem 1rem;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>