<template>

  <div class="main-wrap">
    <header-small></header-small>
    <!--<Steps :active="2" align-center :space='space'>-->
    <!--<Step title="步骤1" description="这是一段很长很长很长的描述性文字"></Step>-->
    <!--<Step title="步骤2" description="这是一段很长很长很长的描述性文字"></Step>-->
    <!--<Step title="步骤3" description="这是一段很长很长很长的描述性文字"></Step>-->
    <!--<Step title="步骤4" description="这是一段很长很长很长的描述性文字"></Step>-->
    <!--</Steps>-->
    <!--<el-steps :active="2" space="120px" align-center>-->
      <!--<el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>-->
    <!--</el-steps>-->
    <div class="main">
      <h2>Apply for real Asset</h2>

    <!--<div class="step-wrap">-->
      <el-steps :active="active"  :space="space"  :align-center="true" finish-status="success" class="space" id="steps">
        <el-step title="Information"></el-step>
        <el-step title="Asset proof"></el-step>
        <el-step title="Appraisal"></el-step>
        <el-step title="Token plan"></el-step>
        <el-step title="Finish"></el-step>
      </el-steps>
        <div class="form-item" v-if="active===0">
          <h2>Information</h2>
          <el-row>
            <el-col :span="12" class="bottom20">
              <div class="text-inp-wrap">
                <div class="inp-label">First Name</div>
                <input type="text" class="text-inp-medium">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-inp-wrap " style="text-align: right; float: left">
                <div class="inp-label " style="padding-left: 200px ; text-align: left">First Name</div>
                <input type="text right" class="text-inp-medium">
              </div>
            </el-col>
          </el-row>
          <el-row class="bottom20">
            <el-col :span="24">
              <div class="text-inp-wrap">
                <div class="inp-label">Address</div>
                <input type="text" class="text-inp-big">
              </div>
            </el-col>
          </el-row>
          <el-row class="bottom20">
            <el-col :span="24">
              <div class="text-inp-wrap">
                <div class="inp-label">Phone Number</div>
                <input type="text" class="text-inp-big">
              </div>
            </el-col>
          </el-row>
          <el-row class="bottom40">
            <el-col :span="24">
              <div class="text-inp-wrap">
                <div class="inp-label">Identification</div>
                <input type="text" class="text-inp-big">
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="file-inp-wrap">
                <div class="content-wrap">
                  <div class="text-inp-wrap bottom20 text-center">ID or Passport*D</div>
                  <label for="tow" class="btn">UPLOAD</label><input id="tow" type="file" class="file-inp-medium">
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="file-inp-wrap right">
                <div class="content-wrap">
                  <div class="text-inp-wrap bottom20 text-center">Selfie holding ID or</div>
                  <label for="one" class="btn">Selfie holding ID or</label><input id="one" type="file" class="file-inp-medium">
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="next btn text-center" @click="next">Next ></div>
          <!--<input type="s">-->
        </div>
        <div class="form-item" v-if="active===1">
          <h2>Asset Proof</h2>
          <el-row>
            <el-col :span="24" class="bottom20">
              <div class="text-inp-wrap">
                <div class="inp-label" >Type</div>
                <el-select  style="width: 100%" no-data-text="No data" placeholder="Select">
                  <!--<el-option>矿产</el-option>-->
                </el-select>
                <!--<input type="text" class="text-inp-big">-->
              </div>
            </el-col>
          </el-row>
          <el-row class="bottom20">
            <el-col :span="24" class="bottom">
              <div class="text-inp-wrap">
                <div class="inp-label">Attachment（Title Deed,etc.）</div>
                  <!--<div class="file-content text-center">-->
                    <label for="add" class="text-center">+</label>
                  <input  id="add" type="file" class="file-inp-medium">
                  <!--</div>-->
              </div>
            </el-col>
          </el-row>
          <el-row class="bottom20" >
            <div class="text-inp-wrap">

            <div class="inp-label">Attachment（Title Deed,etc.）</div>

            <el-col :span="8"><input type="text" placeholder="Time" class="text-inp-small"></el-col>
            <el-col :span="8" class="text-center"><input type="text" placeholder="Stake" class="text-inp-small"></el-col>
            <el-col :span="8" ><input  type="text" placeholder="Value" class="text-inp-small right"></el-col>
            </div>
          </el-row>
          <el-row  >
            <div class="text-inp-wrap">

              <div class="inp-label">Sale To Raise</div>

              <el-col :span="8"><input type="text" placeholder="Time" class="text-inp-small"></el-col>
              <el-col :span="8" class="text-center"><input type="text" placeholder="Stake" class="text-inp-small "></el-col>
              <el-col :span="8"><input type="text" placeholder="Value" class="text-inp-small right"></el-col>
            </div>
          </el-row>
          <div class="next btn text-center" @click="next">Next ></div>


        </div>
    <!--</div>-->
        <div class="form-item" v-if="active===2">
          <div class="text-inp-wrap">

            <h2>Appraisal</h2>
              <div class="text-center">
                {{text}}
                <div v-if="show">
                  <p class="bottom30"><span>Authenticity: </span> <strong>True</strong></p>
                  <p class="bottom30"><span>Credit Rating： </span> <strong>A</strong></p>
                  <p class="bottom30"><span>Level of risk： </span> <strong>Low</strong></p>
                </div>
              </div>
          </div>
          <div class="next btn text-center" @click="next">Next ></div>
        </div>
        <div class="form-item" v-if="active===3">
            <h2>Token plan</h2>
            <div class="medium-wrap">
              <div class="medium-label left">Token Number:</div>
              <input type="text" class="text-inp-medium right" placeholder="10,000,000,000,000">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Price:</div>
              <input type="text" class="text-inp-medium right" placeholder="1 ETH = 600 HEAL">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Token:</div>
              <input type="text" class="text-inp-medium right" placeholder="HEAL">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Accepting:</div>
              <input type="text" class="text-inp-medium right" placeholder="ETH">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Minimum investment:</div>
              <input type="text" class="text-inp-medium right" placeholder="0.1 ETH">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Soft cap:</div>
              <input type="text" class="text-inp-medium right" placeholder="283,724,404.00 USD">
            </div>
            <div class="medium-wrap">
              <div class="medium-label left">Hard cap:</div>
              <input type="text" class="text-inp-medium right" placeholder="283,724,404.00 USD">
            </div>
            <div class="next btn text-center" @click="next">Next ></div>
            <!--<input type="s">-->
      </div>
      <div class="form-item" v-if="active===4">
        <div class="finish text-center">Finish!</div>
        <div class="next btn text-center" @click="next">Next ></div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderSmall from './HeaderSmall'
    export default {
        name: "Tokenised",
      components: {HeaderSmall},
      component: {
          HeaderSmall
        },
      data(){
          return {
            active: 0,
            space: '120px',
            show: false,
            text: 'In asset appraisal,'
          }
      },
      methods:{
          next(){
            this.active++
            if(this.active === 2){
              window.setTimeout(() =>{
                this.text = 'Evaluate the results'
                this.show = true;
              },2000)

            }
            else if (this.active ==5) {
              this.$router.push('/Home')
            }
          }

      }
    }
