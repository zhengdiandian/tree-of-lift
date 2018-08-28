
<template>
  <div>
    <!--<header-small></header-small>-->
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
  import HeaderSmall from "./HeaderSmall";
  export default {
    name: "Investor",
    components: {HeaderSmall},
    data(){
      return {
        checkOne: false,
        checkTow: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text-center{
    text-align: center;
  }
  .main-wrap{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .main{
    height: 100%;
    box-sizing: border-box;
    width: 1200px;
    padding: 0px 100px 270px ;
    margin: 60px auto 0px;
  }
  h2{
    margin-bottom: 40px;
    font-size:24px;
    font-family:PingFangSC-Medium;
    color:rgba(68,73,84,1);
    font-weight: 500;
  }
  .title{
    margin-bottom: 20px;
    font-size:18px;
    font-family:PingFangSC-Medium;
    color:rgba(68,73,84,1);
    font-weight: 500;
  }
  p{
    margin-bottom: 20px;
    word-break: break-word;
  }
  .btn{
    cursor: pointer;
    margin: 60px auto 60px;
    width:400px;
    height:60px;
    line-height: 60px;
    background:rgba(76,156,111,1);
    border-radius:4px;
    font-size:18px;
    font-family:PingFangSC-Regular;
    color:rgba(255,255,255,1);
  }
  .text-wrap{
    margin-bottom: 15px;
  }
  span{
    display: inline-block;
  }
  a.green{
    color:rgba(76,156,111,1);
    text-decoration: underline;
  }
  /deep/  .el-checkbox__inner{
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    background-color: #fff;
    z-index: 1;
  }
  /deep/ .el-checkbox__inner::after{
    height: 15px;
    left: 9px;
  }
  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #4C9C6F !important;
    border-color: #4C9C6F;

  }
</style>



