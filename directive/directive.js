Vue.directive('swipe', {
    bind: function (el, bindings, vnode) {
        var start, end,stime,etime,{arg,value}=bindings;
        el.addEventListener('touchstart', function (e) {
            start = e.touches[0].clientX;
            stime=new Date().getTime();
        })
        el.addEventListener('touchmove', function (e) {
            end = e.touches[0].pageX
        })
        el.addEventListener('touchend', function (e) {
            etime=new Date().getTime();
            if(arg=='left' &&end-start < 0 && Math.abs(end-start)>30 && etime-stime<500 ){
//    console.log(11);
   value()
            }
            if(arg=='right' && end-start> 0 && Math.abs(end-start)>30 && etime-stime<500){
                // console.log(22);
                value()
            }
           
        })
    },
    inserted: function (el, bindigs, vnode) {

    },
    updata() {
        // console.log("updata")
    },
    componentUpdated() {
        // console.log("componentUpdated")
    },
    unbind() {
        // console.log("unbind")
    }
})