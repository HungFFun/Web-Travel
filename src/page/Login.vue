<template>
  <div>
    <nav-user></nav-user>
    <mdb-container style="padding-top: 100px" class="mb-5 ">
      <mdb-row>
        <mdb-col col="12">
          <mdb-row>
            <mdb-col col="12" class="form-group font-weight-bold text-center">
              Chào mừng bạn đến với Banda Fly
            </mdb-col>
          </mdb-row>
          <mdb-row class="border-bottom">
            <mdb-col col="12" class="text-center" style="padding-left: 28rem;">
              <mdb-list-group
                class=" custom list-group-flush  width-list-group   "
                style="background-color: white !important;"
              >
                <mdb-list-group-item
                  @click.native="activeItem = 'detail-tour'"
                  :class="activeItem === 'detail-tour' && 'activet'"
                  style="background-color: white;"
                >
                  <mdb-icon icon="spinner" class="mr-3" />
                  <span> Đang nhập</span>
                </mdb-list-group-item>
                <mdb-list-group-item
                  @click.native="activeItem = 'detail'"
                  :class="activeItem === 'detail' && 'activet'"
                  style="background-color: white;"
                >
                  <mdb-icon icon="list-ul" class="mr-3" /> Đăng ký
                </mdb-list-group-item>
              </mdb-list-group>
            </mdb-col>
          </mdb-row>
        </mdb-col>
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
  </div>
</template>

<script>
import NavUser from '../components/NavUser.vue';
export default {
  components: { NavUser },
  data() {
    return {
      activeItem: 'detail-tour',
    };
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
}
</style>
