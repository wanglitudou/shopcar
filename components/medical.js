Vue.component('mfq-medical',{
    template:`
            <div class="mfq-medical content_list">
            <div class="lists">
            <div class="one" @click="medical_checked">
                <a>
                  <label>   <span class="select-all" :class="{'select-all-active':item.checked}"></span>{{item.medical}}</label>
                </a>
            </div>
            <div class="two" v-swipe:right="cb_right" v-swipe:left v-swipe:left="cb_left">
                <div class="left">
                    <a>￥{{item.price}}</a>
                </div>
                <div class="right">
                    <button class="min" @click="decrement">-</button>
                    <button class="num">{{item.count}}</button>
                    <button class="max" @click="increment">+</button>
                </div>
               <div class="del" :class="{'del-active':isDel}">删除</div>
            </div>
        </div>
    
      </div>
    `,
    props:{
        item:{
            required:true,
            type:Object
        },
        medical_index:{},
        hospital_index:{}
        // selectall:{
        //     type:Boolean
        // }
    },
    data:function(){
        return {
            isDel:false
            // selected:this.selectall,
            // selected: false,
            // count:1
        }
      },
      methods:{
        medical_checked(){
            this.$store.commit('change_medical_checked',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                checked:!this.item.checked
            })
            this.$store.commit('update_total_price')
        },
        cb_right(){
            this.isDel=false
        },
        cb_left(){
            this.isDel=true
       },  
        increment(){
            this.$store.commit('change_medical_count',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                count:++this.item.count
            })
            this.$store.commit('update_total_price')
        },
        decrement(){
            this.$store.commit('change_medical_count',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                count:--this.item.count
            })
            this.$store.commit('update_total_price')
        },
        removes(){  
        }
      }
})