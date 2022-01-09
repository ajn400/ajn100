import ex_one from "../pages/gasp_ex1";
import App from "../App"
interface router {
    path:string,
    component:any,
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/demo1',
                component:ex_one
            }
        ]
    },
]
export default routers

