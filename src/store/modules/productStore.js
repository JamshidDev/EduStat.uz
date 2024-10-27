import i18n from "../../i18n/index.js"
const {t} = i18n.global


export const useProductStore = defineStore('productStore', {
    state:()=>({
        list:[],
        totalItems:0,
        loading:false,
        saveLoading:false,
        deleteLoading:false,
        elementId:null,
        visible:false,
        visibleType:true,
        params:{
            search:null,
            page:1,
            size:10,
        },
        payload:{
            name:null,
            description:null,
            category:null,
            brand:null,
            remains:null,
            price:null,
            variants:[],
        },

    }),
    getters:{

    },
    actions:{
        _index(){
            this.loading = true
            $ApiService.productService._index({params:this.params}).then((res)=>{
                console.log(res.data)
            }).finally(()=>{
                this.loading = false
            })
        },


    }
})