Vue.component('mfq-header',{
    template:`
        <header class="header">
            <span>
                <i class="iconfont" @click="back">&#xe679;</i>
            </span>
            <span>{{title}}</span>
            <span></span>
        </header>
    `,
    props:{
        title:{
             type:String,
             required:true
        }
    },
    methods:{
        back:function(){
            window.location.back();
        }
    }
});