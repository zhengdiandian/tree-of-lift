<template>
  <header>
    <div class="center-wrap">
      <nav>
        <div class="nav-left">
          <router-link class="logo" to="/"><img src="../../static/images/LOGO_CyberBlock.svg" alt=""></router-link>
          <router-link class="left-item" to="/Home" active-class="active-item">Home</router-link>
          <!-- <router-link class="left-item" to="/">ICO</router-link> -->
          <router-link class="left-item" to="/Tokenised" active-class="active-item">Tokenised</router-link>
          <router-link class="left-item" to="/">Investor</router-link>
          <router-link class="left-item" to="/">Projects</router-link>
          <router-link class="left-item" to="/">Online Trading</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/" class="right-item">Sign in</router-link> or <router-link to="/" class="right-item">Log in</router-link>
        </div>
      </nav>
      <!--<div class="content">-->
        <!--<div class="title">Real Asset Tokenised</div>-->
        <!--<div>Let value flow free</div>-->
        <!--<p>Through block chain technology, we design Token product which allows usufruct of real assets transfers to digital assets, build a platform which is simply realisation for real asset owner and investment to trade safely, this platform could solve problems such as information asymmetry and high trust cost.</p>-->
      <!--</div>-->
      <!--<div class="button-group">-->
        <!--<div class="btn">Apply for a token for your asset</div>-->
        <!--<div class="btn">Become a investor</div>-->
      <!--</div>-->
    </div>
  </header>
</template>

<script>
    export default {
        name: "HeaderSmall"
    }
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 80px;
    background:rgba(76,156,111,1);
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



</style>