</script>

<style lang="scss" scoped>
  .main-wrap{
    width: 100%;
    .main{
      box-sizing: border-box;
      padding:  0 100px;
      width: 1200px;
      margin: 0 auto;

    }
    h2{
      text-align: center;
      margin: 60px 0px 50px 0px ;
      font-size:24px;
      font-family:PingFangSC-Medium;
      color:rgba(68,73,84,1);
      font-weight: 500;
    }
    #steps.space.el-steps {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      & /deep/ .el-step__head.is-success{
        color: #4C9C6F !important;
        border-color:  rgba(223,229,231,1);
      }
      & /deep/.el-step__icon.is-text {
        border-radius: 50%;
        border: 4px solid;
        border-color: rgba(223,229,231,1);
        /*background: #4C9C6F;*/
      }
      & /deep/ .el-step__icon-inner{
        display: none;
      }
      & /deep/ step__title.is-wait {
        font-family:PingFangSC-Regular;
        color:rgba(68,73,84,1);
        font-weight: 400;
      }
      & /deep/ .el-step__head.is-process  .el-step__icon.is-text,
      & /deep/ .el-step__head.is-success  .el-step__icon.is-text{
        border-radius: 50%;
        border: 4px solid;
        border-color: rgba(223,229,231,1);
        background: #4C9C6F!important;
      }
      & /deep/ .el-step__title.is-process {
        font-weight: 400;
        font-family:PingFangSC-Regular;
        color: rgba(68,73,84,1);
      }
      /*& /deep/ .el-step.is-horizontal .el-step__line {*/
        /*height: 4px;*/
        /*top: 10px;*/
        /*left: 0;*/
        /*right: 0;*/
      /*}*/
      & /deep/  .el-step__line {
        height: 4px;
        top: 10px;
        /*left: 0;*/
        /*right: 0;*/
        /*overflow: hidden;*/
        border-color: rgba(223,229,231,1);
        background-color: rgba(223,229,231,1);
      }
      & /deep/ .el-step__head.is-process {
        /*color: rgba(68,73,84,1);*/
        color:rgba(223,229,231,1);
        font-weight: 400;
        border-color: rgba(223,229,231,1);
      }
      &  /deep/ div.el-step__title.is-success {
        color: #4C9C6F;
        font-size:14px !important;
        font-family:PingFangSC-Semibold;
        font-weight: 500 !important;
      }
      & /deep/ .el-step__title {
        font-size: 14px !important;
        line-height: 38px;
      }
    }


  }
  .form-item{
    width: 100%;
    background-color: #fff;
    .finish{
      margin-top: 80px;
      font-size:24px;
      font-family:PingFangSC-Semibold;
      font-weight: 500;
      color:rgba(68,73,84,1);
      padding-bottom: 360px;
    }
    h2{
      font-size:18px;
      font-family:PingFangSC-Medium;
      font-weight: 500;
      color:rgba(68,73,84,1);
      margin: 80px 0px 40px 0px;
    }

    h2 + .text-center{
      box-sizing: border-box;
      color:rgba(68,73,84,1);
      /*text-align: center;*/
      height: 380px;
      /*margin-bottom: 367px;*/
      margin-top: -20px;
      /*p{*/
        /*margin-bottom: 30px;*/

       div{
        padding-top: 60px;

      }
      p{
        margin: 0 0 30px 0;
      }
      p span{
        width:170px;
        height:24px;
        font-size:24px;
        font-family:PingFangSC-Regular;
        color:rgba(68,73,84,1);
        line-height:24px;
      }
      p strong{
        padding-left: 40px;
        font-size:24px;
        font-weight: 500;
        font-family:PingFangSC-Semibold;
        color:rgba(68,73,84,1);
        /*line-height:24px;*/
      }
    }
    .text-center{
      text-align: center;
    }
    .btn{
      cursor: pointer;
      background:rgba(76,156,111,1);
      border-radius:4px;
      text-align: center;
      color: #fff;
    }
    .left{
      float: left;
    }
    .next{
      width:400px;
      height:60px;
      line-height: 60px;
      margin: 60px auto;
    }
    .bottom20{
      margin-bottom: 20px;
    }
    .bottom30{
      margin-bottom: 30px;
    }
    .bottom40{
      margin-bottom: 40px;
    }
    .right{
      float: right;
    }
    .text-inp-small{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 18px;
      width:200px;
      height:50px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(223,229,231,1);
    }
    .text-inp-wrap{
      width: 100%;
      .inp-label{
        padding-bottom: 10px;
        font-family:PingFangSC-Regular;
        color:rgba(68,73,84,1);
      }
      .text-inp-medium{
        width:400px;
        height:50px;

        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(223,229,231,1)
      }
      .text-inp-big{
        width:100%;
        height:50px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(223,229,231,1)
      }
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
      /*}*/
    & /deep/ .el-input__inner6{
      height: 50px;
    }
    .medium-wrap{
      width: 566px;
      height: 80px;
      margin: 0px auto;
      padding-left: 60px;
      /*margin: 0 0px 20px 317px;*/

      .medium-label{
        /*width: 166px;*/
        height: 40px;
        color:rgba(68,73,84,1);
        line-height: 40px;
      }
    }
  }
  .text-inp-medium{
    width:400px;
    height:50px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    border:1px solid rgba(223,229,231,1)
  }
</style>
