<template>
<div class="basic-layout">
    <div class="nav-side">欢迎</div>
    <div class="content-right">
        <div class="nav-top">
            <div> 面包屑</div>
            <div>admin</div>
        </div>
        <div class ="warpper">
            <div class="main-page">
                <router-view ></router-view>
            </div>
            
        </div>
    </div>
</div>

</template>
<script>
export default {
    name:'Home'
   
    }

</script>
<style lang="scss">
.basic-layout{
    position:relative;
    .nav-side{
    position:fixed;
     background: #000;
     color:antiquewhite;
     width: 200px;
     height:100vh;
     overflow-y: auto;
     transition: width .5s;
    };
    .content-right{
        margin-left: 200px;
        .nav-top{
            height:50px;
            line-height:50px;
            justify-content: space-between;
            display: flex;
            border: 1px solid #ddd;
            padding: 0 20px;
        };
        .warpper{
        background-color:rgb(121, 179, 223);
        padding: 20px;
        height: calc(100vh - 50px);
        .main-page{
            background-color:rgba(250, 250, 250, 0.927);
            height:100vh
        }
        }
    }

}
</style>