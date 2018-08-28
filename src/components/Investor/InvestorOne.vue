
<template>
  <div class="main-wrap" >
    <InvestorAlert v-if="showAlert" @hiddenAlert="hiddenAlert"></InvestorAlert>
    <header-small></header-small>
    <div class="main">
      <h2 class="text-center">Terms of Service</h2>
      <div class="text-content" style="margin-bottom: 45px">
        <p>Dear Sir or Madam, welcome to Real Asset Tokenised Platform——cyberblock, and thank you for choosing us as a trusted partner. </p>
        <p>In order to onboard you as a new client at cyberblock, we are obligated to take you through the mandatory ID verification process. This procedure is necessary as cyberblock is a licensed financial intermediary and is adhering strictly to Swiss AML laws and standards.</p>
        <p>If you have any issue regarding your ID verification process or our ICO platform, please don’t hesitate to fill in the support request ticket and we will try to help you as soon as possible.</p>
      </div>
      <div style="margin-bottom: 30px">
        <el-checkbox v-model="checkOne"  ></el-checkbox><span style="margin-left: 15px"> have read and accept&nbsp&nbsp </span><span @click="showAlert=true" class="green"> the terms and conditions.</span>
      </div>
      <div>
        <el-checkbox v-model="checkTow"  ></el-checkbox><span style="margin-left: 15px"> I am not a citizen of the United States of America or any other jurisdiction in which it is not permissible to participate in token crowd contributions.</span>
      </div>
      <!--<div class="btn text-center" @click="showAlert=true">Continue</div>-->
      <!--<router-link to="/Investor/InvestorPersonalInfo" class="btn text-center">Continue</router-link>-->
      <div class="btn text-center" @click="handleContinueClick">Continue</div>
    </div>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
  import HeaderSmall from "../HeaderSmall";
  import InvestorAlert from "./InvestorAlert";
  export default {
    name: "InvestorOne",
    components: {HeaderSmall, InvestorAlert},
    data(){
      return {
        checkOne: false,
        checkTow: false,
        showAlert: false
      }
    },
    methods:{
      hiddenAlert(){
        this.showAlert = false
      },
      handleContinueClick(){
        if(this.checkOne&&this.checkTow) this.$router.push('/Investor/InvestorPersonalInfo')
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
    /*height: 100%;*/
    background-color: #fff;
  }
  .main{
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
    display: block;
    text-decoration: none;
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
  .green{
    color:rgba(76,156,111,1);
    text-decoration: underline;
    cursor: pointer;
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



