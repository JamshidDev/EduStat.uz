import axios from "../index.js"

const _index = async (payload)=>{
    return await axios.get(`/brand`, {params:payload?.params})
}
const _create = async (payload)=>{
    return await axios.post(`/brand`, payload.data)
}
const _update = async (payload)=>{
    return await axios.put(`/brand/${payload.id}`, payload.data)
}
const _detail= async (payload)=>{
    return await axios.get(`/brand/${payload.id}`, )
}

const _delete = async (payload)=>{
    return await axios.delete(`/brand/${payload.id}`, )
}


export default {
    _index,
    _create,
    _update,
    _delete,
    _detail,
}