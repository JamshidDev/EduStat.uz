import {defineStore} from "pinia"

export const useServiceStore = defineStore('servcieStore',{
    state:()=>({
        stepStatus:'process',
        currentStep:2,
        market:{
            name:null,
            description:null,
            bot_token:null,
            image:[],
        },
        marketSetting:{
            languages:['en'],
            contactPhone:null,
            address:null,
        },


        activeTab:2,
        tabList:[1,2,3,4],
        loading:false,
    }),
    getters:{

    },
    actions:{
        nextTab(){
           this.activeTab++
        },
        previousTab(){
            this.activeTab--
        },
        createStore(){
            // this.loading = true
            console.log(this.market)
        }

    }
})