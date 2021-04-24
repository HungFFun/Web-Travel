<template>
  <div>
    <nav-user></nav-user>

    <mdb-container>
      <nav-page class="mt-5 pt-5"></nav-page>
      <!-- tìm kiếm  -->

      <mdb-tbl>
        <mdb-tbl-body>
          <tr class="text-center">
            <td class="font-weight-bold" style="padding-top: 29px;">
              Nơi khỏi hành
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender"
                style="height:48px"
                v-model="post.startPlace"
                v-on:change="getAllTour()"
              >
                <option selected> -- Tất cả -- </option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Binh Dương">Bình Dương</option>
                <option value="Cà Mau">Cà Mau</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Đà Lạt">Đà Lạt</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Huế">Huế</option>
                <option value="Nha Trang">Nha Trang</option>
                <option value="Phú Quốc">Phú Quốc</option>
                <option value="Vinh">Vinh</option>
                <option value="Vũng tau">Vũng tau</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px;">
              Giá
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender "
                style="height:48px"
                v-model="post.adult"
                v-on:change="getAllTour()"
              >
                <option selected> -- Tất cả -- </option>
                <option value="1">Dưới 1 triệu</option>
                <option value="2">2-4 triệu</option>
                <option value="3">4-6 triệu</option>
                <option value="4">4-6 triệu</option>
                <option value="5">Trên 10 triệu</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px;">
              Ngày đi
            </td>
            <td>
              <input
                type="date"
                id="example1"
                class="form-control form-control-lg select_gender "
                v-model="post.startDate"
                v-on:click="getAllTour()"
              />
            </td>
          </tr>
          <tr class="text-center">
            <td class="font-weight-bold" style="padding-top: 29px;">
              Phương tiện di chuyển
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender "
                style="height:48px"
                v-model="post.endDate"
                v-on:change="getAllTour()"
              >
                <option selected> -- Tất cả -- </option>
                <option value="Máy bay">Máy bay</option>
                <option value="Ô tô">Ô tô</option>
                <option value="Xe lửa">Xe lửa</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px;">
              Chỗ ngồi
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender "
                style="height:48px"
              >
                <option selected value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px;">
              Ngày về
            </td>
            <td>
              <input
                type="date"
                id="example1"
                class="form-control form-control-lg select_gender "
                v-model="post.endDate"
                v-on:click="getAllTour()"
              />
            </td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <template>
        <div v-for="tour in items" :key="tour._id">
          <div v-on:click="detail(tour._id)">
            <hr class="my-3" />
            <mdb-row>
              <mdb-col col="12">
                <p class="tour-name">{{ tour.tourName }}</p>
              </mdb-col>
            </mdb-row>

            <mdb-row>
              <mdb-col lg="5">
                <mdb-view class="rounded z-depth-2 mb-lg-0 " hover>
                  <img
                    class="img-fluid"
                    :src="tour.listImage[2]"
                    alt="Sample image"
                  />
                </mdb-view>
              </mdb-col>
              <mdb-col lg="7">
                <mdb-row>
                  <mdb-col col="12">
                    <mdb-icon icon="barcode" class="mr-1 mb-1" />
                    <span class="tour-code">{{ tour.tourId }}</span>
                  </mdb-col>
                </mdb-row>

                <hr />
                <mdb-row class="mt-3">
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
                    <span class="text-monospace">{{ tour.startPlace }}</span>
                  </mdb-col>
                </mdb-row>
                <hr />
                <mdb-row class="mt-3">
                  <mdb-col col="6">
                    <span class="font-weight-bold">Giá vé:</span><br />

                    <span class="font-weight-bold">Số vé còn:</span>
                  </mdb-col>
                  <mdb-col col="6" class="pl-0">
                    <span class="tour-name">{{
                      formatMoney(tour.priceDetail.adult)
                    }}</span>
                    <br />
                    <span class="text-monospace">
                      {{ tour.numberOfParticipants }}
                    </span>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </div>
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
      post: {
        startPlace: null,
        endDate: null,
        adult: null,
        startDate: null,
      },
    };
  },
  mounted() {
    this.getAllTour();
  },
  methods: {
    getAllTour() {
      let uri = `${process.env.VUE_APP_PORT}/tours/keyword`;
      this.axios.post(uri, this.post).then((response) => {
        this.items = response.data.data;
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
    initEdit(idTour) {
      this.$router.push({ name: 'detail-tour', params: { id: idTour } });
    },
    detail(idTour) {
      this.$router.push({ name: 'TourDetail', params: { id: idTour } });
    },
  },
};
</script>

<style>
.select_gender {
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid #c6c6c6;
}
</style>
