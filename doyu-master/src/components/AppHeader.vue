<template lang="html">
  <header style="height: 65px">
    <div class="duya-header hy-header-style-normal" id="duya-header ">
      <div class="duya-header-wrap clearfix">
        <div class="duya-header-bd clearfix">
          <h1 id="duya-header-logo" title="虎牙直播-虎牙TV-年轻人喜爱的互动直播平台">
            <a class="clickstat" eid="click/navi/logo" eid_desc="点击/导航/logo">
              <img style="float:left;width:100px;height: 50px" class="hy-hd-logo-0" src="../imgs/logo.png" alt="虎牙直播" width="120" height="36">
            </a>
          </h1>

          <div class="duya-header-nav">
            <div style="float:left;width:50px" class="hy-nav-item" >
              <a class="hy-nav-link clickstat" eid="click/navi/home" eid_desc="点击/导航/首页">首页</a>
            </div>

            <div style="float:left;width:50px" class="hy-nav-item">
              <a class="hy-nav-link clickstat" eid="click/navi/zhibo" eid_desc="点击/导航/直播">直播</a>
            </div>

            <!--  左边div-->
            <div class="hy-nav-item hy-nav-item-on">
              <div class="hy-nav-expand" style="float:left;width:50px">
                <a class="hy-nav-link hy-nav-link-ext clickstat" id="hy-nav-category" eid="click/navi/classification"
                   eid_desc="点击/导航/分类" href="https://www.huya.com/g">分类<i></i></a>
                <div class="nav-expand-list nav-expand-game" style="float:left">
                  <i class="arrow"></i>
                  <!--
                                  <dl class="clearfix"><dt>热门分类</dt><dd><a class="clickstat" eid="click/navi/game/game1" eid_desc="点击/导航/游戏/游戏1" title="英雄联盟" href="https://www.huya.com/g/lol" target="_blank">英雄联盟</a></dd><dd><a class="clickstat" eid="click/navi/game/game2" eid_desc="点击/导航/游戏/游戏2" title="王者荣耀" href="https://www.huya.com/g/wzry" target="_blank">王者荣耀</a></dd><dd><a class="clickstat" eid="click/navi/game/game3" eid_desc="点击/导航/游戏/游戏3" title="和平精英" href="https://www.huya.com/g/3203" target="_blank">和平精英</a></dd><dd><a class="clickstat" eid="click/navi/game/game4" eid_desc="点击/导航/游戏/游戏4" title="一起看" href="https://www.huya.com/g/seeTogether" target="_blank">一起看</a></dd><dd><a class="clickstat" eid="click/navi/game/game5" eid_desc="点击/导航/游戏/游戏5" title="星秀" href="https://www.huya.com/g/xingxiu" target="_blank">星秀</a></dd><dd><a class="clickstat" eid="click/navi/game/game6" eid_desc="点击/导航/游戏/游戏6" title="户外" href="https://www.huya.com/g/huwai" target="_blank">户外</a></dd><dd><a class="clickstat" eid="click/navi/game/game7" eid_desc="点击/导航/游戏/游戏7" title="绝地求生" href="https://www.huya.com/g/2793" target="_blank">绝地求生</a></dd><dd><a class="clickstat" eid="click/navi/game/game8" eid_desc="点击/导航/游戏/游戏8" title="主机游戏" href="https://www.huya.com/g/100032" target="_blank">主机游戏</a></dd><dd><a class="clickstat" eid="click/navi/game/game9" eid_desc="点击/导航/游戏/游戏9" title="穿越火线" href="https://www.huya.com/g/cf" target="_blank">穿越火线</a></dd><dd><a class="clickstat" eid="click/navi/game/game10" eid_desc="点击/导航/游戏/游戏10" title="二次元" href="https://www.huya.com/g/2633" target="_blank">二次元</a></dd><dd><a class="clickstat" eid="click/navi/game/game11" eid_desc="点击/导航/游戏/游戏11" title="交友" href="https://www.huya.com/g/4079" target="_blank">交友</a></dd><dd><a class="clickstat" eid="click/navi/game/game12" eid_desc="点击/导航/游戏/游戏12" title="颜值" href="https://www.huya.com/g/2168" target="_blank">颜值</a></dd></dl><dl class="clearfix"><dt>玩家推荐</dt><dd><a class="clickstat" eid="click/navi/game/game13" eid_desc="点击/导航/游戏/游戏13" title="荒野乱斗" href="https://www.huya.com/g/4613" target="_blank">荒野乱斗</a></dd><dd><a class="clickstat" eid="click/navi/game/game14" eid_desc="点击/导航/游戏/游戏14" title="DNF手游" href="https://www.huya.com/g/4921" target="_blank">DNF手游</a></dd><dd><a class="clickstat" eid="click/navi/game/game15" eid_desc="点击/导航/游戏/游戏15" title="DOTA1" href="https://www.huya.com/g/6" target="_blank">DOTA1</a></dd><dd><a class="clickstat" eid="click/navi/game/game16" eid_desc="点击/导航/游戏/游戏16" title="王者模拟战" href="https://www.huya.com/g/5699" target="_blank">王者模拟战</a></dd><dd><a class="clickstat" eid="click/navi/game/game17" eid_desc="点击/导航/游戏/游戏17" title="VALORANT" href="https://www.huya.com/g/5937" target="_blank">VALORANT</a></dd><dd><a class="clickstat" eid="click/navi/game/game18" eid_desc="点击/导航/游戏/游戏18" title="守望先锋" href="https://www.huya.com/g/overwatch" target="_blank">守望先锋</a></dd><dd><a class="clickstat" eid="click/navi/game/game19" eid_desc="点击/导航/游戏/游戏19" title="火影忍者手游" href="https://www.huya.com/g/hyrzsy" target="_blank">火影忍者手游</a></dd><dd><a class="clickstat" eid="click/navi/game/game20" eid_desc="点击/导航/游戏/游戏20" title="三国杀" href="https://www.huya.com/g/1669" target="_blank">三国杀</a></dd><dd><a class="clickstat" eid="click/navi/game/game21" eid_desc="点击/导航/游戏/游戏21" title="群雄逐鹿" href="https://www.huya.com/g/qfsgqxzl" target="_blank">群雄逐鹿</a></dd><dd><a class="clickstat" eid="click/navi/game/game22" eid_desc="点击/导航/游戏/游戏22" title="超猎都市" href="https://www.huya.com/g/6037" target="_blank">超猎都市</a></dd><dd><a class="clickstat" eid="click/navi/game/game23" eid_desc="点击/导航/游戏/游戏23" title="梦三国" href="https://www.huya.com/g/m3guo" target="_blank">梦三国</a></dd><dd><a class="clickstat" eid="click/navi/game/game24" eid_desc="点击/导航/游戏/游戏24" title="湖南" href="https://www.huya.com/g/5123" target="_blank">湖南</a></dd></dl><a href="https://www.huya.com/g" class="nav-expand-list-more clickstat" eid="click/navi/classification/more" target="_blank">更多<i>&gt;</i></a><a href="https://e.cn.miaozhen.com/r/k=2181585&amp;p=7c5B0&amp;dx=__IPDX__&amp;rt=2&amp;pro=s&amp;ns=__IP__&amp;ni=__IESID__&amp;v=__LOC__&amp;xa=__ADPLATFORM__&amp;tr=__REQUESTID__&amp;mo=__OS__&amp;m0=__OPENUDID__&amp;m0a=__DUID__&amp;m1=__ANDROIDID1__&amp;m1a=__ANDROIDID__&amp;m2=__IMEI__&amp;m4=__AAID__&amp;m5=__IDFA__&amp;m6=__MAC1__&amp;m6a=__MAC__&amp;m11=__OAID__&amp;mn=__ANAME__&amp;o=" id="J_adCategory" style="display: block; margin-top: 12px;" class="clickstat J_g_resource third-clickstat" data-pos="push/navigame" data-rsc="9073" data-thirdstat="" data-thirdview="" eid="click/push/navigame" eid_desc="点击/推荐/导航游戏下拉图" target="_blank"><img src="./imgs/huya_1596448413_content.jpg" width="250" height="60" alt="联想"></a></div>
                  -->
                </div>
              </div>
              <div class="hy-nav-item hy-nav-item-match" style="float:left;width:50px">
                <div class="hy-nav-expand">
                  <a class="hy-nav-link hy-nav-link-ext" id="hy-nav-match" href="https://www.huya.com/m">赛事<i></i></a>
                  <div class="nav-expand-list hy-nav-expand-match">
                    <div class="hy-header-match hy-header-loading" id="J_hyHdMatch"></div>
                    <i class="arrow"></i>
                  </div>
                </div>
              </div>
              <div class="hy-nav-item hy-nav-item-video" style="float:left;width:50px">
                <div class="hy-nav-expand">
                  <a class="hy-nav-link hy-nav-link-ext clickstat" id="hy-nav-video" href="http://v.huya.com/"
                     target="_blank" eid="click/navi/video" eid_desc="点击/导航/视频">视频<i></i></a>
                  <div class="nav-expand-list hy-nav-expand-video">
                    <div class="hy-header-video hy-header-loading" id="J_hyVideo"></div>
                    <i class="arrow"></i>
                  </div>
                </div>
              </div>
            </div>

            <!--===========搜索框=========-->
            <div class="duya-header-search clearfix" id="J_duyaHdSearch" style="float:left;width:800px">
                  <form method="get" id="searchForm_id" name="navSearchForm" action="https://www.huya.com/search.php"
                        target="_blank">
                <el-input  placeholder="请输入内容" v-model="name" class="input-with-select" style="width: 500px">
                  <el-button  slot="append" icon="el-icon-search" ></el-button>
                </el-input>
              </form>
              <div class="duya-header-search-suggest search-suggest-container" id="J_hyhdss" style="display: none;">
                <div class="search-suggest header">
                  <div class="container" data-box="history">
                    <h2 class="search-title">历史记录<i class="clear-history">清除记录</i></h2>
                    <ul class="search-list">
                      <li class="search-item"><i class="icon"></i><i class="key">20937377</i><i class="history-del"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!--==========有边div========-->
            <div class="duya-header-right" id="J_duyaHeaderRight" style="float:right">
              <div class="duya-header-control clearfix">
                <div class="hy-nav-right hy-nav-kaibo" style="float:left">
                  <a class="hy-nav-title clickstat" href="http://localhost:8080/#/live"
                     eid="click/navi/kaibo" eid_desc="点击/导航/开播" target="_blank">
                    <i class="hy-nav-icon hy-nav-video-icon"></i>
                    <span class="title">开播</span>
                  </a>
                  <div class="nav-expand-list nav-expand-kaibo">
                    <i class="arrow"></i>
                    <!-- <div class="kaibo-nav">
                       <a target="_blank" href="https://hd.huya.com/pc/2019zhubo/pages/index.html"><i class="hy-nav-video-icon"></i><span>我要开播</span></a>
                       <a target="_blank" href="https://www.huya.com/g#"><i class="hy-nav-home-icon"></i><span>公会入驻</span></a>
                     </div>-->
                  </div>
                </div>
                <div class="hy-nav-right hy-nav-download" id="hy-nav-download" style="float:left">
                  <a class="hy-nav-title clickstat" href="https://www.huya.com/download/" eid="click/navi/download"
                     eid_desc="点击/导航/下载" target="_blank">
                    <i class="hy-nav-icon hy-nav-download-icon"></i>
                    <span class="title">下载</span>
                  </a>
                  <div class="nav-expand-list nav-expand-download">
                    <i class="arrow"></i>
                    <div id="J_hyDownload" class="" style="display: none;"></div>
                  </div>
                </div>
                <div class="hy-nav-right nav-subscribe success-login" style="display: block;float:left">
                  <a class="hy-nav-title new-clickstat" href="https://www.huya.com/myfollow" target="_blank"
                     report="{&quot;eid&quot;:&quot;click/position&quot;,&quot;position&quot;:&quot;click/navi/dingyue&quot;}">
                    <i class="hy-nav-icon hy-nav-subscribe-icon"></i>
                    <span class="title">订阅</span>
                  </a>
                  <div class="nav-expand-list nav-expand-follow">
                    <i class="arrow"></i>

                  </div>
                </div>
                <div class="hy-nav-right hy-nav-history" style="float:left">
                  <a class="hy-nav-title nav-history new-clickstat" id="nav-history"
                     href="https://i.huya.com/index.php?m=Subscribe&amp;watch=1" target="_blank"
                     report="{&quot;eid&quot;:&quot;click/position&quot;,&quot;position&quot;:&quot;click/navi/lishi&quot;}">
                    <i class="hy-nav-icon hy-nav-history-icon"></i>
                    <span class="title">历史</span>
                  </a>
                  <div class="nav-expand-list nav-expand-history">
                    <i class="arrow"></i>
                    <div id="J_hyHdWatchRecordBox" class="hy-header-loading"></div>
                  </div>
                </div>
                <div class="hy-nav-right un-login" style="float:left">
                  <a class="hy-nav-title J_hdLg" href="http://localhost:8080/#/Login">
                    <i class="hy-nav-icon hy-nav-login-icon"></i>
                    <span class="title clickstat" id="nav-login" eid="click/navi/sign" eid_desc="点击/导航/登录">登录</span>
                  </a>
                  <i class="hy-nav-login-l">|</i>
                  <a class="hy-nav-title J_hdReg" href="http://localhost:8081/#/register">
                    <span class="title clickstat" id="nav-regiest" eid="click/navi/login" eid_desc="点击/导航/注册">注册</span>
                  </a>
                </div>

                <div id="J_global_user_tips"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import bus from "../bus"

  export default {
    methods: {
      showSlide() {
        bus.$emit('showSide')
      }
    }
  }
</script>

<style lang="css" scoped>
  header {
    height: 44px;
    background: #333;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    padding: 0 15px;
    color: #fff;
    line-height: 44px;
    font-size: 16px;
  }

  header i {
    color: #999;
  }

  .title {
    margin-left: 15px;
    display: inline-block;
  }

  .icon-user {
    float: right;
    line-height: 44px;
  }
</style>
