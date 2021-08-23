<template>
    <nav class="main-menu">
        <div>
            <a class="logo" href="http://startific.com">
            </a>
        </div>
        <div class="settings"></div>
        <div class="scrollbar" id="style-1">
            <ul>

                <li>
                    <a href="http://startific.com">
                        <i class="fa fa-home fa-lg"></i>
                        <router-link to="simple-line" class="nav-text link">基础折线图</router-link>
                    </a>
                </li>
                <li>
                    <a href="http://startific.com">
                        <i class="fa fa-user fa-lg"></i>
                        <router-link to="smooth-line" class="link nav-text">基础平滑折线图</router-link>
                    </a>
                </li>
                <li>
                    <a href="http://startific.com">
                        <i class="fa fa-envelope-o fa-lg"></i>
                        <router-link to="fantastic" class="link nav-text">多个平滑曲线图</router-link>
                    </a>
                </li>
                <li>
                    <a href="http://startific.com">
                        <i class="fa fa-heart-o fa-lg"></i>
                        <router-link to="mindmap" class="link share nav-text">思维导图</router-link>
                    </a>
                </li>

                <li class="darkerlishadow">
                    <a href="http://startific.com">
                        <i class="fa fa-clock-o fa-lg"></i>
                        <router-link to="demo1" class="link nav-text">旋转三色球</router-link>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-desktop fa-lg"></i>
                        <router-link to="stickyMenu" class="link nav-text">粘性表头(花里胡哨)</router-link>

                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-plane fa-lg"></i>
                        <router-link to="buttons" class="link nav-text">按钮们</router-link>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-shopping-cart"></i>
                        <router-link to="pixiDemo" class="link nav-text">pixi示例</router-link>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-microphone fa-lg"></i>
                        <router-link to="pixiexample1" class="link nav-text">旋转的蜜蜂</router-link>

                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-flask fa-lg"></i>
                        <router-link to="pixiexample2" class="link nav-text">一只旋转的蜜蜂</router-link>

                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-picture-o fa-lg"></i>
                        <router-link to="pixiexample3" class="link nav-text">一群的蜜蜂</router-link>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-align-left fa-lg"></i>
                        <span class="nav-text">
                        </span>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-gamepad fa-lg"></i>
                        <span class="nav-text"></span>
                    </a>
                </li>

                <li class="darkerli">
                    <a href="http://startific.com">
                        <i class="fa fa-glass fa-lg"></i>
                        <span class="nav-text">
                        </span>
                    </a>
                </li>

                <li class="darkerlishadowdown">
                    <a href="http://startific.com">
                        <i class="fa fa-rocket fa-lg"></i>
                        <span class="nav-text"></span>
                    </a>
                </li>


            </ul>
            <li>

                <a href="http://startific.com">
                    <i class="fa fa-question-circle fa-lg"></i>
                    <span class="nav-text"></span>
                </a>
            </li>
            <ul class="logout">
                <li>
                    <a href="http://startific.com">
                        <i class="fa fa-lightbulb-o fa-lg"></i>
                        <span class="nav-text">
                            BLOG
                        </span>

                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import 'font-awesome/css/font-awesome.css'
    export default {
        name: "mainlayout"
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
        color:#876543;
        font-size: 14px;
    }

    .settings {

        height:73px;
        float:left;
        background-repeat:no-repeat;
        width:250px;
        margin:0px;
        text-align: center;
        font-size:20px;
        font-family: 'Strait', sans-serif;

    }

    /* ScrolBar  */
    .scrollbar
    {

        height: 90%;
        width: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .scrollbar:hover
    {

        height: 90%;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    /* Scrollbar Style */



    #style-1::-webkit-scrollbar-track
    {
        border-radius: 2px;
    }

    #style-1::-webkit-scrollbar
    {
        width: 5px;
        background-color: #F7F7F7;
    }

    #style-1::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #BFBFBF;
    }
    /* Scrollbar End */




    .fa-lg {
        font-size: 1em;

    }
    .fa {
        position: relative;
        display: table-cell;
        width: 55px;
        height: 36px;
        text-align: center;
        top:12px;
        font-size:20px;

    }
    .main-menu:hover, nav.main-menu.expanded {
        width:250px;
        overflow:hidden;
        opacity:1;

    }

    .main-menu {
        background:#F7F7F7;
        /*position:absolute;*/
        top:0;
        bottom:0;
        height:100%;
        left:0;
        width:55px;
        overflow:hidden;
        -webkit-transition:width .2s linear;
        transition:width .2s linear;
        -webkit-transform:translateZ(0) scale(1,1);
        box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
        opacity:1;
    }

    .main-menu>ul {
        margin:7px 0;

    }

    .main-menu li {
        position:relative;
        display:block;
        width:250px;
    }

    .main-menu li>a {
        position:relative;
        width:255px;
        display:table;
        border-collapse:collapse;
        border-spacing:0;
        color:#8a8a8a;
        font-size: 13px;
        text-decoration:none;
        -webkit-transform:translateZ(0) scale(1,1);
        -webkit-transition:all .14s linear;
        transition:all .14s linear;
        font-family: 'Strait', sans-serif;
        border-top:1px solid #f2f2f2;

        text-shadow: 1px 1px 1px  #fff;
    }



    .main-menu .nav-icon {

        position:relative;
        display:table-cell;
        width:55px;
        height:36px;
        text-align:center;
        vertical-align:middle;
        font-size:18px;

    }

    .main-menu .nav-text  {

        position:relative;
        display:table-cell;
        vertical-align:middle;
        width:190px;
        font-family: 'Titillium Web', sans-serif;
    }

    .main-menu .share {
    }



    .main-menu .fb-like {

        left: 180px;
        position:absolute;
        top: 15px;
    }

    .main-menu>ul.logout {
        position:absolute;
        left:0;
        bottom:0;

    }

    .no-touch .scrollable.hover {
        overflow-y:hidden;

    }

    .no-touch .scrollable.hover:hover {
        overflow-y:auto;
        overflow:visible;

    }


    /* Logo Hover Property */


    .settings:hover, settings:focus {
        -webkit-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
        -moz-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
        -o-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
        transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
    }

    .settings:active, settings:focus {
        -webkit-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
        -moz-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
        -o-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
        transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
    }


    a:hover,a:focus {
        text-decoration:none;
        border-left:0px solid #F7F7F7;



    }

    nav {
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        -o-user-select:none;
        user-select:none;

    }

    nav ul,nav li {
        outline:0;
        margin:0;
        padding:0;
        text-transform: uppercase;
    }




    /* Darker element side menu Start*/


    .darkerli
    {
        background-color:#ededed;
        text-transform:capitalize;
    }

    .darkerlishadow
    {
        background-color:#ededed;
        text-transform:capitalize;
        -webkit-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
        -moz-box-shadow:    inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
        box-shadow:         inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
    }


    .darkerlishadowdown
    {
        background-color:#ededed;
        text-transform:capitalize;
        -webkit-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
        -moz-box-shadow:    inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
        box-shadow:         inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
    }

    /* Darker element side menu End*/




    .main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
        color:#fff;
        background-color:#00bbbb;
        text-shadow: 0px 0px 0px;
    }
    .area {
        float: left;
        background: #e2e2e2;
        width: 100%;
        height: 100%;
    }

</style>
