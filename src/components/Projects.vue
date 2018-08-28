<template>

    <div class="main-wrap">
      <header-small></header-small>
      <div class="main">
        <h2 class="text-center">Project Name</h2>
        <div class="title">
          Description
        </div>
        <p>
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </p>

        <div class="btn text-center" @click="$router.push('/Investor')">Participate Now</div>
        <div class="title">Token Information</div>
        <div class="text-wrap"><span style="width: 282px;">Accepted currencies for contributions are:</span><span style="margin-left: 30px">ETH</span></div>
        <div class="text-wrap"><span style="width: 282px;">Exchange rate – 1 ETH :</span><span style="margin-left: 30px">20MLN</span></div>
        <div class="text-wrap"><span style="width: 282px;">Fee:</span><span style="margin-left: 30px">1.25%</span></div>
        <div class="text-wrap"><span style="width: 282px;">Minimum contribution amount:</span><span style="margin-left: 30px">1ETH</span></div>
        <div class="text-wrap"><span style="width: 282px;">Maximum contribution amount:</span><span style="margin-left: 30px">15ETH</span></div>
        <div class="text-wrap"><span style="width: 282px;">Website:</span><span style="margin-left: 30px"><a href="javascript:void(0)" class="green">coin.cn</a></span></div>
      </div>
      <Footer></Footer>

    </div>
</template>

<script>
    import HeaderSmall from "./HeaderSmall";
    export default {
        name: "Projects",
      components: {HeaderSmall}
    }
</script>

<style lang="scss" scoped>
  .text-center{
    text-align: center;
  }
  .main-wrap{
    width: 100%;
    background-color: #fff;
  }
    .main{
      width: 1200px;
      padding: 0px 100px 162px ;
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
    word-break: break-word;
  }
  .btn{
    cursor: pointer;
    margin: 40px auto 60px;
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
</style>
