<template>
  <div>
    <div id="fb-root"></div>
    <nav-user></nav-user>
    <mdb-container style="padding-top: 36px" class="mb-5 ">
      <mdb-row>
        <mdb-col col="12">
          <div class="container-longin-user">
            <mdb-row>
              <mdb-col
                col="12"
                class="form-group font-weight-bold text-center"
                style="font-size: 26px;"
              >
                Chào mừng bạn đến với Banda Fly
              </mdb-col>
            </mdb-row>
            <mdb-row class="border-bottom mb-4">
              <mdb-col col="12" class="text-center">
                <mdb-list-group
                  class=" custom list-group-flush  width-list-group   "
                  style="background-color: white !important;"
                >
                  <mdb-list-group-item
                    @click.native="activeItem = 'login'"
                    :class="activeItem === 'login' && 'activet'"
                    style="background-color: white;"
                  >
                    <mdb-icon icon="spinner" class="mr-3" />
                    <span> Đang nhập </span>
                  </mdb-list-group-item>
                  <mdb-list-group-item
                    @click.native="activeItem = 'register'"
                    :class="activeItem === 'register' && 'activet'"
                    style="background-color: white;"
                  >
                    <mdb-icon icon="list-ul" class="mr-3" /> Đăng ký
                  </mdb-list-group-item>
                </mdb-list-group>
              </mdb-col>
            </mdb-row>
            <!-- đăng nhập  -->

            <mdb-row v-if="activeItem === 'login'">
              <mdb-col col="12">
                <form @submit="login()">
                  <div class="form-group">
                    <label for="example1">
                      Email (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Nhập địa chỉ Email"
                      required="required"
                      class="form-control"
                      v-model="account.email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="example1">
                      Password (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="text"
                      id="password"
                      placeholder="Nhập mật khẩu của bạn"
                      required="required"
                      class="form-control"
                      v-model="account.password"
                    />
                  </div>
                  <mdb-btn
                    outline="primary "
                    style="width: 100%;"
                    class="m-0"
                    type="submit"
                  >
                    Đăng nhập
                  </mdb-btn>
                </form>

                <mdb-row class="mt-2">
                  <mdb-col col="12" class="text-center">
                    <span
                      v-on:click="forgotPassword()"
                      class=" forgot-password"
                      style="color: #fa8c16;"
                    >
                      Quên mật khẩu ?
                    </span>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
            <!-- đăng ký tài khoản  -->
            <mdb-row v-if="activeItem === 'register'">
              <mdb-col col="12">
                <div class="form-group">
                  <label for="example1">
                    Họ tên (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="example1">
                    Ngày sinh (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="date"
                    id="email"
                    placeholder="Nhập địa chỉ Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="example1">
                    SDT (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Nhập địa chỉ Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="example1">
                    Email (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="example1">
                    Mật khẩu (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="example1">
                    Mật khẩu (<span style="color:red">*</span>)
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập lại mật khẩu"
                    class="form-control"
                  />
                </div>
                <mdb-btn
                  color="primary"
                  class="btn-facebook"
                  style="width: 100%;"
                  v-on:click="register()"
                >
                  Tiếp tục
                </mdb-btn>
                <mdb-row>
                  <mdb-col class="text-center">
                    <span style="font-size: 14px;">
                      Bằng cách đăng ký tài khoản bạn đã chấp thuận các điều
                      khoản của Banda Fly
                    </span>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>

            <!-- login google or facebook  -->

            <hr />
            <div>
              <mdb-row class="mt-2">
                <mdb-col col="12" class="text-center">
                  <span style=" font-weight: bold">
                    Hoắc đăng nhập thông quá :
                  </span>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-2">
                <mdb-col col="12" class="text-center">
                  <br />

                  <mdb-btn
                    color="primary"
                    class="mb-2 btn-facebook "
                    style="width: 100%;"
                    v-on:click="loginFacebook()"
                  >
                    <mdb-icon fab icon="facebook-square" class="mr-3" />
                    Đăng nhập quá Facebook
                  </mdb-btn>

                  <mdb-btn
                    outline="primary"
                    style="width: 100%;"
                    v-on:click="loginGoogle()"
                  >
                    <mdb-icon fab icon="google-plus-g" class="mr-3" />

                    Đăng nhập quá Google
                  </mdb-btn>
                </mdb-col>
              </mdb-row>
            </div>
          </div>
        </mdb-col>
      </mdb-row>
      <mdb-row class="border-bottom">
        <mdb-col></mdb-col>
      </mdb-row>
    </mdb-container>

    <mdb-row>
      <mdb-col col="6">
        <img src="../assets/ft1.png" style="width: 52rem;" />
      </mdb-col>
      <mdb-col col="6">
        <img src="../assets/ft2.png" style="width: 52rem;" />
      </mdb-col>
    </mdb-row>

    <notifications
      group="auth"
      position="bottom top right"
      closeOnClick
      class="my-custom-class"
    />
  </div>
</template>

<script
  async
  defer
  crossorigin="anonymous"
  src="http://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=296689358726495&autoLogAppEvents=1"
  nonce="mH9YCUQa"
></script>

<script>
import NavUser from '../components/NavUser.vue';
import firebase from 'firebase';
export default {
  components: { NavUser },
  data() {
    return {
      activeItem: 'login',
      account: {
        email: null,
        password: null,
      },
      registerAcount: {
        fullName: null,
        birthday: null,
        phone: null,
        email: null,
        password: null,
      },
    };
  },
  mounted() {},
  methods: {
    loginWithFacebook() {
      window.FB.login((response) => {
        console.log('fb response', response);
      }, this.params);
    },
    checkLoginState() {
      console.log('a');
      /*global FB*/
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          var url = '/me?fields=name,email,birthday';
          FB.api(url, function(response) {
            console.log(response);
          });
        }
      });
    },

    notifications(message) {
      this.$notify({
        group: 'auth',
        text: message,
        type: 'error',
      });
    },
    forgotPassword() {
      console.log('A');
    },
    register() {
      this.activeItem = 'login';
    },
    login() {
      let uri = `${process.env.VUE_APP_PORT}/account/login`;
      this.axios.post(uri, this.account).then((response) => {
        if (response.data.message !== undefined) {
          this.notifications(response.data.message);
        } else {
          localStorage.setItem('token', JSON.stringify(response.data.token));
          this.$router.push({ name: 'Home' });
        }
      });
    },
    loginFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user.displayName);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },

    loginGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user.displayName);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.custom {
  flex-direction: row !important;
  background-color: #f1f1f1 !important;
}
.activet {
  border-bottom: 2px solid red !important;
  font-weight: bold;
}
.container-longin-user {
  width: auto;
  min-width: 375px;
  max-width: 448px;
  padding: 100px 20px 20px;
  margin: 0 auto;
}
.forgot-password:hover {
  color: red !important;
  font-size: 18px;
}
.btn-facebook {
  border-color: #1877f2 !important;
  background: #006aff !important;
}
</style>
