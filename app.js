const app=Vue.createApp({
    //data, function
    data(){
        return{
            showBook:"ture",
            title:"Final Empire",
            author:'Emily',
            age:28
        }
    },
    methods:{
        changeTitle(title){
            this.title=title
        },
        hidebook(){
            this.showBook=false

        }
    }
})
app.mount("#app")