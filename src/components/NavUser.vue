<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">
        <router-link to="/">
          <span class="font-weight-bold" style="color:black"> BANDA FLY</span>
        </router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#" waves-fixed class="mr-3 pr-4 border-right">
            <router-link to="/">
              <span style="color:black ; " class="font-weight-bold">
                Home
              </span>
            </router-link>
          </mdb-nav-item>

          <mdb-nav-item waves-fixed class="mr-3 pr-3 pl-2 border-right">
            <mdb-icon
              icon="cart-plus"
              size="1x"
              class="black-text pr-3"
              aria-hidden="true"
              @click.native="loadData()"
            />
          </mdb-nav-item>

          <mdb-dropdown
            v-if="userLogin.fullName !== null"
            tag="li"
            class="nav-item"
          >
            <mdb-dropdown-toggle
              icon="user-circle"
              tag="a"
              navLink
              slot="toggle"
              waves-fixed
            >
              {{ userLogin.fullName }}
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item v-on:click="toLoginPage()">
                Thông tin tài khoản
              </mdb-dropdown-item>

              <div class="dropdown-divider"></div>
              <mdb-dropdown-item v-on:click="logOut()">
                Đăng xuất
              </mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>

          <mdb-dropdown v-else tag="li" class="nav-item">
            <mdb-dropdown-toggle
              icon="user-circle"
              tag="a"
              navLink
              slot="toggle"
              waves-fixed
            >
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item v-on:click="toLoginPage()">
                Đăng nhập
              </mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <div class="count-card  backgroud-count-cart text-center">
            <span
              class="font-weight-bold text-center"
              style=" font-size: 13px;"
              >{{ countCart }}</span
            >
          </div>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>

    <!-- nền  -->
    <div v-if="getUrl() === 'Home'" style="height: 105vh">
      <div class="view intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask ">
            <div class="container flex-center">
              <div class="white-text text-center" style="margin-top: -87px;">
                <b>
                  <h2>
                    Người sống nhiều nhất
                  </h2>
                  <h4>
                    Không phải là người sống lâu năm nhất
                  </h4>
                  <p>
                    Mà là người có nhiều trải nghiệm phong phú nhất
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- giở hang  -->
    <mdb-modal size="lg" :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Giỏ hàng</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-tbl>
          <mdb-tbl-head>
            <tr>
              <th class="font-weight-bold">#</th>
              <th class="font-weight-bold">Tour</th>
              <th class="font-weight-bold">ID Tour</th>
              <th class="font-weight-bold">Số vé</th>
              <th class="font-weight-bold">Tiền vé</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr v-if="tour">
              <td></td>
              <td class="text-monospace">
                <p style="max-width: 300px;">{{ tour.tourName }}</p>
              </td>
              <td class="text-monospace">{{ tour.tourId }}</td>
              <td class="text-monospace">{{ inforBooking.totalPeople }}</td>
              <td>
                <span class="font-weight-bold" style="color: red">
                  {{ inforBooking.totalMoney }}
                </span>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
        <hr />
        <mdb-tbl>
          <mdb-tbl-head>
            <tr>
              <th class="font-weight-bold">#</th>
              <th class="font-weight-bold">Sản phảm</th>
              <th class="font-weight-bold">Giá</th>
              <th class="font-weight-bold">Số lượng</th>
              <th class="font-weight-bold">Action</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr v-for="product in productCart" :key="product._id">
              <th>
                <mdb-card-image
                  :src="product.image"
                  alt="Card image cap"
                  style="width: 143px;"
                >
                </mdb-card-image>
              </th>
              <td class="font-weight-normal ">{{ product.productName }}</td>
              <td class="font-weight-normal">
                {{ formatMoney(product.price) }}
              </td>
              <td class="font-weight-normal">@mdo</td>
              <td class="font-weight-normal">
                <mdb-btn
                  color="primary"
                  @click="removeFromCart(product)"
                  style=" border: none !important;font-size: 17px;color: black !important;"
                >
                  X
                </mdb-btn>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>
                <span class="font-weight-bold" style="color: red">
                  {{ formatMoney(10000) }}
                </span>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from 'mdbvue';
export default {
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
  },
  data() {
    return {
      modal: false,
      countCart: 10,
      productCart: [],
      tour: {},
      inforBooking: {},
      numberTicket: 0,
      post: { token: null },

      userLogin: {
        fullName: null,
      },
    };
  },
  mounted() {
    this.getUrl();
    this.getUserLogin();
  },

  methods: {
    getUserLogin() {
      this.post.token = JSON.parse(localStorage.getItem('token'));
      if (this.post.token !== null) {
        let uri = `${process.env.VUE_APP_PORT}/account/profile`;
        this.axios.post(uri, this.post).then((response) => {
          this.userLogin = response.data[0];
        });
      }
    },
    logOut() {
      localStorage.removeItem('token');
      this.$router.go(this.$router.currentRoute);
    },

    toLoginPage() {
      this.$router.push({ name: 'Login' });
    },
    getUrl() {
      return this.$route.name;
    },
    loadData() {
      this.productCart.splice(0);
      this.$store.getters.inCart.map((pd) => {
        this.productCart.push(pd);
      });
      this.tour = this.$store.getters.inTour;
      this.inforBooking = this.$store.getters.inforBooking;

      this.modal = true;
    },
    formatMoney(money) {
      const formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(money);
    },
    removeFromCart(product) {
      this.$store.dispatch('removeFromCart', product);
      this.productCart.splice(this.productCart.indexOf(product), 1);
    },
  },
};
</script>
<style>
.count-card {
  margin-top: 5px;
  margin-left: 140px;

  position: absolute;
}
.backgroud-count-cart {
  width: 22px;
  height: 22px;
  border-radius: 47%;
  background-color: red;
}
.user-login {
  margin-top: 5px;
  margin-left: 140px;

  position: absolute;
}
.view {
  background: url('https://images.unsplash.com/photo-1547906250-5bdf142c606d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1399&q=80')
    no-repeat center center;
  background-size: cover;
  height: 100%;
}

.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.nav-link {
  color: #212529 !important;
}
</style>
