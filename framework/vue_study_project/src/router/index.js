import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

const createRouter=()=> new Router(
    {
        routes:[
            {
                path:'/',
                name:'home',
                component:()=>import('../components/home'),
                redirect:'simple-line',
                children:[
                    {
                        path:'simple-line',
                        component:()=>import('../components/echarts/SimpleLine')
                    },
                    {
                        path:'smooth-line',
                        component:()=>import('../components/echarts/SmoothLine')
                    },
                    {
                        path:'fantastic',
                        component:()=>import('../components/echarts/fantasticChart')
                    },

                    {
                        path:'mindmap',
                        component:()=>import('../components/echarts/mindmap')
                    }
                    ,
                    {
                        path:'demo1',
                        component:()=>import('../components/demo/demo1')
                    },
                    {
                        path:'demo2',
                        component:()=>import('../components/demo/SvgDraw')
                    },
                    {
                        path:'stickyMenu',
                        component:()=>import('../components/demo/stickyMenu')
                    },
                    {
                        path:'buttons',
                        component:()=>import('../components/button/index')
                    }
                ]
            }
        ]
    }
)
const router=createRouter()
export default router
