<template>
  <mdb-navbar class="mb-5">
    <mdb-navbar-nav center style="height: 40px;">
      <mdb-nav-item href="#" class="mr-5 ml-5">Du lịch</mdb-nav-item>
      <mdb-nav-item href="#" class="mr-5  ml-5">Tin tức</mdb-nav-item>
      <mdb-nav-item href="#" class="mr-5  ml-5">Khuyễn mãi</mdb-nav-item>
      <mdb-nav-item href="#" class="mr-5  ml-5">Liên hệ</mdb-nav-item>
    </mdb-navbar-nav>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarNav } from 'mdbvue';
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarNav,
  },
};
</script>

<style scoped></style>
