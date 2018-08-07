<template>
    <footer>
      <div class="footer-wrap">
        <div class="contact">Contact Us</div>
        <div class="center ">
          <a href="#" class="left">Telegram</a>
          <a href="#" calss="right">Terms of User</a>
        </div>
      <div class="small"> ©1692015-2018 chain.cn</div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
  footer{
    width: 100%;
    height:180px;
    background:rgba(76,156,111,1);
  }
  .footer-wrap{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 0;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .contact{
      font-size:14px;
      font-family:PingFangSC-Medium;
      color:rgba(255,255,255,1);
      font-weight: 500;
      /*margin-top: 40px;*/
    }
    .center{
      padding: 20px 0;
      border-bottom: 0.5px solid rgba(255,255,255,.5);
      overflow: hidden;
      a{
        text-decoration: none;
        font-size:12px;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
      }
      a:nth-last-child(1){
        float:right;
      }
      a:nth-child(1){
        float: left;
      }
    }
    .small{
      margin-top: 20px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      color:rgba(255,255,255,1);
    }
  }
</style>
