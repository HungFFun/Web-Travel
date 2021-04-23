<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">
        <span style="color:black"> Banda Fly</span></mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#" waves-fixed class="mr-3 pr-4 border-right">
            <router-link to="/">
              <span
                style="color:black ;font-size: 22px; "
                class="font-weight-bold"
              >
                Home
              </span>
            </router-link>
          </mdb-nav-item>

          <mdb-nav-item waves-fixed class="mr-3 pr-3 pl-2 border-right">
            <mdb-icon
              icon="cart-plus"
              size="2x"
              class="black-text pr-3"
              aria-hidden="true"
              @click.native="loadData()"
            />
          </mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed class="mr-3 pr-3 pl-3 ">
            <mdb-icon
              icon="user-circle"
              size="2x"
              class="black-text pr-3"
              aria-hidden="true"
            />
          </mdb-nav-item>
          <div class="count-card  backgroud-count-cart text-center">
            <span class="font-weight-bold ">{{ countCart }}</span>
          </div>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div v-if="getUrl() === 'HelloWorld'" style="height: 105vh">
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

    <mdb-modal size="lg" :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Modal title</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
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
              <td class="font-weight-normal">{{ product.productName }}</td>
              <td class="font-weight-normal">
                {{ formatMoney(product.price) }}
              </td>
              <td class="font-weight-normal">@mdo</td>
              <td class="font-weight-normal">
                <mdb-btn color="primary" @click="removeFromCart(product)">
                  X
                </mdb-btn>
              </td>
            </tr>
            <tr>
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
      countCart: 0,
      productCart: [],
    };
  },
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl() {
      return this.$route.name;
    },
    loadData() {
      this.productCart.splice(0);
      this.$store.getters.inCart.map((pd) => {
        this.productCart.push(pd);
      });

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
  margin-top: 0px;
  margin-left: 158px;
  position: absolute;
}
.backgroud-count-cart {
  width: 20px;
  height: 20px;
  border-radius: 47%;
  background-color: red;
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
</style>
