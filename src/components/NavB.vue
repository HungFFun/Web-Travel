<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">Banda Fly</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div style="height: 105vh">
      <div class="view intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask">
            <div class="container flex-center">
              <!-- <div class="white-text text-center">
                <h2>
                  This Navbar is fixed
                </h2>
                <h4>
                  It will always stay visible on the top, even when you scroll
                  down
                </h4>
                <p>
                  Full page intro with background image will be always displayed
                  in full screen mode, regardless of device
                </p>
              </div> -->
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
