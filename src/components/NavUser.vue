<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">
        <span style="color:black"> Banda Fly</span></mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#" waves-fixed>
            <router-link to="/">
              <span style="color:black">Home</span>
            </router-link>
          </mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>
            <span style="color:black">Features</span>
          </mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>
            <span style="color:black">Pricing</span></mdb-nav-item
          >
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
    return {};
  },
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
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
