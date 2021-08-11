<template>
    <div>
        <div class="container" id="stickyMenuContainer">
            <dl class="sticky-stack" @scroll="scrollHandeler1">
                <dt>A</dt>
                <dd>阿里</dd>
                <dd>爱奇艺</dd>
                <dd>艾玛</dd>
                <dd>艾弗森</dd>
                <dd>奥利奥</dd>
                <dd>安利</dd>

                <dt>B</dt>
                <dd>Benin</dd>
                <dd>Botswana</dd>
                <dd>Burkina Faso</dd>
                <dd>Burundi</dd>

                <dt>C</dt>
                <dd>Cabo Verde</dd>
                <dd>Cameroon</dd>
                <dd>Central African Republic</dd>
                <dd>Chad</dd>
                <dd>Comoros</dd>
                <dd>Congo, Democratic Republic of the</dd>
                <dd>Congo, Republic of the</dd>
                <dd>Cote d'Ivoire</dd>

                <dt>D</dt>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>

                <dt>E</dt>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
            </dl>
            <dl class="sticky-stack" @scroll="throttle(scrollHandler2,1000)">
                <dt>A</dt>
                <dd>阿里</dd>
                <dd>爱奇艺</dd>
                <dd>艾玛</dd>
                <dd>艾弗森</dd>
                <dd>奥利奥</dd>
                <dd>安利</dd>

                <dt>B</dt>
                <dd>Benin</dd>
                <dd>Botswana</dd>
                <dd>Burkina Faso</dd>
                <dd>Burundi</dd>

                <dt>C</dt>
                <dd>Cabo Verde</dd>
                <dd>Cameroon</dd>
                <dd>Central African Republic</dd>
                <dd>Chad</dd>
                <dd>Comoros</dd>
                <dd>Congo, Democratic Republic of the</dd>
                <dd>Congo, Republic of the</dd>
                <dd>Cote d'Ivoire</dd>

                <dt>D</dt>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>

                <dt>E</dt>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
            </dl>
            <dl class="sticky-stack" @scroll="debounce(scrollHandler2,1000)()">
                <dt>A</dt>
                <dd>阿里</dd>
                <dd>爱奇艺</dd>
                <dd>艾玛</dd>
                <dd>艾弗森</dd>
                <dd>奥利奥</dd>
                <dd>安利</dd>

                <dt>B</dt>
                <dd>Benin</dd>
                <dd>Botswana</dd>
                <dd>Burkina Faso</dd>
                <dd>Burundi</dd>

                <dt>C</dt>
                <dd>Cabo Verde</dd>
                <dd>Cameroon</dd>
                <dd>Central African Republic</dd>
                <dd>Chad</dd>
                <dd>Comoros</dd>
                <dd>Congo, Democratic Republic of the</dd>
                <dd>Congo, Republic of the</dd>
                <dd>Cote d'Ivoire</dd>

                <dt>D</dt>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dt>E</dt>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
            </dl>
            <dl class="sticky-stack" @scroll="settimeout">
                <dt>A</dt>
                <dd>阿里</dd>
                <dd>爱奇艺</dd>
                <dd>艾玛</dd>
                <dd>艾弗森</dd>
                <dd>奥利奥</dd>
                <dd>安利</dd>

                <dt>B</dt>
                <dd>Benin</dd>
                <dd>Botswana</dd>
                <dd>Burkina Faso</dd>
                <dd>Burundi</dd>

                <dt>C</dt>
                <dd>Cabo Verde</dd>
                <dd>Cameroon</dd>
                <dd>Central African Republic</dd>
                <dd>Chad</dd>
                <dd>Comoros</dd>
                <dd>Congo, Democratic Republic of the</dd>
                <dd>Congo, Republic of the</dd>
                <dd>Cote d'Ivoire</dd>

                <dt>D</dt>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dd>Djibouti</dd>
                <dt>E</dt>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
            </dl>
        </div>
    </div>

</template>

<script>

    export default {
        name: "stickyMenu",
        methods: {
            scrollHandeler1(event) {
                event.target.style.backgroundColor="#"+parseInt(Math.random()*1000000)
                event.target.style.opacity=Math.random()
            },
            scrollHandler2(){
                document.querySelector("#stickyMenuContainer").className="container container"+parseInt(Math.random()*7)
            },
            debounce(fn,wait){
                var timer = null;
                return function(){
                    console.log("timer",timer)
                    if(timer !== null){
                        clearTimeout(timer);
                    }
                    timer = setTimeout(fn,wait);
                }
            },
            throttle(func, delay) {
                var timer = null;
                return function() {
                    var context = this;
                    var args = arguments;
                    if (!timer) {
                        timer = setTimeout(function() {
                            func.apply(context, args);
                            timer = null;
                        }, delay);
                    }
                }
            },
            settimeout(){
                setTimeout(this.scrollHandler2,1000)
            }
        },
        mounted() {
        },

    }
</script>

<style scoped>
    ::-webkit-scrollbar {
        width: 0;
    }

    .container {
        display: flex;
        min-height: 800px;
        background: url("../../assets/images/1.png");
    }

    .container2{
        background: url("../../assets/images/3.png");
    }
    .container3{
        background: url("../../assets/images/3.png");
    }
    .container4{
        background: url("../../assets/images/4.png");
    }
    .container5{
        background: url("../../assets/images/5.png");
    }
    .container6{
        background: url("../../assets/images/6.png");
    }
    .container7{
        background: url("../../assets/images/7.png");
    }


    .sticky-stack {
        background: #37474f;
        color: #fff;
        margin: 0;
        margin-right: 20px;
        height: 420px;
        border-radius: 1rem;
        overflow-y: auto;
    }

    .sticky-stack dt {
        position: sticky;
        top: 0;
        font-weight: bold;
        background: #263238;
        color: #cfd8dc;
        padding: 0.25rem 1rem;
    }

    .sticky-stack dd {
        margin: 0;
        padding: 0.75rem 1rem;
    }

    .sticky-stack dd + dt {
        margin-top: 1rem;
    }
</style>
