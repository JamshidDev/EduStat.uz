
import {defineStore} from "pinia"
import router from "@/router"
import {regionData} from "@/pages/statistic/resource/data.js"

export const usePresentationStore = defineStore("presentationStore", {
    state:()=>({
        regionList:[
            {
                id:'region1',
                name:"Qoraqolpog'iston",
                tooltipId:'tooltip_1',
                state:'khorezm',
            },
            {
                id:'region2',
                name:"Xorazm",
                tooltipId:'tooltip_2',
                state:'khorezm',
            },
            {
                id:'region3',
                name:"Navoiy",
                tooltipId:'tooltip_3',
                state:'khorezm',
            },
            {
                id:'region4',
                name:"Buxoro",
                tooltipId:'tooltip_4',
                state:'khorezm',
            },
            {
                id:'region5',
                name:"Samarqand",
                tooltipId:'tooltip_5',
                state:'khorezm',
            },
            {
                id:'region6',
                name:"Jizzax",
                tooltipId:'tooltip_6',
                state:'khorezm',
            },
            {
                id:'region7',
                name:"Qashqadaryo",
                tooltipId:'tooltip_7',
                state:'khorezm',
            },
            {
                id:'region8',
                name:"Surxandaryo",
                tooltipId:'tooltip_8',
                state:'khorezm',
            },
            {
                id:'region9',
                name:"Tashkent",
                tooltipId:'tooltip_9',
                state:'khorezm',
            },
            {
                id:'region10',
                name:"Farg'ona",
                tooltipId:'tooltip_10',
                state:'khorezm',
            },
            {
                id:'region11',
                name:"Andijon",
                tooltipId:'tooltip_11',
                state:'khorezm',
            },
            {
                id:'region12',
                name:"Sirdaryo",
                tooltipId:'tooltip_12',
                state:'khorezm',
            },
            {
                id:'region13',
                name:"Namangan",
                tooltipId:'tooltip_13',
                state:'khorezm',
            },
            {
                id:'region14',
                name:"Toshkent shahar",
                tooltipId:'tooltip_14',
                state:'tashkentcity',
            },
        ],
        activeState:'uzbekistan',
        korezmDistrict:[
            {
                name:"Gurlan tumani",
                id:"district2_1",
                tooltipId:'tooltip2_1',

            },
            {
                name:"Shovotr tumani",
                id:"district2_2",
                tooltipId:'tooltip2_2',
            },
            {
                name:"Yangibozor tumani",
                id:"district2_3",
                tooltipId:'tooltip2_3',
            },
            {
                name:"Qo'shko'pir tumani",
                id:"district2_4",
                tooltipId:'tooltip2_4',
            },
            {
                name:"Urganch tumani",
                id:"district2_5",
                tooltipId:'tooltip2_5',
            },
            {
                name:"Xiva tumani",
                id:"district2_6",
                tooltipId:'tooltip2_6',
            },
            {
                name:"Xonqa tumani",
                id:"district2_7",
                tooltipId:'tooltip2_7',
            },
            {
                name:"Yangiariq tumani",
                id:"district2_8",
                tooltipId:'tooltip2_8',
            },
            {
                name:"Bog'ot tumani",
                id:"district2_9",
                tooltipId:'tooltip2_9',
            },
            {
                name:"Xozarasp tumani",
                id:"district2_10",
                tooltipId:'tooltip2_10',
            },
        ],
        tashkentCity:[
            {
              name:'Olmazor',
              id:"district14_1",
              tooltipId:'tooltip14_1',
            },
            {
                name:'Yunusobod',
                id:"district14_2",
                tooltipId:'tooltip14_2',
            },
            {
                name:"M.Ulug'bek",
                id:"district14_3",
                tooltipId:'tooltip14_3',
            },
            {
                name:"Shayxontohur",
                id:"district14_4",
                tooltipId:'tooltip14_4',
            },
            {
                name:"Uchtepa",
                id:"district14_5",
                tooltipId:'tooltip14_5',
            },
            {
                name:"Chilonzor",
                id:"district14_6",
                tooltipId:'tooltip14_6',
            },
            {
                name:"Yakkasaroy",
                id:"district14_7",
                tooltipId:'tooltip14_7',
            },
            {
                name:"Mirobod",
                id:"district14_8",
                tooltipId:'tooltip14_8',
            },
            {
                name:"Yashnobod",
                id:"district14_9",
                tooltipId:'tooltip14_9',
            },
            {
                name:"Sirg'ali",
                id:"district14_10",
                tooltipId:'tooltip14_10',
            },
            {
                name:"Bektemir",
                id:"district14_11",
                tooltipId:'tooltip14_11',
            },
        ],
        filterActiveTab:1,
        fullScreen:false,


    }),

    getters:{

    },
    actions:{
        _initialEvent(){
            this.regionList.forEach((v) => {
                const element = document.getElementById(v.id)
                element.addEventListener('mouseover', (e) => {
                    this._hiddenAllElement()
                    element.style.fill = '#51A8FE'

                    const tooltip = document.getElementById(v.tooltipId)
                    const nodes = document.querySelectorAll(`#${v.tooltipId} text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    tooltip.style.visibility = 'visible'
                })
                element.addEventListener('click',()=>{
                    this.changeState(v.state)
                })
            })
        },
        _hiddenAllElement(){
            this.regionList.forEach((v) => {
                document.getElementById(v.id).style.fill = '#BFE2C8'
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
            })
        },
        _khorezmEvents(){
            this.korezmDistrict.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this._hideKhorezmElement()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        _hideKhorezmElement(){
            this.korezmDistrict.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },

        hideTashkentCity(){
            this.tashkentCity.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        tashkentCityEvents(){
            this.tashkentCity.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideTashkentCity()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },

        changeState(state){
            this.activeState = state
        }

    }
})