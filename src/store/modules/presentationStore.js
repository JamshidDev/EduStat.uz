import i18n from "../../i18n/index.js"
const {t} = i18n.global
import {defineStore} from "pinia"

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
                name:"Xorazm viloyati",
                tooltipId:'tooltip_2',
                state:'khorezm',
            },
            {
                id:'region3',
                name:"Navoiy viloyati",
                tooltipId:'tooltip_3',
                state:'navoiy',
            },
            {
                id:'region4',
                name:"Buxoro viloyati",
                tooltipId:'tooltip_4',
                state:'buxoro',
            },
            {
                id:'region5',
                name:"Samarqand viloyati",
                tooltipId:'tooltip_5',
                state:'samarqand',
            },
            {
                id:'region6',
                name:"Jizzax viloyati",
                tooltipId:'tooltip_6',
                state:'jizzax',
            },
            {
                id:'region7',
                name:"Qashqadaryo viloyati",
                tooltipId:'tooltip_7',
                state:'qashqadaryo',
            },
            {
                id:'region8',
                name:"Surxandaryo viloyati",
                tooltipId:'tooltip_8',
                state:'surxandaryo',
            },
            {
                id:'region9',
                name:"Tashkent viloyati",
                tooltipId:'tooltip_9',
                state:'tashkent',
            },
            {
                id:'region10',
                name:"Farg'ona viloyati",
                tooltipId:'tooltip_10',
                state:'fergana',
            },
            {
                id:'region11',
                name:"Andijon viloyati",
                tooltipId:'tooltip_11',
                state:'andijon',
            },
            {
                id:'region12',
                name:"Sirdaryo viloyati",
                tooltipId:'tooltip_12',
                state:'sirdaryo',
            },
            {
                id:'region13',
                name:"Namangan viloyati",
                tooltipId:'tooltip_13',
                state:'namangan',
            },
            {
                id:'region14',
                name:"Toshkent shahar",
                tooltipId:'tooltip_14',
                state:'tashkentcity',
            },
        ],
        activeState:'uzbekistan',
        mapText:"Respublika bo'yicha",
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
        sirdaryoList:[
            {
                name:"Sardoba tumani",
                id:"district12_1",
                tooltipId:'tooltip12_1',
            },
            {
                name:"Oqoltin tumani",
                id:"district12_2",
                tooltipId:'tooltip12_2',
            },
            {
                name:"Xovos tumani",
                id:"district12_3",
                tooltipId:'tooltip12_3',
            },
            {
                name:"Mirzaobod tumani",
                id:"district12_4",
                tooltipId:'tooltip12_4',
            },
            {
                name:"boyovut tumani",
                id:"district12_5",
                tooltipId:'tooltip12_5',
            },
            {
                name:"Guliston tumani",
                id:"district12_6",
                tooltipId:'tooltip12_6',
            },
            {
                name:"Sayxunobod tumani",
                id:"district12_7",
                tooltipId:'tooltip12_7',
            },
            {
                name:"Sirdaryo shahar",
                id:"district12_8",
                tooltipId:'tooltip12_8',
            },
        ],
        namanganList:[
            {
                name:"Pop tumani",
                id:"district13_1",
                tooltipId:'tooltip13_1',
            },
            {
                name:"chust tumani",
                id:"district13_2",
                tooltipId:'tooltip13_2',
            },
            {
                name:"Mingbuloq tumani",
                id:"district13_3",
                tooltipId:'tooltip13_3',
            },
            {
                name:"To'raqo'rg'on tumani",
                id:"district13_4",
                tooltipId:'tooltip13_4',
            },
            {
                name:"Namangan shahri",
                id:"district13_5",
                tooltipId:'tooltip13_5',
            },
            {
                name:"Kosonsoy tumani",
                id:"district13_6",
                tooltipId:'tooltip13_6',
            },
            {
                name:"Yangiqo'rg'on tumani",
                id:"district13_7",
                tooltipId:'tooltip13_7',
            },
            {
                name:"Chortoq tumani",
                id:"district13_8",
                tooltipId:'tooltip13_8',
            },
            {
                name:"Norin tumani",
                id:"district13_9",
                tooltipId:'tooltip13_9',
            },
            {
                name:"Uchqo'rg'on tumani",
                id:"district13_10",
                tooltipId:'tooltip13_10',
            },

        ],
        andijonList:[
            {
                name:"Ulug'nor tumani",
                id:"district11_1",
                tooltipId:'tooltip11_1',
            },
            {
                name:"Baliqchi tumani",
                id:"district11_2",
                tooltipId:'tooltip11_2',
            },
            {
                name:"Bo'z tumani",
                id:"district11_3",
                tooltipId:'tooltip11_3',
            },
            {
                name:"Oltinko'l tumani",
                id:"district11_4",
                tooltipId:'tooltip11_4',
            },
            {
                name:"Shahrixon tumani",
                id:"district11_5",
                tooltipId:'tooltip11_5',
            },
            {
                name:"Asaka tumani",
                id:"district11_6",
                tooltipId:'tooltip11_6',
            },
            {
                name:"Marhamat tumani",
                id:"district11_7",
                tooltipId:'tooltip11_7',
            },
            {
                name:"Buloqboshi tumani",
                id:"district11_8",
                tooltipId:'tooltip11_8',
            },
            {
                name:"Andijon tumani",
                id:"district11_9",
                tooltipId:'tooltip11_9',
            },
            {
                name:"Izboskan tumani",
                id:"district11_10",
                tooltipId:'tooltip11_10',
            },
            {
                name:"Paxtaobod tumani",
                id:"district11_11",
                tooltipId:'tooltip11_11',
            },
            {
                name:"Jalaquduq tumani",
                id:"district11_12",
                tooltipId:'tooltip11_12',
            },
            {
                name:"Xo'jaobod tumani",
                id:"district11_13",
                tooltipId:'tooltip11_13',
            },
            {
                name:"Qo'rg'ontepa tumani",
                id:"district11_14",
                tooltipId:'tooltip11_14',
            },
        ],
        ferganaList:[
            {
                name:"Beshariq tumani",
                id:"district10_1",
                tooltipId:'tooltip10_1',
            },
            {
                name:"O'zbekiston tumani",
                id:"district10_2",
                tooltipId:'tooltip10_2',
            },
            {
                name:"Furqat tumani",
                id:"district10_3",
                tooltipId:'tooltip10_3',
            },
            {
                name:"Qo'qon tumani",
                id:"district10_4",
                tooltipId:'tooltip10_4',
            },
            {
                name:"Uchko'prik tumani",
                id:"district10_5",
                tooltipId:'tooltip10_5',
            },
            {
                name:"Buvayda tumani",
                id:"district10_6",
                tooltipId:'tooltip10_6',
            },
            {
                name:"Bog'dod tumani",
                id:"district10_7",
                tooltipId:'tooltip10_7',
            },
            {
                name:"Rishton tumani",
                id:"district10_8",
                tooltipId:'tooltip10_8',
            },
            {
                name:"Oltiariq tumani",
                id:"district10_9",
                tooltipId:'tooltip10_9',
            },
            {
                name:"Yozyovon tumani",
                id:"district10_10",
                tooltipId:'tooltip10_10',
            },
            {
                name:"Qo'shtepa tumani",
                id:"district10_11",
                tooltipId:'tooltip10_11',
            },
            {
                name:"Farg'ona shahar",
                id:"district10_12",
                tooltipId:'tooltip10_12',
            },
            {
                name:"Toshloq tumani",
                id:"district10_13",
                tooltipId:'tooltip10_13',
            },
            {
                name:"Quva tumani",
                id:"district10_14",
                tooltipId:'tooltip10_14',
            },
            {
                name:"So'x tumani",
                id:"district10_15",
                tooltipId:'tooltip10_15',
            },
            {
                name:"Farg'ona tumani",
                id:"district10_16",
                tooltipId:'tooltip10_16',
            },
        ],
        mapData:[
            {
                state:"uzbekistan",
                content:[
                    {
                        title:"map.content.organizations",
                        value:10750,
                    },
                    {
                        title:"map.content.students",
                        value:6645119,
                    },
                    {
                        title:"map.content.teachers",
                        value:548546,
                    },
                    {
                        title:"map.content.student_boy",
                        value:3410420,
                    },
                    {
                        title:"map.content.student_girl",
                        value:3234699,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:4117,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:6633,
                    },
                ]
            },
            {
                state:"qoraqolpoq",
                content:[
                    {
                        title:"map.content.organizations",
                        value:752,
                    },
                    {
                        title:"map.content.students",
                        value:370829,
                    },
                    {
                        title:"map.content.teachers",
                        value:39394,
                    },
                    {
                        title:"map.content.student_boy",
                        value:188370,
                    },
                    {
                        title:"map.content.student_girl",
                        value:182459,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:246,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:506,
                    },
                ]
            },
            {
                state:"andijon",
                content:[
                    {
                        title:"map.content.organizations",
                        value:812,
                    },
                    {
                        title:"map.content.students",
                        value:612475,
                    },
                    {
                        title:"map.content.teachers",
                        value:44353,
                    },
                    {
                        title:"map.content.student_boy",
                        value:313523,
                    },
                    {
                        title:"map.content.student_girl",
                        value:298952,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:357,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:455,
                    },
                ]
            },
            {
                state:"buxoro",
                content:[
                    {
                        title:"map.content.organizations",
                        value:583,
                    },
                    {
                        title:"map.content.students",
                        value:337685,
                    },
                    {
                        title:"map.content.teachers",
                        value:30930,
                    },
                    {
                        title:"map.content.student_boy",
                        value:173427,
                    },
                    {
                        title:"map.content.student_girl",
                        value:164258,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:223,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:360,
                    },
                ]
            },
            {
                state:"jizzax",
                content:[
                    {
                        title:"map.content.organizations",
                        value:585,
                    },
                    {
                        title:"map.content.students",
                        value:275979,
                    },
                    {
                        title:"map.content.teachers",
                        value:25023,
                    },
                    {
                        title:"map.content.student_boy",
                        value:142343,
                    },
                    {
                        title:"map.content.student_girl",
                        value:133636,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:177,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:408,
                    },
                ]
            },
            {
                state:"qashqadaryo",
                content:[
                    {
                        title:"map.content.organizations",
                        value:1256,
                    },
                    {
                        title:"map.content.students",
                        value:673058,
                    },
                    {
                        title:"map.content.teachers",
                        value:61222,
                    },
                    {
                        title:"map.content.student_boy",
                        value:345309,
                    },
                    {
                        title:"map.content.student_girl",
                        value:327749,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:418,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:838,
                    },
                ]
            },
            {
                state:"navoiy",
                content:[
                    {
                        title:"map.content.organizations",
                        value:379,
                    },
                    {
                        title:"map.content.students",
                        value:192069,
                    },
                    {
                        title:"map.content.teachers",
                        value:21345,
                    },
                    {
                        title:"map.content.student_boy",
                        value:98015,
                    },
                    {
                        title:"map.content.student_girl",
                        value:94054,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:128,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:251,
                    },
                ]
            },
            {
                state:"namangan",
                content:[
                    {
                        title:"map.content.organizations",
                        value:766,
                    },
                    {
                        title:"map.content.students",
                        value:549449,
                    },
                    {
                        title:"map.content.teachers",
                        value:41178,
                    },
                    {
                        title:"map.content.student_boy",
                        value:281712,
                    },
                    {
                        title:"map.content.student_girl",
                        value:267737,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:403,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:10363,
                    },
                ]
            },
            {
                state:"samarqand",
                content:[
                    {
                        title:"map.content.organizations",
                        value:1323,
                    },
                    {
                        title:"map.content.students",
                        value:789220,
                    },
                    {
                        title:"map.content.teachers",
                        value:62409,
                    },
                    {
                        title:"map.content.student_boy",
                        value:404135,
                    },
                    {
                        title:"map.content.student_girl",
                        value:385085,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:387,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:936,
                    },
                ]
            },
            {
                state:"surxandaryo",
                content:[
                    {
                        title:"map.content.organizations",
                        value:987,
                    },
                    {
                        title:"map.content.students",
                        value:549186,
                    },
                    {
                        title:"map.content.teachers",
                        value:48363,
                    },
                    {
                        title:"map.content.student_boy",
                        value:280942,
                    },
                    {
                        title:"map.content.student_girl",
                        value:268244,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:336,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:651,
                    },
                ]
            },
            {
                state:"sirdaryo",
                content:[
                    {
                        title:"map.content.organizations",
                        value:337,
                    },
                    {
                        title:"map.content.students",
                        value:162746,
                    },
                    {
                        title:"map.content.teachers",
                        value:13607,
                    },
                    {
                        title:"map.content.student_boy",
                        value:83696,
                    },
                    {
                        title:"map.content.student_girl",
                        value:79050,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:107,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:230,
                    },
                ]
            },
            {
                state:"tashkent",
                content:[
                    {
                        title:"map.content.organizations",
                        value:917,
                    },
                    {
                        title:"map.content.students",
                        value:532672,
                    },
                    {
                        title:"map.content.teachers",
                        value:38480,
                    },
                    {
                        title:"map.content.student_boy",
                        value:273818,
                    },
                    {
                        title:"map.content.student_girl",
                        value:258854,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:313,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:604,
                    },
                ]
            },
            {
                state:"fergana",
                content:[
                    {
                        title:"map.content.organizations",
                        value:1043,
                    },
                    {
                        title:"map.content.students",
                        value:705336,
                    },
                    {
                        title:"map.content.teachers",
                        value:57765,
                    },
                    {
                        title:"map.content.student_boy",
                        value:359873,
                    },
                    {
                        title:"map.content.student_girl",
                        value:345463,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:423,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:620,
                    },
                ]
            },
            {
                state:"khorezm",
                content:[
                    {
                        title:"map.content.organizations",
                        value:581,
                    },
                    {
                        title:"map.content.students",
                        value:372159,
                    },
                    {
                        title:"map.content.teachers",
                        value:34338,
                    },
                    {
                        title:"map.content.student_boy",
                        value:189603,
                    },
                    {
                        title:"map.content.student_girl",
                        value:182556,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:170,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:411,
                    },
                ]
            },
            {
                state:"tashkentcity",
                content:[
                    {
                        title:"map.content.organizations",
                        value:429,
                    },
                    {
                        title:"map.content.students",
                        value:522256,
                    },
                    {
                        title:"map.content.teachers",
                        value:30139,
                    },
                    {
                        title:"map.content.student_boy",
                        value:275654,
                    },
                    {
                        title:"map.content.student_girl",
                        value:246602,
                    },
                ],
                tooltip:[
                    {
                        title:"map.content.orgCity",
                        value:429,
                    },
                    {
                        title:"map.content.orgVillage",
                        value:0,
                    },
                ]
            },
        ],
        sidebarData:[],
        portalData:[
            {
                title:"Ta'limga davlat harajatlari",
                value:"161.3",
                extension:"trln so'm"
            },
            {
                title:"9-sinf bitiruvchilari",
                value:"499 291",
                extension:"nafar",
            },
            {
                title:"11-sinf bitiruvchilari",
                value:"387 001",
                extension:"nafar",
            },
            {
                title:"1-4 sinf o'quvchilari",
                value:"15 900",
                extension:"nafar",
            },

            {
                title:"5-9 sinf o'quvchilari",
                value:"3 089 600",
                extension:"nafar"
            },
            {
                title:"10-11 sinf o'quvchilari",
                value:"899 400",
                extension:"nafar"
            },
            {
                title:"Ta'limdagi o'quvchi o'rinlari",
                value:"6 530 863",
                extension:"ta",
            },
            {
                title:"O'quvchilar soni",
                value:"6 645 119",
                extension:"nafar",
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

                    const region =  this.mapData.filter((x)=>x.state ===v.state)
                    if(region.length === 1){
                        const {tooltip} = region[0]
                        nodes[1].innerHTML =t(tooltip[0].title)+ ' : ' + tooltip[0].value
                        nodes[2].innerHTML = t(tooltip[1].title)+ ' : ' + tooltip[1].value
                    }
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
        hideSirdaryo(){
            this.sirdaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        sirdaryoEvents(){
            this.sirdaryoList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideSirdaryo()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideNamangan(){
            this.namanganList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        namanganEvents(){
            this.namanganList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideNamangan()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideAndijon(){
            this.andijonList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        andijonEvents(){
            this.andijonList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideAndijon()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        hideFergana(){
            this.ferganaList.forEach((v)=>{
                const element = document.getElementById(v.id)
                document.getElementById(v.tooltipId).style.visibility = 'hidden'
                element.style.fill = '#BFE2C8'
            })
        },
        ferganaEvents(){
            this.ferganaList.forEach((v)=>{
                const element = document.getElementById(v.id)
                element.addEventListener('click', ()=>{
                    this.changeState('uzbekistan')
                })
                element.addEventListener('mouseover', ()=>{
                    this.hideFergana()
                    const nodes = document.querySelectorAll(`#${v.tooltipId} g text tspan`)
                    nodes[0].innerHTML = v.name
                    nodes[1].innerHTML = 'Shaharlar soni: 2345'
                    nodes[2].innerHTML = 'Qishloqlar soni: 4590'
                    element.style.fill = '#51A8FE'
                    document.getElementById(v.tooltipId).style.visibility = 'visible'
                })

            })
        },
        changeSidebarData(state){
            const region =  this.mapData.filter((x)=>x.state ===state)
            if(region.length === 1){
                this.sidebarData = region[0].content
            }
        },




        changeState(state){
            this.activeState = state
            this.changeMapText(state)
            this.changeSidebarData(state)
        },

        changeMapText(state){
            let region = this.regionList.filter((v)=>v.state === state)
            if(region.length>0){
                this.mapText = region[0].name
            }else{
                this.mapText = "Respublika bo'yicha"
            }
        },


    }
})