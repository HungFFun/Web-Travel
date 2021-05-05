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
            <!-- đăng ký hoặc đăng nhập  -->

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
                    <mdb-icon icon="address-card" class="mr-3" /> Đăng ký
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
                      id="accountEmail"
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
                      id="accountPassword"
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
                <form @submit.prevent="register">
                  <div class="form-group">
                    <label for="example1">
                      Họ tên (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Nhập tên đăng ký"
                      class="form-control"
                      v-model="registerAcount.fullName"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.fullName.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.fullName.required"
                      class="invalid-feedback"
                    >
                      Không để trống tên
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="example1">
                      Ngày sinh (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="date"
                      id="birthday"
                      placeholder="Ngày sinh"
                      class="form-control"
                      v-model="registerAcount.birthday"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.birthday.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.birthday.required"
                      class="invalid-feedback"
                    >
                      Không để trống ngày sinh
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="example1">
                      SDT (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      class="form-control"
                      v-model="registerAcount.phone"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.phone.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.phone.required"
                      class="invalid-feedback"
                    >
                      Không để trống số điện thoại
                    </div>
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
                      v-model="registerAcount.email"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.email.required"
                      class="invalid-feedback"
                    >
                      Không để trống Email
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="example1">
                      Mật khẩu (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="text"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      class="form-control"
                      v-model="registerAcount.password"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.password.required"
                      class="invalid-feedback"
                    >
                      Không để trống mật khẩu
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="example1">
                      Mật khẩu (<span style="color:red">*</span>)
                    </label>
                    <input
                      type="text"
                      id="confirm_pasword"
                      placeholder="Nhập lại mật khẩu"
                      class="form-control "
                      v-model="registerAcount.confirm_pasword"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.confirm_pasword.$error,
                      }"
                    />
                    <div
                      v-if="
                        submitted && !$v.registerAcount.confirm_pasword.required
                      "
                      class="invalid-feedback"
                    >
                      Nhập lại mật khẩu để xác nhận
                    </div>
                  </div>
                  <mdb-btn
                    color="primary"
                    class="btn-facebook"
                    style="width: 100%;"
                    type="submit"
                  >
                    Tiếp tục
                  </mdb-btn>
                </form>

                <form>
                  <!-- <div class="form-group">
                    <label for="birthday">Ngày sinh</label>
                    <input
                      type="text"
                      v-model="registerAcount.birthday"
                      id="birthday"
                      name="birthday"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.birthday.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.registerAcount.birthday.required"
                      class="invalid-feedback"
                    >
                      Last Name is required
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      v-model="registerAcount.email"
                      id="email"
                      name="email"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.registerAcount.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.registerAcount.email.required"
                        >Email is required</span
                      >
                      <span v-if="!$v.registerAcount.email.email"
                        >Email is invalid</span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      v-model="registerAcount.password"
                      id="password"
                      name="password"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.registerAcount.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.registerAcount.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.registerAcount.password.minLength"
                        >Password must be at least 6 characters</span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      v-model="registerAcount.confirmPassword"
                      id="confirmPassword"
                      name="confirmPassword"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.registerAcount.confirmPassword.$error,
                      }"
                    />
                    <div
                      v-if="
                        submitted && $v.registerAcount.confirmPassword.$error
                      "
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.registerAcount.confirmPassword.required"
                        >Confirm Password is required</span
                      >
                      <span
                        v-else-if="
                          !$v.registerAcount.confirmPassword.sameAsPassword
                        "
                        >Passwords must match</span
                      >
                    </div>
                  </div> -->
                </form>

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
              <mdb-row>
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
    <footer-b></footer-b>

    <!-- thông báo  -->
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
import FooterB from '../components/FooterB.vue';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
  components: { NavUser, FooterB },
  data() {
    return {
      activeItem: 'login',

      // đăng nhập
      account: {
        email: null,
        password: null,
      },
      // user tạo tài khoản mới
      registerAcount: {
        fullName: '',
        birthday: '',
        phone: '',
        email: '',
        password: '',
        confirm_pasword: '',
      },
      // user đăng nhập bằng face hoặc google
      userLoginWithFaceOrGoogle: null,
      // validate
      submitted: false,
    };
  },
  validations: {
    registerAcount: {
      fullName: { required },
      birthday: { required },
      phone: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirm_pasword: { required, sameAsPassword: sameAs('password') },
    },
  },
  mounted() {},
  methods: {
    // tạo tài khoản
    register(e) {
      // validate
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // ----------

      let uri = `${process.env.VUE_APP_PORT}/account/register`;
      this.axios.post(uri, this.registerAcount).then((response) => {
        console.log(response);
        this.activeItem = 'login';
      });
    },
    // thông báo
    notifications(message) {
      this.$notify({
        group: 'auth',
        text: message,
        type: 'error',
      });
    },

    // quên mất khẩu
    forgotPassword() {
      console.log('A');
    },

    // 3 kiểu đăng nhập
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
          // The signed-in registerAcount info.
          var user = result.user.providerData[0];
          if (user !== null) {
            let uri = `${process.env.VUE_APP_PORT}/account/login-google-or-facebook`;
            this.axios.post(uri, user).then((response) => {
              localStorage.setItem(
                'token',
                JSON.stringify(response.data.token)
              );
              this.$router.push({ name: 'Home' });
            });
          }
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          if (email !== null) {
            console.log('Email đã được đăng ký trong hệ thống');
          }
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
          var user = result.user.providerData[0];
          if (user !== null) {
            let uri = `${process.env.VUE_APP_PORT}/account/login-google-or-facebook`;
            this.axios.post(uri, user).then((response) => {
              localStorage.setItem(
                'token',
                JSON.stringify(response.data.token)
              );
              this.$router.push({ name: 'Home' });
            });
          }
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          if (email !== null) {
            console.log('Email đã được đăng ký trong hệ thống');
          }
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
