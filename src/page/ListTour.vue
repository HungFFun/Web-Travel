<template>
  <div>
    <nav-user></nav-user>

    <mdb-container>
      <div style="height:6rem"></div>
      <nav-page></nav-page>
      <template>
        <div v-for="tour in items" :key="tour._id">
          <hr class="my-3" />
          <mdb-row>
            <mdb-col lg="5">
              <mdb-view class="rounded z-depth-2 mb-lg-0 " hover>
                <img
                  class="img-fluid"
                  :src="tour.listImage[0]"
                  alt="Sample image"
                />
              </mdb-view>
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row>
                <mdb-col col="12">
                  <p class="tour-name">{{ tour.tourName }}</p>
                  <mdb-icon icon="barcode" class="mr-1 mb-1" />
                  <span class="tour-code">{{ tour.tourId }}</span>
                </mdb-col>
              </mdb-row>

              <hr />
              <mdb-row class="mt-4">
                <mdb-col col="6">
                  <span class="font-weight-bold">Khởi hành:</span> <br />
                  <span class="font-weight-bold">Thời gian:</span> <br />
                  <span class="font-weight-bold">Nơi khởi hành:</span>
                </mdb-col>
                <mdb-col col="6" class="pl-0">
                  <span class="text-monospace">{{
                    formatDate(tour.startDate)
                  }}</span>
                  <br />
                  <span class="text-monospace">
                    {{ tour.numberOfDays }} Ngày
                  </span>
                  <br />
                  <span class="text-monospace">Hồ Chí Minh</span>
                </mdb-col>
              </mdb-row>
              <hr />
              <mdb-row class="mt-4">
                <mdb-col col="6">
                  <span class="font-weight-bold">Giá vé:</span><br />

                  <span class="font-weight-bold">Số vé còn:</span>
                </mdb-col>
                <mdb-col col="6" class="pl-0">
                  <span class="tour-name">{{ tour.priceDetail.adult }} đ</span>
                  <br />
                  <span class="text-monospace">
                    {{ tour.numberOfParticipants }}
                  </span>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </div>
      </template>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import FooterB from '../components/FooterB.vue';
import NavPage from '../components/NavPage.vue';
import NavUser from '../components/NavUser.vue';
import moment from 'moment';
export default {
  components: { NavUser, FooterB, NavPage },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getAllTour();
  },
  methods: {
    getAllTour() {
      let uri = `${process.env.VUE_APP_PORT}/tours`;
      this.axios.get(uri, this.ticket).then((response) => {
        this.items = response.data.data;
      });
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
    },
  },
};
</script>

<style lang="scss" scoped></style>
