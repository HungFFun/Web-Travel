<template>
  <div>
    <nav-b></nav-b>
    <mdb-container>
      <div style="height:6rem"></div>
      <nav-page></nav-page>
      <mdb-row>
        <mdb-col cols="12" class="pl-0">
          <p class="tour-name">
            {{ tour.tourName }}
          </p>
          <mdb-icon icon="barcode" class="mr-1 mb-1" />
          <span class="tour-code">{{ tour.tourId }}</span>
        </mdb-col>
      </mdb-row>
      <mdb-row style="background-color: #f1f1f1;">
        <mdb-col col="8" class="pl-0">
          <template>
            <mdb-carousel
              slide
              :interval="8000"
              :items="items"
              indicators
            ></mdb-carousel>
          </template>
        </mdb-col>
        <mdb-col col="4">
          <mdb-row class="mt-4">
            <mdb-col col="12">
              <mdb-row>
                <mdb-col col="12">
                  <div style="float: left;">
                    <template>
                      <mdb-rating v-model="value" />
                    </template>
                  </div>

                  <span
                    class="rating"
                    style="font-size: 14px; margin-left: 5px;"
                  >
                    <span class="average"> <strong>4.67</strong> </span>
                    <strong> / <span class="best">5 </span> </strong>trong
                    <span class="votes"> <strong>364</strong> </span> Đánh giá
                    <span class="summary"> </span>
                  </span>
                </mdb-col>
              </mdb-row>

              <mdb-row class="mt-1">
                <mdb-col col="12">
                  <mdb-icon icon="eye" class="mr-2" />
                  <span class="text-monospace">999</span>
                  <mdb-icon icon="thumbs-up" class="mr-2 ml-4" />
                  <span class="text-monospace">999</span>
                  <mdb-icon icon="comment" class="mr-2 ml-4" />
                  <span class="text-monospace">999</span>
                </mdb-col>
              </mdb-row>
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
              <span class="text-monospace">
                {{ formatDate(tour.startDate) }}
              </span>
              <br />
              <span class="text-monospace"> {{ tour.numberOfDays }} Ngày</span>
              <br />
              <span class="text-monospace"> {{ tour.startPlace }} </span>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-4">
            <mdb-col col="6">
              <span class="font-weight-bold">Giá vé:</span><br />

              <span class="font-weight-bold">Số vé còn:</span>
            </mdb-col>
            <mdb-col col="6" class="pl-0">
              <span class="tour-name">
                {{ formatMoney(tour.priceDetail.adult) }}
              </span>
              <br />
              <span class="text-monospace">
                {{ tour.numberOfParticipants }}
              </span>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-2">
            <mdb-col col="12">
              <mdb-btn
                color="danger"
                style="width: 326px;"
                icon="cart-plus"
                @click="bookTour(tour._id)"
              >
                Đặt ngay</mdb-btn
              >
            </mdb-col>
          </mdb-row>

          <hr />
          <mdb-row class="mt-2">
            <mdb-col col="12">
              <span class="font-weight-bold">Bạn cần hỗ trợ</span>
              <mdb-row class="mt-2">
                <mdb-col col="6"> </mdb-col>
                <mdb-col col="6"> </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>

      <mdb-row class="mt-4">
        <mdb-col col="12">
          <mdb-row>
            <mdb-col col="3">
              <mdb-row>
                <mdb-col col="12" style="background-color: #f1f1f1;">
                  <mdb-navbar-nav nav vertical>
                    <mdb-nav-item href="#" icon="spinner" class="mt-3">
                      <span class="ml-3 mt-3" style="color: black;">
                        Chương trình tour
                      </span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="list-ul" class="mt-2">
                      <span class="ml-3" style="color: black;">
                        Chi tiết tour
                      </span>
                    </mdb-nav-item>
                    <mdb-nav-item
                      href="#"
                      icon="exclamation-triangle"
                      class="mt-2"
                    >
                      <span class="ml-3" style="color: black;"> Lưu ý </span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="comments" class="mt-2">
                      <span class="ml-3" style="color: black;">
                        ý kiến khách hàng
                      </span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="headset" class="mt-2 mb-3">
                      <span class="ml-3" style="color: black;"> Liên hệ </span>
                    </mdb-nav-item>
                  </mdb-navbar-nav>
                </mdb-col>
              </mdb-row>
              <mdb-row style="background-color: #f1f1f1 ;" class="mt-3">
                <mdb-col col="12">
                  <mdb-row class=" mb-1">
                    <mdb-col
                      col="12"
                      style="background-color: #e1e1e1; height: 63px;"
                      class=""
                    >
                      <br />
                      <span class="font-weight-bold">
                        DỊCH VỤ ĐI KÈM
                      </span>
                      <br />
                    </mdb-col>
                  </mdb-row>

                  <ul style="margin-left: -16px;">
                    <li class="mt-3 mb-2 text-monospace">
                      Bữa ăn theo chương trình
                    </li>
                    <li class="mt-3 mb-2 text-monospace">Bảo hiểm</li>
                    <li class="mt-3 mb-2 text-monospace">Hướng dẫn viên</li>
                    <li class="mt-3 mb-2 text-monospace">Vé tham quan</li>
                    <li class="mt-3 mb-2 text-monospace">Vận chuyển</li>
                  </ul>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col style="background: #f1f1f1 ; " class="ml-2">
              <mdb-row style="background-color: #e1e1e1; height: 55px;">
                <mdb-col col="12">
                  <br />
                  <span class="font-weight-bold ">CHƯƠNG TRÌNH TOUR</span>
                </mdb-col>
              </mdb-row>
              <mdb-container>
                <mdb-row
                  class="mt-2 flex-grow-1 pb-2"
                  v-for="(value, index) in tour.numDay"
                  :key="index"
                >
                  <mdb-col
                    col="3"
                    class=" text-center  border-right border-danger flex-grow-1"
                  >
                    <h3 class="font-weight-bold " style="  color: #ff002d;">
                      {{ tour.numDay[index] }}
                    </h3>
                    <span class="font-weight-bold ">
                      {{ formatDate(tour.startDate) }}
                    </span>
                  </mdb-col>
                  <mdb-col col="9">
                    <p v-html="tour.detail[index]"></p>
                  </mdb-col>
                </mdb-row>
              </mdb-container>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>

      <hr />
      <mdb-row class="mb-3">
        <mdb-col cols="12">
          <b>
            <span>Các tour tương tự</span>
          </b>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col cols="12">
          <cards-tour></cards-tour>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import CardsTour from '../components/Cards-tour.vue';
