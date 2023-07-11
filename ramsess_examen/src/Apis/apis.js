import axios from "axios";
import {ref} from "vue";

export const useGetData = () => {

    const clientes = ref([]);

    async function getClientes() {
        try {
            const res = await axios.get('https://backend.glampingmexico.com/portal/api/exam/client', {
            headers: {
              'User': 'ramsesssantoyo66@gmail.com', 
              'Content-Type': 'application/json'
            }
            });
            clientes.value = res.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function getCliente(id) {
        try {
            const res = await axios.get(`https://backend.glampingmexico.com/portal/api/exam/client/${id}/`, {
            headers: {
                'User': 'ramsesssantoyo66@gmail.com', 
                'Content-Type': 'application/json'
            }
            });            
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function postClientes(data) {
        try {
            const res = await axios.post('https://backend.glampingmexico.com/portal/api/exam/client/', data, {
            headers: {
                'User': 'ramsesssantoyo66@gmail.com', 
                'Content-Type': 'application/json'
            }
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    async function DeleteClient(id) {
        try {
            const res = await axios.delete(`https://backend.glampingmexico.com/portal/api/exam/client/${id}/`, {
            headers: {
                'User': 'ramsesssantoyo66@gmail.com', 
                'Content-Type': 'application/json'
            }
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    async function putCliente(data, id) {
        try {
            const res = await axios.put(`https://backend.glampingmexico.com/portal/api/exam/client/${id}/`, data, {
            headers: {
                'User': 'ramsesssantoyo66@gmail.com', 
                'Content-Type': 'application/json'
            },
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return{getClientes, clientes, postClientes , DeleteClient, getCliente, putCliente};
};