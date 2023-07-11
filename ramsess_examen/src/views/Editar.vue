<script setup>
import { ref } from 'vue';
import { useGetData } from "@/Apis/apis.js"
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const { putCliente } = useGetData();

const firstname = ref('')
const lastname = ref('')
const adress = ref('')
const phone = ref('')

const editar = () => {
    if(!firstname.value || !lastname.value || !adress.value || !phone.value){
        alert('Todos los campos son obligatorios')
    } else if( phone.value.length < 10){
        alert('El número de teléfono debe tener 10 dígitos')
    } 
    else{
        putCliente(id, {
            first_name: firstname.value,
            last_name: lastname.value,
            address: adress.value,
            phone: phone.value             
        })
        .then(res => {
            console.log(res)
            alert('Cliente editado correctamente')
            firstname.value = ''
            lastname.value = ''
            adress.value = ''
            phone.value = ''
        })
    }
}

const validaText = (e) => {
    const re = /^[a-zA-Z ]*$/
    if(!re.test(e.key)){
        e.preventDefault()
    }
}

const validateInput = () => {
    // Eliminar caracteres especiales del número de teléfono
    phone.value = phone.value.replace(/[^\d]/g, '')

    // Limitar el número de dígitos a 10
    if (phone.value.length > 10) {
        phone.value = phone.value.slice(0, 10)
    }
}
</script>

<template>
    <div class="centrartitle">
        <h1>Editar cliente</h1>
    </div> 
        <form @submit.prevent="editar">
            <div class="campo">
                <label for="title">Nombre</label>
                <input type="text" v-model="firstname" placeholder="Nombres" @keypress="validaText">
            </div>
            <div class="campo">
                <label for="title">Apellido</label>
                <input type="text" v-model="lastname" placeholder="Apellidos" @keypress="validaText">
            </div>
            <div class="campo">
                <label for="title">Dirección</label>
                <input type="text" v-model="adress" placeholder="Dirección" @keypress="validaText">
            </div>
            <div class="campo">
                <label for="title">Número</label>
                <input type="text" v-model="phone" placeholder="Numero" maxlength="10" @input="validateInput">
            </div>
            <button type="submit" class="addclient">Editar Cliente</button>
        </form>
</template>

<style>
.centrartitle{
    text-align: center;
    margin-top: 4%;
    margin-bottom: 5%;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.campo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

label{
    font-size: 1.4rem;
    font-weight: bold;
}

input{
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.1rem;
}

.addclient{
    padding: 1rem 10%;
    margin-top: 2rem;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
}
</style>
