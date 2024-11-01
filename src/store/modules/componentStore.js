import i18n from "@/i18n/index.js"
const {t} = i18n.global

export const useComponentStore = defineStore('componentStore',{
    state:()=>({
        params:{
            search:null,
            page:1,
            size:10000,
        },

        categoryLoading:false,
        categoryList:[],

        productLoading:false,
        productList:[],

    }) ,
    getters:{

    },
    actions:{
        _categoryList(){
            this.categoryLoading = true
            $ApiService.categoryService._getCategories({params:this.params}).then((res)=>{
                this.categoryList = res.data.items
            }).finally(()=>{
                this.categoryLoading = false
            })
        },
        _productList(){
            this.productLoading = true
            $ApiService.productService._index({params:this.params}).then((res)=>{
                this.productLoading = res.data.items
            }).finally(()=>{
                this.productLoading = false
            })
        },
    }
})