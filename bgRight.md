  <div class="bgRight" >
                   <!-- 登录框 -->
                   <div class="loginForm">
                      <!-- 头部区域 -->
                      <div class="loginTop">
                          <p class="quick " ><a href="javascript:;" @click="checkLogin(0)
                          ">快捷登录</a></p>
                          <p class="log "><a href="javascript:;" @click="checkLogin(1)">手机密码登录</a></p>
                      </div>
                    <Pass v-if="count===1"></Pass>
                    <Quick v-else></Quick>
                    
                 
                      <!-- 底部其他登录方式 -->
                      <div class="loginFoot">
                          <div class="Pic">
                              <img src="./images/github.png" alt="github" @click="githubLogin">
                              <img src="./images/qq.png" alt="qq">
                              <img src="./images/wechat.png" alt="wechat">
                          </div>
                          <div class="toRegister">
                              <!-- <p><a href="/register" >注 册</a></p> -->
                              <p>
                                  <router-link to="/register">注 册</router-link>
                              </p>
                          </div>
                         
                      </div>
                   </div>

               </div>