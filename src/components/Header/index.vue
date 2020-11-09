<template>
  <div class="top">
    <div class="container">
      <!-- 左侧 -->
      <div class="left">
        <a href="javascript:;">
          <span class="iconfont iconicon_map iconfontC"></span>
          <span>北京</span>
          <span>[更换]</span>
        </a>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <div v-if="userInfo.phone">
          <!-- <div class="info"> -->
          <div class="act"></div>
          <a href="javascript:;" @mouseenter="handleEnter"
            >dpuser_{{ $store.state.user.userInfo.phone }}
            <div
              class="hov"
              v-if="isShow"
              @mouseenter="handleEnter"
              @mouseleave="handleLeave"
            >
              <div class="des">
                <div class="ava">
                  <i class="iconfont iconavatar1"></i>
                </div>
                <div class="info">
                  <div class="name">
                    dpuser_{{ $store.state.user.userInfo.phone }}
                  </div>
                  <div class="basic">
                    <p><a href="javascript:;">评价8</a></p>
                    <p><a href="javascript:;">帖子20</a></p>
                    <p><a href="javascript:;">粉丝10</a></p>
                  </div>
                </div>
              </div>
              <div class="set">
                <div class="white"></div>
                <div class="out">
                  <!-- <router-link t0=""></router-link> -->
                  <a href="javascript:;">个人设置</a>
                  <span class="seprate">|</span>
                  <a href="javascript:;" @click="logout">退出登录</a>
                </div>
              </div>
            </div>
          </a>
          <span class="seprate">|</span>
          <a href="javascript:;" class="iconfontC">消息</a>

          <span class="seprate">|</span>
          <a href="javascript:;">
            个人中心
            <i class="iconfont iconjiantou32"></i>
          </a>

          <span class="seprate">|</span>
          <a href="javascript:;">
            商户服务
            <i class="iconfont iconjiantou32"></i>
          </a>

          <span class="seprate">|</span>
          <a href="javascript:;">
            帮助中心
            <i class="iconfont iconjiantou32"></i>
          </a>
        </div>

        <div v-else>
          <router-link to="/logindefault" 
            >你好，请登录</router-link
          >

          <router-link to="/register" class="iconfontC">免费注册</router-link>

          <span class="seprate">|</span>
          <a href="javascript:;">
            个人中心
            <i class="iconfont iconjiantou32"></i>
          </a>

          <span class="seprate">|</span>
          <a href="javascript:;">
            商户服务
            <i class="iconfont iconjiantou32"></i>
          </a>

          <span class="seprate">|</span>
          <a href="javascript:;">
            帮助中心
            <i class="iconfont iconjiantou32"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqUserLogout } from "@/api";
import { mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      isShow: false,
      // userInfo: {},
    };
  },
  mounted() {
      

  },
  methods: {
    // 移入显示
    handleEnter() {
      this.isShow = true;
    },
    // 移出隐藏
    handleLeave() {
      this.isShow = false;
    },
    // 退出登录
    async logout() {
      // 发请求
      const result = await reqUserLogout();
      alert('退出登录· 成功')
      localStorage.removeItem("USERINFO_KEY");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState({
      userInfo:state => state.user.userInfo
    })
  },
};
</script>

<style lang="less" scoped>
.top {
  background-color: #f6f6f6;
  height: 35px;
  line-height: 30px;
  font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
  font-size: 12px;
  .iconfontC {
    color: #f63;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .container {
    // display: flex;
    flex-direction: row;
    width: 1190px;
    height: 35px;
    margin: 0 auto;
    // position: relative;

    .left {
      float: left;
      width: 106px;
      a {
        span {
          padding: 4px;
        }
      }

      a:hover {
        color: #f63;
      }
    }

    .right {
      float: right;
      // width: 510px;
      // position: absolute;
      right: 0;
      font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
      display: flex;

      a {
        position: relative;
        .hov {
          height: 100px;
          width: 250px;
          background: #ffffff;
          position: absolute;
          top: 35px;
          left: 3px;
          z-index: 9;
          .des {
            margin: 0 auto;
            width: 230px;
            height: 40px;
            // background: pink;
            display: flex;
            margin-top: 10px;
            .ava {
              width: 40px;
              height: 60px;
              margin-top: 10px;
              // background: slateblue;

              i {
                font-size: 40px;
                color: #f63;
              }
            }

            .info {
              width: 230px;
              height: 60px;
              // background: peru;
              .name {
                height: 30px;
                line-height: 30px;
                // background:palegreen ;
                text-align: left;
                margin-left: 12px;
              }
              .basic {
                display: flex;
                height: 30px;
                // background: purple;
                p {
                  height: 30px;
                  width: 70px;
                  margin: 0;
                  padding: 0;
                }
              }
            }
          }
          .set {
            margin: 0 auto;
            margin-top: 20px;
            width: 230px;
            height: 40px;
            // background: seagreen;
            display: flex;
            .white {
              background-image: pink;
              width: 70px;
              height: 40px;
            }
            .out {
              display: flex;
              height: 30px;
              margin-right: 0;
              // background: salmon;
              line-height: 30px;
              a {
                color: #8c8c8c;
                font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
                font-size: 12px;
              }

              span {
                color: #8c8c8c;
              }
            }
          }
        }
      }

      a {
        margin-right: 10px;
        padding: 0 14px;
        margin: 0px 0;
      }
    }
  }
}
</style>
