import i18n from "../../i18n/index.js"
const {t} = i18n.global


export const useBrandStore = defineStore('brandStore', {
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
            store_id:'tpgF7UfNd6RN4e62TawtU6',
            image:[],
            name:null,
            description:null,
        },

    }),
    getters:{

    },
    actions:{
        _index(){
            this.loading = true
            $ApiService.brandService._index({params:this.params}).then((res)=>{
                this.list = res.data.items
                this.totalItems = res.data.total
            }).finally(()=>{
                this.loading = false
            })
        },

        _create(data){
            this.saveLoading = true
            $ApiService.brandService._create({data}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.saveLoading = false
            })
        },
        _update(){
            this.saveLoading = true
            const id = this.elementId
            let data = this.payload
            $ApiService.brandService._update({data, id}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.saveLoading = false
            })
        },
        _delete(){
            this.deleteLoading = true
            const id = this.elementId
            $ApiService.brandService._delete({id}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.deleteLoading = false
            })
        },
        openVisible(v){
            this.visible = v
        },

        _resetForm(){
            this.elementId = null
            this.payload.name = null
            this.payload.description = null
            this.payload.image = []
        },


    }
})