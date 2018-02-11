Vue.component('mfq-hospital',{
    template:`
    <div class="lists">
    <p class="list_title" @click="toggle">
     <span class="select-all" :class="{'select-all-active':selectall}"></span>{{name}}
        
    </p>
    <div class="liuyan">
    <span>订单留言</span>
    <span></span>
    <span>
        <i class="iconfont">&#xe6a3;</i>
    </span>
    </div>
    <mfq-medical v-for="(item,i) in medical_list" :key="i" :medical_index="i" :hospital_index="index" :item="item"></mfq-medical>	
</div>
 `,
 props:{
     name:{
         required:true,
         type:String
     },
     medical_list:{
        type:Array   
     },
     selectall:{
         type:Boolean
     },
     index:{
         type:Number
     }
 },
 data: function(){
     return {
         active:this.selectall
     }
 },
 methods:{ 
     toggle(){
        
         this.$store.commit('change_selected_all',{
             index:this.index,
             selected_all:!this.selectall
         })
         this.$store.commit('update_total_price')
        //  this.active=!this.active;
        //  this.$emit('selectall',this.active)
     }
 }

})