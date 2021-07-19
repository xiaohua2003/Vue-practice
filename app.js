const app=Vue.createApp({
    //data, function
    data(){
        return{
            url:'http://www.thenetninja.co.uk',
            showBook:"ture",
            books:[
                {title:'name of the wind', author: 'emily',img:'assets/1.jpg', isFav:true},
                {title:'the way of kings', author: 'brandon',img:'assets/2.jpg', isFav:false},
                {title:'the final empire', author: 'brandon',img:'assets/3.jpg', isFav:true}
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBook= !this.showBook
        },
        handleEvent(e){
            console.log(e,e.type)
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY

        }
    }
})
app.mount("#app")