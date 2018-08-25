<template>
    <header>
      <div class="center-wrap">
        <nav>
          <div class="nav-left">
            <router-link class="logo" to="/"><img src="../../static/images/LOGO_CyberBlock.svg" alt=""></router-link>
            <router-link class="left-item" to="/" active-class="active-item">Home</router-link>
            <!-- <router-link class="left-item" to="/">ICO</router-link> -->
            <router-link class="left-item" to="/Tokenised">Tokenised</router-link>
            <router-link class="left-item" to="/">Investor</router-link>
            <router-link class="left-item" to="/">Projects</router-link>
            <router-link class="left-item" to="/">Online Trading</router-link>
          </div>
          <div class="nav-right">
            <router-link to="/" class="right-item">Sign in</router-link> or <router-link to="/" class="right-item">Log in</router-link>
          </div>
        </nav>
        <div class="content">
          <div class="title">Real Asset Tokenised</div>
          <div>Let value flow free</div>
          <p>Through block chain technology, we design Token product which allows usufruct of real assets transfers to digital assets, build a platform which is simply realisation for real asset owner and investment to trade safely, this platform could solve problems such as information asymmetry and high trust cost.</p>
        </div>
        <div class="button-group">
          <router-link to="/Tokenised">

          <div class="btn">Apply for a token for your asset</div>
          </router-link>
          <router-link to="/">
            <div class="btn">Become a investor</div>
          </router-link>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>

  header{
    width: 100%;
    height: 880px;
    background-image: url('../../static/images/banner.png');
    background-image: image-set(
    url('../../static/images/banner.png') 1x,
    url('../../static/images/banner@2x.png') 2x
    );
    background-image: -webkit-image-set(
    url('../../static/images/banner.png') 1x,
    url('../../static/images/banner@2x.png') 2x
    );
    /*background:linear-gradient(180deg,rgba(0,96,26,.8),rgba(209,255,219,.8));*/
    /*opacity:0.8;*/
    .center-wrap{
      width: 1200px;
      margin: 0 auto;
    }
  }
  nav{
    width: 100%;
    height: 80px;
    line-height: 80px;
    /*display: flex; justify-content: center; flex-direction: column;*/
    .nav-left{
      float: left;
      .logo{
        display: inline-block;
          // padding-top: 1px;
          font-size: 14px;
        img{
          // line-height: 20px;
          // height: 20px;
      vertical-align: -2px;
          margin-right: 83px;


        }

      }
        .left-item{
          &.active-item{
            opacity: 1;
          }
          text-decoration: none;
          font-size:14px;
          font-family:PingFangSC-Medium;
          color:rgba(255,255,255,1);
          margin-right: 60px;
          opacity: .5;
        }
    }
    .nav-right{
      float: right;
      /*margin-right: 120px;*/
      font-size:14px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:500;
      color:rgba(255,255,255,1);
      .right-item{
        color:#fff;
      }
    }
  }
  .content{
    width: 100%;
    .title{
      width: 100%;
      margin-top:200px;
      text-align: center;
      font-size:48px;
      font-weight: 700;
      font-family:PingFangSC-Semibold;
      color:rgba(255,255,255,1);
      &+div{
        margin-top: 50px;
        font-size:30px;
        text-align:center;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        &+p{
          width: 1010px;
          text-align:center;
          margin: 30px auto 0px auto;
          font-size:20px;
          font-family:PingFangSC-Regular;
          color:rgba(255,255,255,1);
          line-height: 1.5;
        }
      }
    }



  }
  .button-group{
    width: 820px;
    margin: 120px auto 0px;
    .btn{
      cursor: pointer;
      display: inline-block;
      width:360px;
      height:60px;
      background:rgba(255,255,255,1);
      border-radius:8px;
      border:1px solid rgba(76,156,111,1);
      text-align:  center;
      line-height: 60px;
      color:rgba(76,156,111,1);
    }
    .btn:nth-child(1){
      float: left;
    }
    a:nth-child(2){
      float: right;
    }
  }

</style>
