
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


    }),

    getters:{

    },
    actions:{
        _initialEvent(){
            this.regionList.forEach((v) => {
                const element = document.getElementById(v.id)
                element.addEventListener('click', (e) => {
                    this._hiddenAllElement()
                    element.style.fill = '#51A8FE'

                    if(v.coords){
                        this._goPushMap(v.coords.x,v.coords.y, v.coords.zoom)
                    }

                    const tooltip = document.getElementById(v.tooltipId)
                    // const title = document.querySelector(`#${v.tooltipId} text tspan`).innerHTML = "Title"
                    tooltip.style.visibility = 'visible'
                })
            })
        },
        _hiddenAllElement(){
            this.regionList.forEach((v) => {
                document.getElementById(v.id).style.fill = '#BFE2C8'
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
            })
        },
        _initialZoom(el, container){
            this.zoo_element = el
            this.zoo_element_container = container
            this.zoo_element.addEventListener('mousedown', (event) => {
                event.preventDefault();
                this.start = {
                    x: event.clientX - this.pointX,
                    y: event.clientY - this.pointY,
                };
                this.panning = true;
            })

            this.zoo_element.addEventListener('mouseup', (event) => {
                event.preventDefault();
                this.panning = false;
            })

            this.zoo_element.addEventListener('mousemove', (event) => {
                event.preventDefault();
                if (!this.panning) {
                    return;
                }
                this.pointX = (event.clientX - this.start.x);
                this.pointY = (event.clientY - this.start.y);
                this.zoo_element.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`

            });

            this.zoo_element.addEventListener('wheel', (event) => {
                event.preventDefault();
                const xs = (event.clientX - this.pointX) / this.scale;
                const ys = (event.clientY - this.pointY) / this.scale;
                const delta = (event.wheelDelta ? event.wheelDelta : -event.deltaY);
                delta > 0 ? this.scale *= 1.2 : this.scale /= 1.2;
                this.pointX = event.clientX - xs * this.scale;
                this.pointY = event.clientY - ys * this.scale;

                console.log(`pointX: ${this.pointX}`)
                console.log(`pointY: ${this.pointY}`)
                console.log(`scale: ${this.scale}`)
                this.zoo_element.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
            })

            this.zoo_element.addEventListener("mouseout", (event) => {
                this.panning = false;
            });
            this.zoo_element_container.addEventListener("contextmenu", (event) => {
                event.preventDefault();
            })
            document.body.style.overflow = "hidden";
            this.zoo_element_container.addEventListener("mouseover", (event) => {
                event.preventDefault();
                document.body.style.overflow = "hidden";
            })
            this.zoo_element_container.addEventListener("mouseout", (event) => {
                event.preventDefault();
                document.body.style.overflow = "auto";
            })
        },
        _goPushMap(x,y,zoom){
            this.pointX = x
            this.pointY = y
            this.scale = zoom
            this.zoo_element.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
        },
        _changeMap(){
            this._goPushMap(164,-33,1)
            setTimeout(()=>{
                this._goPushMap(790,493,0.23)
                this._pushKharezm(164,-33,1)
            },400)
        },
        _pushKharezm(x,y,zoom){
            this.kharezmCoords.x = x
            this.kharezmCoords.y = y
            this.kharezmCoords.zoom = zoom
            this.kharezm_element.style.transform = `translate(${this.kharezmCoords.x}px, ${this.kharezmCoords.y}px) scale(${this.kharezmCoords.zoom})`;
        }

    }
})