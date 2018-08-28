<template>
  <div class="main-wrap">
    <header-small></header-small>
    <div class="main">
      <h2>Please describe the source of your investment funds and provide relevant information</h2>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text"  class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row><el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text"  class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row><el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text"  class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row><el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text"  class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row><el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text"  class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <!--<div style="margin:  0 auto">-->
        <div class="file-inp-wrap" style="margin: 30px auto 0px">
        <div class="content-wrap">
        <div class="text-inp-wrap bottom20 text-center">ID or Passport*D</div>
        <label for="tow" class="btn">UPLOAD</label><input id="tow" type="file" class="file-inp-medium">
        </div>
        <!--</div>-->
      </div>
      <!--<el-row>-->
        <!--<el-col :span="12">-->
          <!--<div class="file-inp-wrap">-->
            <!--<div class="content-wrap">-->
              <!--<div class="text-inp-wrap bottom20 text-center">ID or Passport*D</div>-->
              <!--<label for="tow" class="btn">UPLOAD</label><input id="tow" type="file" class="file-inp-medium">-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<div class="file-inp-wrap right">-->
            <!--<div class="content-wrap">-->
              <!--<div class="text-inp-wrap bottom20 text-center">Selfie holding ID or</div>-->
              <!--<label for="one" class="btn">Selfie holding ID or</label><input id="one" type="file" class="file-inp-medium">-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <div style="text-align: center; margin: 160px 0px">
        <router-link class="btn" to="/Investor/4">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderSmall from "../HeaderSmall";
  export default {
    name: "InvestorForm2",
    components: {HeaderSmall}
  }
</script>

<style lang="scss" scoped>
  /deep/ input{
    height: 30px;
    background:rgba(255,255,255,1);
    /*border-radius:4px;*/
    border: 0px;
    border-bottom:1px solid rgba(223,229,231,1);
    outline: none;
    color: #BCC2CC;
    /*margin-bottom: 20px;*/
  }
  .margin-bottom-20{
    margin-bottom: 20px;
  }
  .text-inp-big{
    width: 100%;
  }
  .right{
    float:right;

  }
  .btn{
    display: inline-block;
    text-align: center;
    text-decoration: none;
    width:400px;
    height:60px;
    line-height: 60px;
    background:rgba(76,156,111,1);
    border-radius:4px;
    color:rgba(255,255,255,1);
    font-size:18px;
  }
  .left{
    float: left;
  }
  .text-center{
    text-align: center;
  }
  .main-wrap {
    width: 100%;
    .main {
      width: 1200px;
      height: 820px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 100px;

    }
    h2 {
      /*text-align: center;*/
      margin: 60px 0px 20px 0px;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      color: rgba(68, 73, 84, 1);
      font-weight: 500;
    }
  }

  .bottom20{
    margin-bottom: 20px;
  }
  .file-inp-wrap{
    display: flex;

    align-items: center;
    /*align-content: center;*/
    width:400px;
    height:200px;
    border-radius:4px;
    border:1px dashed rgba(76,156,111,1);
    .content-wrap{
      /*align-self: center;*/
      margin: 0 auto;
    }
    label{
      width:200px;
      display: block;
      height:40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
  .file-inp-medium{
    display: none;
  }
  /*.file-content{*/
  /*width: 100%;*/
  /*height:120px;*/
  /*border-radius:4px;*/
  /*border:1px dashed rgba(76,156,111,1);*/
  /*line-height: 120px;*/
  /*color: rgba(76,156,111,1);*/
  label{
    display: block;
    width: 100%;
    height:120px;
    border-radius:4px;
    border:1px dashed rgba(76,156,111,1);
    line-height: 120px;
    color: rgba(76,156,111,1);
    font-size: 36px;
  }
</style>
