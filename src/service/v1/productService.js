import axios from "../index.js"

const _index = async (payload)=>{
    return await axios.get(`/product`, {params:payload?.params})
}
const _create = async (payload)=>{
    return await axios.post(`/product`, payload.data)
}

const _update = async (payload)=>{
    return await axios.put(`/product/${payload.id}`, payload.data)
}
const _detail= async (payload)=>{
    return await axios.get(`/product/${payload.id}`, )
}

const _delete = async (payload)=>{
    return await axios.delete(`/product/${payload.id}`, )
}


export default {
    _index,
    _create,
    _update,
    _delete,
    _detail,
}