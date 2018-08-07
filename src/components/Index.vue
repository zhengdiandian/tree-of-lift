<template>
  <div class="main-wrap">
    <Header></Header>
    <div class="content-wrap">
      <div class="content">
        <div class="title">TOL Benefits</div>
        <div class="info-wrap">
          <div class="info">
            <img src="../../static/images/Group3.svg" alt="">
            <div>Balance risk</div>
            <p>Through trust isolation by ABS, and a structured design for relevant asset screening and classifying, return may be increased</p>
          </div>
          <div class="info">
            <img src="../../static/images/Intrinsicvalue.svg" alt="">
            <div>Intrinsic value</div>
            <p>Differ from other ICO projects which only depend on white paper and technology vision, we transfer real asset to digital level, enrich the intrinsic value.</p>
          </div>
          <div class="info">
            <img src="../../static/images/Visibleinformation.svg" alt="">
            <div>Visible information</div>
            <p>Offer trading support according to the feature of decentralisation, record transaction by block chain. Information will be trackable and visible</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content">
        <div class="title">Strength of ABS toke</div>
        <div class="info-wrap">
          <div class="info">
            <img src="../../static/images/Group3Copy.svg" alt="">
            <div>Low entry level</div>
            <p>With the high sever-ability, digital asset coulee be split with technology. Therefore, investors will be able to conduct investment in minimum unit under the certification of KYC</p>
          </div>
          <div class="info">
            <img src="../../static/images/IntrinsicvalueCopy.svg" alt="">
            <div>High stable value</div>
            <p>Main stream digital currency is too unstable in current market. ABS token could be of a more stable asset due of its intrinsic value</p>
          </div>
          <div class="info">
            <img src="../../static/images/VisibleinformationCopy.svg" alt="">
            <div>No geographic restri</div>
            <p>ABS token is facing global market with no geographic restrictions.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style  lang="scss" scoped>
  .main-wrap{
    /*width: 1200px;*/
    width: 100%;
  }
  .content-wrap{
    width: 100%;
    height: 600px;
    background:rgba(255,255,255,1);
  }
  .content{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .title{
      padding: 116px 0px 60px;
      text-align: center;
      font-size:30px;
      font-weight: 500;
      font-family:PingFangSC-Medium;
      color:rgba(68,73,84,1);
    }
    .info-wrap{
      width: 100%;
      box-sizing: border-box;
      padding-left: 120px;
      .info{
        float: left;
        width: 240px;
        text-align: center;
        margin-right: 120px;
        div{
          padding: 20px 0px;
          font-size:18px;
          font-family:PingFangSC-Medium;
          color:rgba(68,73,84,1);
          font-weight: 500;
        }
        div+p{
          /*word-wrap: break-spaces;*/
          /*word-break: break-all;*/
          margin: 0;
          text-align: left;
          font-size:14px;
          font-family:PingFangSC-Regular;
          color:rgba(68,73,84,1);
          line-height:1.5;
        }
      }
    }
  }
  .content-wrap + .content-wrap{
    background:rgba(249,249,249,1);
  }
</style>