import FooterB from '../components/FooterB.vue';
import NavPage from '../components/NavPage.vue';
import NavB from '../components/NavUser.vue';
import moment from 'moment';

import { mdbRating } from 'mdbvue';
export default {
  components: {
    NavB,
    FooterB,
    CardsTour,
    NavPage,
    mdbRating,
  },
  data() {
    return {
      tour: {
        priceDetail: {
          adult: null,
        },
      },
      value: 2,
      items: [],
    };
  },
  mounted() {
    this.findTour();
  },
  methods: {
    bookTour(idTour) {
      this.$router.push({ name: 'BookTour', params: { id: idTour } });
    },

    findTour() {
      let uri = `${process.env.VUE_APP_PORT}/tour/${this.$route.params.id}`;
      this.axios.get(uri, this.data).then((response) => {
        this.tour = response.data.data;
        // Lấy hình
        this.tour.listImage.forEach((img) => {
          const a = {
            img: true,
            src: img,
          };
          this.items.push(a);
        });
      });
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
    },
    formatMoney(money) {
      const formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(money);
    },
  },
};
</script>

<style>
.tour-name {
  color: #ff002d;
  font-weight: 500;
  font-size: 17.5px;
}
.tour-code {
  font-weight: 500;
}
.rating-icon {
  margin-left: -8px !important;
}
</style>
