<template>
  <div class="main-container">
    <div class="left-container">
      <div class="hot-group">
        <div class="container-title">
          热门部落
          <a href="javascript:;" class="color-hover"
            >查看全部
            <i class="iconfont iconjiantou34"></i>
          </a>
        </div>
        <ul>
          <li  v-for="(thumbs, index) in communityTagsInfo.thumbList" :key="thumbs.id">
            <a href="javascript:;">
              <img
                class="thumb"
                :src="thumbs.Imgsrc"
                alt
                style="width:60px;height:60px"
              />
              <div class="content">
                <h3>{{thumbs.title}}</h3>
                <p>{{thumbs.total}}帖子</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="post-container">
        <div class="tabs container-title">
          <div class="active">
            <i class="iconfont icondianzan-copy"></i>编辑精选
          </div>
          <div>最新发帖</div>
        </div>
        <div class="recommend">
          <ul class="post-lists" v-if="communityTagsInfo.postInfoList">
            <li class="bghover" v-for="(postInfo, index) in communityTagsInfo.postInfoList.slice(0,a)" :key="postInfo.id">
              <div class="post-infos">
                <h3>
                  <a href="javascript:;" class="title">{{postInfo.title}}</a>
                </h3>
                <p>
                  <a href="javascript:;">
                   {{postInfo.desc}}
                  </a>
                </p>
                <div class="userinfo">
                  <a
                    href="javascript:;"
                  >
                    <img
                      class="avatar"
                      :src="postInfo.headPhoto"
                    />
                  </a>
                  <a
                    class="username"
                    href="javascript:;"
                  >
                    {{postInfo.name}}
                  </a>
                  <span class="level">{{postInfo.level}}</span>
                  <a
                    class="group"
                    href="javascript:;"
                    >{{postInfo.group</a
                  >
                  <span  title="查看数"><i class="iconfont iconyanjing"></i>{{postInfo.view}}</span>
                  <span class="comment" title="评论数"><i class="iconfont iconpinglun"></i>{{postInfo.comment}}</span>
                </div>
              </div>
              <a href="http://s.dianping.com/topic/68351402?utm_source=forum_pc_index" target="_blank">
                <img class="thumb" :src="postInfo.ImgUrl">
              </a>
            </li>
          </ul>
          <span class="jiazai" @click="jiazai">加载更多</span>
        </div>
        <div class="recent"></div>
      </div>
    </div>
    <div class="right-container">
      <div class="user-container unlogin">
        <a class="avatar">
            <img src="//p0.meituan.net/dpgroup/03f55c22dda29d74bb6290a21eb7d9f53557.png">
        </a>
        <div class="infos">
            <span class="username">你好，吃货</span>
            <p class="clock-info">欢迎加入社区    发现真实生活</p>
        </div> 
        <div class="login-area">
            <router-link to="/login"  id="login">  登录</router-link>
             <router-link to="/register"  id="register"> 注册</router-link>
            
        </div> 
        <div class="tabs">
            <div class="my-community-btn active" data-tab="my-community" id="my-community-btn">
                <i class="iconfont iconavatar1"></i><br>
                <span>我的社区</span>
            </div>
            <div class="last-view-btn" data-tab="last-view" id="last-view-btn">
                <i class="iconfont icontime"></i><br>
                <span>最近浏览</span>
            </div>
            <span class="line"></span>
        </div>
        <div class="my-community tab-item" id="my-community">
          <a class="my-group bghover"><i class="iconfont iconrenqun"></i>我加入的部落 <span>0</span></a>
            <a class="my-post bghover"><i class="iconfont iconzhifeiji"></i>我发表的帖子 <span>0</span></a>
            <a class="my-reply bghover"><i class="iconfont iconforward"></i>我回复的帖子 <span>0</span></a>
        </div>
        <div class="last-view tab-item" id="last-view" style="display:none">
            <div class="no-view">你还没有浏览记录，去看看帖子吧~ </div>
        </div>
        
      </div>
        
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Community",
  data(){
    return{
      a:5
    }
  },
  mounted() {
    this.getCommunityTags();
  },
  methods: {
    async getCommunityTags() {
      const result = await this.$store.dispatch("getCommunityTagsInfoActions");
    },

    jiazai(){
      this.a+=3
    }
  },
  computed:{
    ...mapState({
      communityTagsInfo:state =>state.community.communityTagsInfo
    })
  }
};
</script>

<style lang="less" scoped>
.main-container {
  width: 1190px;
  margin: 0 auto;
  margin-top: 20px;
  height: 100%;
  overflow: hidden;
  .left-container {
    float: left;
    width: 880px;
    // height: 500px;
    height: 100%;
    .hot-group {
      width: 870px;
      height: 176px;
      ul {
        display: flex;
        padding: 0 0 20px 20px;
        // font-size: 0;
      }
      li {
        display: inline-block;
        width: 60px;
        height: 102px;
        margin-right: 50px;
        margin-bottom: 0;
        a {
          display: block;
          width: 102px;
          height: 60px;
          .thumb {
            width: 60px;
            height: 60px;
            display: block;
          }
          .content {
            text-align: center;
            width: 100px;
            margin-left: -20px;
            margin-top: 5px;
            white-space: nowrap;
            h3 {
              display: inline-block;
              overflow: hidden;
              font-size: 14px;
              color: #111;
              max-width: 6em;
              height: 20px;
              line-height: 20px;
            }
            p {
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 12px;
              color: #999;
              letter-spacing: 0;
              height: 17px;
              line-height: 17px;
            }
          }
        }
      }
      .container-title {
        margin-bottom: 12px;
        box-sizing: border-box;
        font-size: 16px;
        width: 868px;
        height: 44px;
        font-weight: 700;
        color: #111;
        padding: 20px 20px 0;
        a {
          float: right;
          font-size: 14px;
          display: block;
          font-weight: 400;
        }
      }
    }
    .post-container {
      width: 870px;
      // height: 600px;
      margin-bottom: 10px;
      background-color: #fff;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      .container-title {
        font-weight: 700;
        font-size: 16px;
        color: #111;
        padding: 20px 20px 0;
        border-bottom: 1px solid #f0f0f0;
      }
      .tabs div {
        cursor: pointer;
        display: inline-block;
        margin-right: 22px;
        padding-bottom: 8px;
      }
      .recommend {
        .jiazai {
          width: 868px;
          height: 60px;
          display: block;
          border: 1px solid #F0F0F0;
          text-align: center;
          font-size: 15px;
          line-height: 60px;
        }
        .post-lists {
          width: 662px;
          .bghover {
            .post-infos {
              .userinfo {
                text-align: left;
                margin-top: 7px;
                height: 20px;
                line-height: 20px;
                a {
                  display: inline-block;
                  vertical-align: middle;
                }
                .username {
                  font-size: 12px;
                  color: #111;
                }
                .level {
                  height: 17px;
                  line-height: 17px;
                  padding: 0 3px;
                  font-size: 12px;
                  color: #999;
                  background: #f0f0f0;
                  transform: scale(0.83333333);
                }
                .group {
                  margin-left: 19px;
                  font-size: 12px;
                  color: #999;
                }
                span {
                  margin-left: 19px;
                  font-size: 12px;
                  color: #999;
                }
              }
              .avatar {
                display: inline-block;
                height: 20px;
                border-radius: 20px;
                overflow: hidden;
              }
              h3 {
                display: flex;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 30px;
                font-size: 16px;
                color: #111;
                a.title {
                  color: #000;
                  font-size: 20px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                p {
                  font-size: 12px;
                  color: #999;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  a {
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
        ul {
          display: block;
        }
        li {
          position: relative;
          padding-top: 17px;
          min-height: 150px;
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 20px;
          cursor: pointer;
        }
        li > a {
          height: 113px;
          width: 150px;
          position: absolute;
          right: -190px;
          top: 18px;
          display: block;
          overflow: hidden;
          // background-image: url(//p1.meituan.net/dpgroup/3854810….png);
          // background-size: 60px;
          // background-repeat: no-repeat;
          // background-color: #e6e6e6;
          // background-position: 50%;
          .thumb {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .right-container {
    float: right;
    width: 310px;
    box-sizing: border-box;
    // height: 496px;
    .user-container.unlogin {
      .tabs {
        border-top: 1px solid #f0f0f0;
        padding-top: 16px;
        height: 100px;
        box-sizing: border-box;
        position: relative;
        font-size: 0;
        div {
          cursor: pointer;
          font-weight: 700;
          display: inline-block;
          width: 50%;
          font-size: 0;
          text-align: center;
          background-repeat: no-repeat;
          background-position: top;
          background-size: auto 36px;
          // padding-top: 40px;
          i {
            display: inline-block;
            font-size: 30px;
          }
          span {
            display: inline-block;
            font-size: 14px;
            padding-bottom: 4px;
          }
        }
      }
      .login-area {
        height: 26px;
        text-align: center;
        margin-bottom: 25px;
        a {
          display: inline-block;
          height: 26px;
          line-height: 26px;
          background-image: linear-gradient(-163deg, invalid gradient);
          background-color: #f63;
          border-radius: 1px;
          width: 72px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }
        #login {
          margin-right: 5px;
        }
      }
      .clock-info {
        padding-bottom: 8px;
      }
    }
    .user-container {
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      margin-bottom: 10px;
      background-color: #fff;
      padding: 20px;
      height: 486px;
      position: relative;
      .my-community {
        a {
          display: block;
          height: 46px;
          line-height: 46px;
          box-sizing: border-box;
          border: 1px solid #f0f0f0;
          border-radius: 2px;
          font-weight: 700;
          font-size: 14px;
          color: #111;
          position: relative;
          margin-top: 10px;
          background-repeat: no-repeat;
          background-size: 24px auto;
          background-position: 6px;
          padding-left: 36px;
          i {
            margin-right: 5px;
            margin-left: -30px;
          }
          span {
            text-align: center;
            position: absolute;
            display: inline-block;
            height: 18px;
            line-height: 18px;
            color: #999;
            vertical-align: middle;
            background-color: #f0f0f0;
            width: 40px;
            border-radius: 20px;
            top: 50%;
            margin-top: -9px;
            right: 20px;
            font-size: 10px;
            font-weight: 400;
          }
        }
      }
      .clock-info {
        text-align: center;
        font-size: 14px;
        color: #999;
      }
      .infos {
        text-align: center;
        font-size: 0;
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .username {
          font-size: 14px;
          color: #111;
          margin-right: 4px;
          max-width: 160px;
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
        }
      }
      .avatar {
        display: block;
        width: 60px;
        height: 60px;
        margin: 4px auto 8px;
        pointer-events: none;
        img {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background-size: 60px;
          background-repeat: no-repeat;
          background-color: #e6e6e6;
          background-position: 50%;
          background-image: none;
        }
      }
    }
  }
}
</style>
