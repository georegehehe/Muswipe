<template>

    <div align="center">
        <div class="menuBtn">

            <span > <a href="https://musicwai.squarespace.com" target="_blank" class="aicon">learn more</a></span>


            <router-link to="/Classical">
                <span><i class="swipeIcon icon"></i>Classical</span>
            </router-link>

            <router-link to="/Advanced">
                <span ><i class="clickIcon icon"></i>Advanced</span>
            </router-link>


        </div>
        <router-view></router-view>

    </div>
</template>

<script>

    export default {}
</script>

<style scoped>

    .menuBtn {
        width: 1000px;
        height: 30px;
        margin: 5px auto;

    }

    .menuBtn span {
        display: block;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        background-color: mistyrose;
        border: 1px solid #ccc;
        float: right;
        color:#000;
        margin-right: 10px;
        line-height: 40px;
        cursor: pointer;
    }


    .aicon {
        display: inline-block;
        text-decoration: none;
        color:#000;
        height: 20px;
    }

    .swipeIcon {
        width: 20px;
        height: 20px;
        background: url("assets/swipe.svg") left  no-repeat;
        background-size: 100%;
        font-style: normal;
    }

    .clickIcon {
        width: 20px;
        height: 20px;
        background: url("assets/click.svg") left  no-repeat;
        background-size: 100%;
        font-style: normal;
    }

</style>