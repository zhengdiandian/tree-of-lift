<template>
  <div class="main-wrap">
    <HeaderSmall></HeaderSmall>
    <div class="main">
      <h2>Personal Info</h2>
      <div class="title">Please verify that your information is correct, and fill in any missing details</div>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
            <!--<div class="inp-label">First name</div>-->
            <input type="text" placeholder="First name" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
            <!--<div class="inp-label">First name</div>-->
            <input type="text" placeholder="Last name" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <el-row  class="margin-bottom-20" type="flex" justify="space-between">
        <el-col :span="6">
          <el-select v-model="value" placeholder="Select" no-data-text="No data">

          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value" placeholder="Select" class="text-center" no-data-text="No data">

          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value" placeholder="Select" no-data-text="No data" >

          </el-select>
        </el-col>
      </el-row>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text" placeholder="Nationality*" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <div class="title">Contact Information</div>
      <el-row class="margin-bottom-20">
      <el-col :span="24">
        <!--<div class="text-inp-wrap">-->
        <!--<div class="inp-label">First name</div>-->
        <input type="text" placeholder="Email" class="text-inp-big">
        <!--</div>-->
      </el-col>
    </el-row>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text" placeholder="Phone number" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <div class="title">Address Information</div>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text" placeholder="Street Address*" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <div class="margin-bottom-20" style="height: 33px">
        <div style="width: 450px" class="left"><input type="text" placeholder="Postal Code*" class="text-inp-big"></div>
        <div style="width: 450px" class="right"><input type="text" placeholder="City*" class="text-inp-big"></div>
      </div>
      <el-row class="margin-bottom-20">
        <el-col :span="24">
          <!--<div class="text-inp-wrap">-->
          <!--<div class="inp-label">First name</div>-->
          <input type="text" placeholder="State" class="text-inp-big">
          <!--</div>-->
        </el-col>
      </el-row>
      <el-row class="margin-bottom-20">
      <el-col :span="24">
        <!--<div class="text-inp-wrap">-->
        <!--<div class="inp-label">First name</div>-->
        <input type="text" placeholder="Country*" class="text-inp-big">
        <!--</div>-->
      </el-col>
    </el-row>
      <div style="text-align: center; margin: 60px 0px">
        <router-link class="btn" to="/Investor/2">Continue</router-link>
      </div>
      <!--<el-row class="margin-bottom-20">-->
        <!--<el-col :span="12">-->
          <!--&lt;!&ndash;<div class="text-inp-wrap">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="inp-label">First name</div>&ndash;&gt;-->
          <!--<input type="text" placeholder="Street Address*" class="text-inp-big">-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--&lt;!&ndash;<div class="text-inp-wrap">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="inp-label">First name</div>&ndash;&gt;-->
          <!--<input type="text" placeholder="Street Address*" class="text-inp-big">-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>
  </div>
</template>

<script>
    import HeaderSmall from "../HeaderSmall";
    export default {
        name: "InvestorPersonalInfo",
      components: {HeaderSmall}
    }
</script>

<style lang="scss" scoped>
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
      margin: 0 auto;
      box-sizing: border-box;
      padding:  0 100px;

    }
    h2 {
      /*text-align: center;*/
      margin: 60px 0px 10px 0px;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      color: rgba(68, 73, 84, 1);
      font-weight: 500;
    }
    .title{
      font-size:18px;
      margin-bottom: 30px;
    }
  }
  .inp-label{
    margin-bottom: 15px;
  }
  .text-inp-big{
    width: 100%;
  }
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
  /deep/ .el-select{
    width: 100%;
  }
</style>
