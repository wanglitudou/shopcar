let store = new Vuex.Store({
    state: {
        hospital_list: [],
        total_price:0
    },
    mutations: {
        update_hospital_list(state, data) {
            state.hospital_list = data
        },
        change_selected_all(state, data) {
            state.hospital_list.forEach((item, index) => {
                if (index == data.index) {
                    item.selected_all = data.selected_all;
                    item.medical_list.forEach((value) => {
                        value.checked = data.selected_all
                    })

                }
            })

        },
        //选中和非选中的状态的
        change_medical_checked(state, data) {
            console.log(data);
            // state.hospital_list.forEach((v, i) => {
            //     if (i == data.hospital_index) {
            //         v.medical_list.forEach((item, index) => {
            //             if (index == data.medical_index) {
            //                 item.checked = data.checked
            //             }
            //         })
            //     }
            // });
            state.hospital_list[data.hospital_index].medical_list[data.medical_index].checked=data.checked;
            //遍历所有的medical的数据。如果哟一个是未选中，就把全选为false，否则为true；
            var flag = true;  //表示全选状态
            state.hospital_list.forEach((v, i) => {
                if (i == data.hospital_index) {
                    v.medical_list.forEach((item, index) => {
                        if (!item.checked) {
                            flag = false;
                        }
                    })
                }

            });
            state.hospital_list.forEach((item, index) => {
                if (index == data.hospital_index) {
                    item.selected_all = flag;
                }
            })
        }, 

        change_medical_count(state,data){
            console.log(data);
            state.hospital_list[data.hospital_index].medical_list[data.medical_index].count=data.count;

        },
        update_total_price(state){
            let sum=0;
            state.hospital_list.forEach((item,index)=>{
                item.medical_list.forEach((v,i)=>{
                      if(v.checked){
                          sum+=v.count*v.price;
                      }
                })
            })  
            state.total_price=sum;
        }

    },
    actions:{
        fetch_hospital_list({commit}){
            fetch('./server/data.json').then(res => {
                return res.json()
            }).then(res =>{
            commit('update_hospital_list',res["hospital-list"])
            })
        }
    }
})
//生成一快照
store.subscribe(function (data) {
    console.log(data)
})