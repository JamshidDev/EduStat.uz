
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
                state:'qoraqolpoq',
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
                state:'navoiy',
            },
            {
                id:'region4',
                name:"Buxoro",
                tooltipId:'tooltip_4',
                state:'buxoro',
            },
            {
                id:'region5',
                name:"Samarqand",
                tooltipId:'tooltip_5',
                state:'samarqand',
            },
            {
                id:'region6',
                name:"Jizzax",
                tooltipId:'tooltip_6',
                state:'jizzax',
            },
            {
                id:'region7',
                name:"Qashqadaryo",
                tooltipId:'tooltip_7',
                state:'qashqadaryo',
            },
            {
                id:'region8',
                name:"Surxandaryo",
                tooltipId:'tooltip_8',
                state:'surxandaryo',
            },
            {
                id:'region9',
                name:"Tashkent",
                tooltipId:'tooltip_9',
                state:'tashkent',
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
        tashkentList:[
            {
                name:"Chinoz tumani",
                id:"district9_1",
                tooltipId:'tooltip9_1',
            },
            {
                name:"Quyichirchiq tumani",
                id:"district9_2",
                tooltipId:'tooltip9_2',
            },
            {
                name:"Oqqo'rg'on tumani",
                id:"district9_3",
                tooltipId:'tooltip9_3',
            },
            {
                name:"Bo'ka tumani",
                id:"district9_4",
                tooltipId:'tooltip9_4',
            },
            {
                name:"Yangiyo'l tumani",
                id:"district9_5",
                tooltipId:'tooltip9_5',
            },
            {
                name:"O'rtachirchiq tumani",
                id:"district9_6",
                tooltipId:'tooltip9_6',
            },
            {
                name:"Piskent tumani",
                id:"district9_7",
                tooltipId:'tooltip9_7',
            },
            {
                name:"Bekobod tumani",
                id:"district9_8",
                tooltipId:'tooltip9_8',
            },
            {
                name:"Zangiota tumani",
                id:"district9_9",
                tooltipId:'tooltip9_9',
            },
            {
                name:"Qibray tumani",
                id:"district9_10",
                tooltipId:'tooltip9_10',
            },
            {
                name:"Parkent tumani",
                id:"district9_11",
                tooltipId:'tooltip9_11',
            },
            {
                name:"Angren tumani",
                id:"district9_12",
                tooltipId:'tooltip9_12',
            },
            {
                name:"Bo'stonliq tumani",
                id:"district9_13",
                tooltipId:'tooltip9_13',
            },
            {
                name:"Yuqorichirchiq tumani",
                id:"district9_14",
                tooltipId:'tooltip9_14',
            },
        ],
        navoiyList:[
            {
                name:"Uchquduq tumani",
                id:"district3_1",
                tooltipId:'tooltip3_1',
            },
            {
                name:"Zarafshon tumani",
                id:"district3_2",
                tooltipId:'tooltip3_2',
            },
            {
                name:"Kanimex tumani",
                id:"district3_3",
                tooltipId:'tooltip3_3',
            },
            {
                name:"Nurota tumani",
                id:"district3_4",
                tooltipId:'tooltip3_4',
            },
            {
                name:"Xatirchi tumani",
                id:"district3_5",
                tooltipId:'tooltip3_5',
            },
            {
                name:"Navbahor tumani",
                id:"district3_6",
                tooltipId:'tooltip3_6',
            },
            {
                name:"Karmana tumani",
                id:"district3_7",
                tooltipId:'tooltip3_7',
            },
            {
                name:"Qiziltepa tumani",
                id:"district3_8",
                tooltipId:'tooltip3_8',
            },
        ],
        buxoroList:[
            {
                name:"Gala-Osiyo tumani",
                id:"district4_1",
                tooltipId:'tooltip4_1',
            },
            {
                name:"Qorako'l tumani",
                id:"district4_2",
                tooltipId:'tooltip4_2',
            },
            {
                name:"Jondor tumani",
                id:"district4_3",
                tooltipId:'tooltip4_3',
            },
            {
                name:"Peshku tumani",
                id:"district4_4",
                tooltipId:'tooltip4_4',
            },
            {
                name:"Ramiton tumani",
                id:"district4_5",
                tooltipId:'tooltip4_5',
            },
            {
                name:"Vobkent tumani",
                id:"district4_6",
                tooltipId:'tooltip4_6',
            },
            {
                name:"Shofirkon tumani",
                id:"district4_7",
                tooltipId:'tooltip4_7',
            },
            {
                name:"Buxoro shahar",
                id:"district4_8",
                tooltipId:'tooltip4_8',
            },
            {
                name:"Kogon tumani",
                id:"district4_9",
                tooltipId:'tooltip4_9',
            },
            {
                name:"Qoravulbozor tumani",
                id:"district4_10",
                tooltipId:'tooltip4_10',
            },
            {
                name:"Buxoro tumani",
                id:"district4_11",
                tooltipId:'tooltip4_11',
            },
            {
                name:"G'ijduvon tumani",
                id:"district4_12",
                tooltipId:'tooltip4_12',
            },
            {
                name:"Olot tumani",
                id:"district4_13",
                tooltipId:'tooltip4_13',
            },
        ],
        qoraqolpoqList:[
            {
                name:"Qoʼngʼirot tumani",
                id:"district1_1",
                tooltipId:'tooltip1_1',
            },
            {
                name:"Mo'ynoq tumani",
                id:"district1_2",
                tooltipId:'tooltip1_2',
            },
            {
                name:"Taxtako'pir tumani",
                id:"district1_3",
                tooltipId:'tooltip1_3',
            },
            {
                name:"Chimboy tumani",
                id:"district1_4",
                tooltipId:'tooltip1_4',
            },
            {
                name:"Kegeyli tumani",
                id:"district1_5",
                tooltipId:'tooltip1_5',
            },
            {
                name:"Qorao'zak tumani",
                id:"district1_6",
                tooltipId:'tooltip1_6',
            },
            {
                name:"Nukus shahri",
                id:"district1_7",
                tooltipId:'tooltip1_7',
            },
            {
                name:"Qonliko'l tumani",
                id:"district1_8",
                tooltipId:'tooltip1_8',
            },
            {
                name:"Shumanay tumani",
                id:"district1_9",
                tooltipId:'tooltip1_9',
            },
            {
                name:"Xo'jayli tumani",
                id:"district1_10",
                tooltipId:'tooltip1_10',
            },
            {
                name:"Amudaryo tumani",
                id:"district1_11",
                tooltipId:'tooltip1_11',
            },
            {
                name:"Beruniy tumani",
                id:"district1_12",
                tooltipId:'tooltip1_12',
            },
            {
                name:"Ellikqa'la tumani",
                id:"district1_13",
                tooltipId:'tooltip1_13',
            },
            {
                name:"To'rtko'l tumani",
                id:"district1_14",
                tooltipId:'tooltip1_14',
            },
        ],
        samarqandList:[
            {
                name:"Nurobod tumani",
                id:"district5_1",
                tooltipId:'tooltip5_1',
            },
            {
                name:"Paxtachi tumani",
                id:"district5_2",
                tooltipId:'tooltip5_2',
            },
            {
                name:"Narpay tumani",
                id:"district5_3",
                tooltipId:'tooltip5_3',
            },
            {
                name:"Kattaqo'rg'on tumani",
                id:"district5_4",
                tooltipId:'tooltip5_4',
            },
            {
                name:"Pastdarg'om tumani",
                id:"district5_5",
                tooltipId:'tooltip5_5',
            },
            {
                name:"Ishtixon tumani",
                id:"district5_6",
                tooltipId:'tooltip5_6',
            },
            {
                name:"Qo'shrabod tumani",
                id:"district5_7",
                tooltipId:'tooltip5_7',
            },
            {
                name:"Poyariq tumani",
                id:"district5_8",
                tooltipId:'tooltip5_8',
            },
            {
                name:"Jomboy tumani",
                id:"district5_9",
                tooltipId:'tooltip5_9',
            },
            {
                name:"Bulung'ur tumani",
                id:"district5_10",
                tooltipId:'tooltip5_10',
            },
            {
                name:"Toyloq tumani",
                id:"district5_11",
                tooltipId:'tooltip5_11',
            },
            {
                name:"Urgut tumani",
                id:"district5_12",
                tooltipId:'tooltip5_12',
            },
            {
                name:"Samarqand tumani",
                id:"district5_13",
                tooltipId:'tooltip5_13',
            },
            {
                name:"Oqdaryo tumani",
                id:"district5_14",
                tooltipId:'tooltip5_14',
            },
        ],
        qashqadaryoList:[
            {
                name:"Mirishkor tumani",
                id:"district7_1",
                tooltipId:'tooltip7_1',
            },
            {
                name:"Muborak tumani",
                id:"district7_2",
                tooltipId:'tooltip7_2',
            },
            {
                name:"Nishon tumani",
                id:"district7_3",
                tooltipId:'tooltip7_3',
            },
            {
                name:"Kasbi tumani",
                id:"district7_4",
                tooltipId:'tooltip7_4',
            },
            {
                name:"Koson tumani",
                id:"district7_5",
                tooltipId:'tooltip7_5',
            },
            {
                name:"Qarshi tumani",
                id:"district7_6",
                tooltipId:'tooltip7_6',
            },
            {
                name:"G'uzor tumani",
                id:"district7_7",
                tooltipId:'tooltip7_7',
            },
            {
                name:"Chiroqchi tumani",
                id:"district7_8",
                tooltipId:'tooltip7_8',
            },
            {
                name:"Qamashi tumani",
                id:"district7_9",
                tooltipId:'tooltip7_9',
            },
            {
                name:"Dexqonobod tumani",
                id:"district7_10",
                tooltipId:'tooltip7_10',
            },
            {
                name:"Yakkabog' tumani",
                id:"district7_11",
                tooltipId:'tooltip7_11',
            },
            {
                name:"Kitob tumani",
                id:"district7_12",
                tooltipId:'tooltip7_12',
            },
            {
                name:"Shaxrisabz tumani",
                id:"district7_13",
                tooltipId:'tooltip7_13',
            },

        ],
        surxandaryoList:[
            {
                name:"Sherobod tumani",
                id:"district8_1",
                tooltipId:'tooltip8_1',
            },
            {
                name:"Boysun tumani",
                id:"district8_2",
                tooltipId:'tooltip8_2',
            },
            {
                name:"Jarqo'rg'on tumani",
                id:"district8_3",
                tooltipId:'tooltip8_3',
            },
            {
                name:"Termiz tumani",
                id:"district8_4",
                tooltipId:'tooltip8_4',
            },
            {
                name:"Qumqo'rg'on tumani",
                id:"district8_5",
                tooltipId:'tooltip8_5',
            },
            {
                name:"Qiziriq tumani",
                id:"district8_6",
                tooltipId:'tooltip8_6',
            },
            {
                name:"Denov tumani",
                id:"district8_7",
                tooltipId:'tooltip8_7',
            },
            {
                name:"Uzun tumani",
                id:"district8_8",
                tooltipId:'tooltip8_8',
            },
            {
                name:"Sariosiyo tumani",
                id:"district8_9",
                tooltipId:'tooltip8_9',
            },
        ],
        jizzaxList:[
            {
                name:"Forish tumani",
                id:"district6_1",
                tooltipId:'tooltip6_1',
            },
            {
                name:"G'allaorol tumani",
                id:"district6_2",
                tooltipId:'tooltip6_2',
            },
            {
                name:"Baxmal tumani",
                id:"district6_3",
                tooltipId:'tooltip6_3',
            },
            {
                name:"Zomin tumani",
                id:"district6_4",
                tooltipId:'tooltip6_4',
            },
            {
                name:"Jizzax tumani",
                id:"district6_5",
                tooltipId:'tooltip6_5',
            },
            {
                name:"Yangiobod tumani",
                id:"district6_6",
                tooltipId:'tooltip6_6',
            },
            {
                name:"Zarbdor tumani",
                id:"district6_7",
                tooltipId:'tooltip6_7',
            },
            {
                name:"Paxtakor tumani",
                id:"district6_8",
                tooltipId:'tooltip6_8',
            },
            {
                name:"Zafarobod tumani",
                id:"district6_9",
                tooltipId:'tooltip6_9',
            },
            {
                name:"Arnasoy tumani",
                id:"district6_10",
                tooltipId:'tooltip6_10',
            },
            {
                name:"Do'stlik tumani",
                id:"district6_11",
                tooltipId:'tooltip6_11',
            },
            {
                name:"Mirzacho'l tumani",
                id:"district6_12",
                tooltipId:'tooltip6_12',
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
        hideTashkent(){
            this.tashkentList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        tashkentEvents(){
            this.tashkentList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideTashkent()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    console.log(element)
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        navoiyEvents(){
            this.navoiyList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideNavoiy()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideNavoiy(){
            this.navoiyList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        hideBuxoro(){
            this.buxoroList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        buxoroEvents(){
            this.buxoroList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideBuxoro()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideQoraqolpoq(){
            this.qoraqolpoqList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        qoraqolpoqEvents(){
            this.qoraqolpoqList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideQoraqolpoq()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideSamarqand(){
            this.samarqandList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        samarqandEvents(){
            this.samarqandList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideSamarqand()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideQashqadaryo(){
            this.qashqadaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        qashqadaryoEvents(){
            this.qashqadaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideQashqadaryo()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideSurxandaryo(){
            this.surxandaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        surxandaryoEvents(){
            this.surxandaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideSurxandaryo()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideJizzax(){
            this.jizzaxList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        jizzaxEvents(){
            this.jizzaxList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideJizzax()
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