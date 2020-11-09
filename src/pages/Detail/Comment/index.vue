<template>
  <div>
    <div class="warp">
      <div class="commentContainer">
        <div class="title">我要评价</div>
        <!-- 打分+评价区域 -->
        <div class="rateContaner">
          <!-- 每个评分 -->
          <div class="retaItem">
            <div class="allComent">总体评价 <i class="star">*</i></div>
            <el-rate v-model="allReta" show-text :texts="texts" allow-half>
              为服务评价
            </el-rate>
          </div>
          <div class="retaItem">
            <div class="allComent">口味<i class="star">*</i></div>
            <el-rate v-model="descNum" show-text :texts="otherTexts" allow-half>
              为服务评价
            </el-rate>
          </div>
          <div class="retaItem">
            <div class="allComent">环境<i class="star">*</i></div>
            <el-rate
              v-model="surroundingNum"
              show-text
              :texts="otherTexts"
              allow-half
            >
              为服务评价
            </el-rate>
          </div>
          <div class="retaItem">
            <div class="allComent">服务<i class="star">*</i></div>
            <el-rate
              v-model="serviceNum"
              show-text
              :texts="otherTexts"
              allow-half
            >
              为服务评价
            </el-rate>
          </div>
          <div class="retaItem">
            <div class="allComent">食材<i class="star">*</i></div>
            <el-rate v-model="foodNum" show-text :texts="otherTexts" allow-half>
              为服务评价
            </el-rate>
          </div>
          <!-- 评价区域 -->
          <div class="retaItem">
            <div class="allComent">评价<i class="star">*</i></div>
            <el-input
              type="textarea"
              :rows="4"
              v-model="commentContent"
              placeholder="亲，菜品口味如何，环境怎么样服务满意吗？食材新鲜吗"
            ></el-input>
          </div>
          <!-- 上传图片视频区域 -->
          <div style="margin: 10px 0 0 10px">图片/视频</div>
          <div class="retaItem">
            <el-upload
              class="upload-demo"
              action="/api/uploadcomment"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
              :file-list="imgList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
          <div class="retaItem">
            <div class="allComent">人均</div>
            <el-input v-model="capitaPrice"></el-input>
          </div>
          <!-- //喜欢的菜区域 -->
          <div class="retaItem">
            <div class="likeDishes">
              <div class="title">喜欢的菜</div>
              <div class="item">
                <el-tag
                  type="info"
                  style="margin-right: 10px"
                  class="tagInfo"
                  v-for="(item, index) in likeDishes"
                  :key="index"
                  :class="item.isSelected ? 'active' : ''"
                  @click="checkDishes(item)"
                  >{{ item.name }}</el-tag
                >
              </div>
            </div>
          </div>
          <div class="btn">
            <el-button type="primary" @click="postReview">发表评论</el-button>
            <el-button type="info" @click="cancleBack">取消评论</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  {uploadcomment} from '../../../api/xcApi'
export default {
  name: "",
  props: ["shopTagsInfo","visible"],
  data() {
    return {
      allReta: 0,
      descNum: 0,
      surroundingNum: 0,
      serviceNum: 0,
      foodNum: 0,
      texts: ["非常糟糕", "有些糟糕", "可以尝试", "推荐前往", "极力推荐"],
      otherTexts: ["很差", "较差", "一般", "满意", "超赞"],
      commentContent: "",
      imgList: [],
      capitaPrice: "",
      
    
    };
  },
  methods: {
    //清空评论的内容
    initComment(){
       this.allReta = 0,
       this.descNum= 0,
       this.surroundingNum = 0,
       this.serviceNum = 0,
       this.foodNum = 0,
       this.commentContent="",
       this.imgList= [],
       this.capitaPrice= ""
       this.selectedLikeDishesList.map(item=>{
         item.isSelected = false;
       })
    },
    //发表评论
    async  postReview(){
     let   {allReta,descNum,surroundingNum,serviceNum,foodNum,commentContent,imgList,capitaPrice,selectedLikeDishesList} = this
    //  取出所有的分数
     let star = {
       allReta,
       descNum,
       surroundingNum,
       serviceNum,
       foodNum
     }
     //取出用户信息
     let {userNickName,userFace} = this.shopTagsInfo;
     //整理图片参数
     let imgId = 1
     let newImgList = imgList.map((item)=>{
      return {
        url:item.url,
        piciId:imgId++
      }
    })
    if(!star|| !commentContent){
      this.$message.error("请填写必填项")
      return
    }
    //整理参数
    let commentId  = 0
    var commentInfo = {
      star,
      userNickName,
      userFace,
      commentContent,
      newImgList,
      capitaPrice,
      selectedLikeDishesList,
      commentId:commentId++
    }
    //发请求提交留言
   
       const result = await uploadcomment(commentInfo)
        // 成功如何
        if(result.code===200){
            this.$message.success("提价评论成功")
            this.$emit("update:visible")
            this.$store.dispatch('getCommentListActions')
            this.initComment()
            //this.swiperHandle()
        } else{
          this.$message.error('提交留言失败')
        }   
    },

    //点击取消评论
    cancleBack(){
     this.$emit("update:visible")
     this.initComment()
       // this.swiperHandle()

    },
    //点击喜欢的菜 收集喜欢的菜
    checkDishes(item){
      item.isSelected=!item.isSelected
    },
    //图片删除的函数
    handleRemove(file, fileList) {
      this.imgList = fileList;
    },
    //图片上成功的函数
    handleSuccess(file, fileList) {
      console.log(fileList);
      this.imgList.push(fileList);
    },
  },
  computed: {
    likeDishes() {
      return this.shopTagsInfo.likeDishes || [];
    },
    selectedLikeDishesList(){
      let selectedLikeDishesList =  this.likeDishes.filter(item=>{
          return item.isSelected
      })
      return selectedLikeDishesList
    }
  },
};
</script>

<style lang="less" scoped>
.warp {
  margin-top: 20px;
  background-color: #fff;
  .commentContainer {
    box-sizing: border-box;
    padding: 24px 60px 46px 20px;
    margin-bottom: 10px;
    background: #fff;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333;
      margin-bottom: 17px;
    }
    .rateContaner {
      background-color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      .retaItem {
        // position: relative;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 16px;
        .allComent {
          width: 88px;
          height: 24px;
          line-height: 24px;
          text-align: right;
          color: #333;
          margin-right: 12px;
          .star {
            font-style: normal;
            color: #f63;
            font-size: 14px;
            line-height: 20px;
          }
        }
        .upload-demo {
          margin-left: 90px;
          margin-top: -15px;
        }
        .likeDishes {
          position: relative;
          .title {
            position: absolute;
            left: 8px;
            top: 8px;
            font-size: 16px;
          }
          display: flex;
          .item {
            margin-left: 90px;
            .tagInfo {
              margin: 5px 0;
              &.active {
                color: #f63;
                border: 1px #f63 solid;
                background: #fff;
              }
            }
          }
        }
      }
      .btn {
        padding: 0 90px;
      }
    }
  }
}
</style>

