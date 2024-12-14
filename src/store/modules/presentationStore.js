
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
                coords:{
                    x:154,
                    y:11,
                    zoom:2
                }
            },
            {
                id:'region2',
                name:"Xorazm",
                tooltipId:'tooltip_2'
            },
            {
                id:'region3',
                name:"Navoiy",
                tooltipId:'tooltip_3'
            },
            {
                id:'region4',
                name:"Buxoro",
                tooltipId:'tooltip_4'
            },
            {
                id:'region5',
                name:"Samarqand",
                tooltipId:'tooltip_5'
            },
            {
                id:'region6',
                name:"Jizzax",
                tooltipId:'tooltip_6'
            },
            {
                id:'region7',
                name:"Qashqadaryo",
                tooltipId:'tooltip_7'
            },
            {
                id:'region8',
                name:"Surxandaryo",
                tooltipId:'tooltip_8'
            },
            {
                id:'region9',
                name:"Tashkent",
                tooltipId:'tooltip_9',
            },
            {
                id:'region10',
                name:"Farg'ona",
                tooltipId:'tooltip_10',
            },
            {
                id:'region11',
                name:"Andijon",
                tooltipId:'tooltip_11',
            },
            {
                id:'region12',
                name:"Sirdaryo",
                tooltipId:'tooltip_12',
            },
            {
                id:'region13',
                name:"Namangan",
                tooltipId:'tooltip_13',
            },
            {
                id:'region14',
                name:"Toshkent shahar",
                tooltipId:'tooltip_14',
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

        panning:false,
        scale:1,
        pointX:0,
        pointY:0,
        start:{
            x:0,
            y:0,
        },
        zoo_element:null,
        zoo_element_container:null,

        kharezm_element:null,
        kharezmCoords:{
            x:0,
            y:0,
            zoom:1,
        },
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
                    this.changeState('khorezm')
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
        changeState(state){
            this.activeState = state
        }

    }
})