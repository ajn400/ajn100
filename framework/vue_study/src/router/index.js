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
                    }
                ]
            }
        ]
    }
)
const router=createRouter()
export default router