Vue.component('mfq-footer',{
template:`
        <footer class="footer">
        <div class="footer-one">  
            <p>每日还款:
                <span>￥4000.00/期</span>  
            </p>
        </div>
        <div class="footer-two">
            <div>
                <i class="iconfont">3期</i>
                <a href="#">(0手续费)</a>
            </div>
            <div>
                <i class="iconfont">6期</i>
                <a href="#">(0手续费)</a>
            </div>
            <div>
                <i class="iconfont">9期</i>
                <a href="#">(0手续费)</a>
            </div>
            <div>
                <i class="iconfont">12期</i>
                <a href="#">(0手续费)</a>
            </div>
        </div>

        <div class="footer-three">
            <div class="left">
                <span>申请分期</span>
            </div>
            <div class="right">
                <span>金额: <slot></slot></span>
            </div>
        </div>
        </footer>
`

})