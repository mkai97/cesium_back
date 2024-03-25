
let jsonData = [
    {
        "name": "基础组件",
        "pathName": "BaseView"
    },
    {
        "name": "基础组件2",
        "pathName": "BaseView2"
    }
]





export default jsonData.map(item => {
    return {
        path: `${item.pathName}`,
        name: item.name,
        component: () => import(`@/views/CesiumDemo/${item.pathName}.vue`)
    };
}) 
