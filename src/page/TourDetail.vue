<template>
  <div>
    <nav-b></nav-b>
    <mdb-container>
      <div style="height:6rem"></div>
      <nav-page></nav-page>
      <mdb-row>
        <mdb-col cols="12" class="pl-0">
          <p class="tour-name">
            Bay cùng Vietravel Airlines: Sapa - Fansipan - Lào Cai - Hà Nội -
            Yên Tử - Hạ Long (Tặng vé tàu hỏa Mường Hoa, khách sạn 4 sao tại Hạ
            Long)
          </p>
          <mdb-icon icon="barcode" class="mr-1 mb-1" />
          <span class="tour-code">NDSGN136-001-130421VU-V-1</span>
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
              <span class="text-monospace">16/04/2021</span> <br />
              <span class="text-monospace">6 Ngày</span> <br />
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
              <span class="tour-name">6.000.000 đ</span> <br />
              <span class="text-monospace"> 9 </span>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-2">
            <mdb-col col="12">
              <mdb-btn color="danger" style="width: 326px;" icon="cart-plus">
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
                    <mdb-nav-item href="#" icon="spinner">
                      <span class="ml-3">Chương trình tour</span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="list-ul">
                      <span class="ml-3">Chi tiết tour</span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="exclamation-triangle">
                      <span class="ml-3">Lưu ý</span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="comments">
                      <span class="ml-3">ý kiến khách hàng</span>
                    </mdb-nav-item>
                    <mdb-nav-item href="#" icon="headset">
                      <span class="ml-3">Liên hệ</span>
                    </mdb-nav-item>
                  </mdb-navbar-nav>
                </mdb-col>
              </mdb-row>
              <mdb-row style="background-color: #f1f1f1 ;" class="mt-3">
                <mdb-col col="12">
                  <mdb-row class="mt-1 mb-1">
                    <mdb-col col="12" style="background-color: #e1e1e1;">
                      DỊCH VỤ ĐI KÈM
                    </mdb-col>
                  </mdb-row>

                  <ul>
                    <li>Bữa ăn theo chương trình</li>
                    <li>Bảo hiểm</li>
                    <li>Hướng dẫn viên</li>
                    <li>Vé tham quan</li>
                    <li>Vận chuyển</li>
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
                <mdb-row class="mt-2 flex-grow-1">
                  <mdb-col
                    col="3"
                    class=" text-center  border-right border-danger flex-grow-1"
                  >
                    <h3 class="font-weight-bold " style="  color: #ff002d;">
                      Ngày 1
                    </h3>
                    <span class="font-weight-bold ">16/04/1999</span>
                  </mdb-col>
                  <mdb-col col="9">
                    <p>
                      Quý khách tập trung tại sân bay Tân Sơn Nhất - ga đi trong
                      nước. Hướng dẫn viên làm thủ tục cho đoàn đáp chuyến bay
                      đi Hà Nội. Xe Vietravel đón đoàn tại sân bay Nội Bài, khởi
                      hành đi Sa Pa theo cung đường cao tốc hiện đại và dài nhất
                      Việt Nam. Đến Sapa, nhận phòng nghỉ ngơi. Buổi chiều Quý
                      khách tham quan: - Bản Cát Cát đẹp như một bức tranh giữa
                      vùng phố cổ Sapa, nơi đây thu hút du khách bởi cầu treo,
                      thác nước, guồng nước và những mảng màu hoa mê hoặc du
                      khách khi lạc bước đến đây - Thăm những nếp nhà của người
                      Mông trong bản, du khách sẽ không khỏi ngỡ ngàng trước vẻ
                      đẹp bình dị, mộc mạc. Buổi tối Quý khách dạo phố, ngắm nhà
                      thờ Đá Sapa, tự do thưởng thức đặc sản vùng cao như: thịt
                      lợn cắp nách nướng, trứng nướng, rượu táo mèo, giao lưu
                      với người dân tộc vùng cao. Xem nội dung đầy đủ tại:
                    </p>
                  </mdb-col>
                </mdb-row>
                <mdb-row class="mt-2 ">
                  <mdb-col
                    col="3"
                    class="text-center border-right border-danger"
                  >
                    <br />
                    <h3 class="font-weight-bold " style="  color: #ff002d;">
                      Ngày 1
                    </h3>
                    <span class="font-weight-bold ">16/04/1999</span>
                  </mdb-col>
                  <mdb-col col="9">
                    <p>
                      Quý khách tập trung tại sân bay Tân Sơn Nhất - ga đi trong
                      nước. Hướng dẫn viên làm thủ tục cho đoàn đáp chuyến bay
                      đi Hà Nội. Xe Vietravel đón đoàn tại sân bay Nội Bài, khởi
                      hành đi Sa Pa theo cung đường cao tốc hiện đại và dài nhất
                      Việt Nam. Đến Sapa, nhận phòng nghỉ ngơi. Buổi chiều Quý
                      khách tham quan: - Bản Cát Cát đẹp như một bức tranh giữa
                      vùng phố cổ Sapa, nơi đây thu hút du khách bởi cầu treo,
                      thác nước, guồng nước và những mảng màu hoa mê hoặc du
                      khách khi lạc bước đến đây - Thăm những nếp nhà của người
                      Mông trong bản, du khách sẽ không khỏi ngỡ ngàng trước vẻ
                      đẹp bình dị, mộc mạc. Buổi tối Quý khách dạo phố, ngắm nhà
                      thờ Đá Sapa, tự do thưởng thức đặc sản vùng cao như: thịt
                      lợn cắp nách nướng, trứng nướng, rượu táo mèo, giao lưu
                      với người dân tộc vùng cao. Xem nội dung đầy đủ tại:
                    </p>
                  </mdb-col>
                </mdb-row>
                <mdb-row class="mt-2 ">
                  <mdb-col
                    col="3"
                    class="text-center border-right border-danger"
                  >
                    <br />
                    <h3 class="font-weight-bold " style="  color: #ff002d;">
                      Ngày 1
                    </h3>
                    <span class="font-weight-bold ">16/04/1999</span>
                  </mdb-col>
                  <mdb-col col="9">
                    <p>
                      Quý khách tập trung tại sân bay Tân Sơn Nhất - ga đi trong
                      nước. Hướng dẫn viên làm thủ tục cho đoàn đáp chuyến bay
                      đi Hà Nội. Xe Vietravel đón đoàn tại sân bay Nội Bài, khởi
                      hành đi Sa Pa theo cung đường cao tốc hiện đại và dài nhất
                      Việt Nam. Đến Sapa, nhận phòng nghỉ ngơi. Buổi chiều Quý
                      khách tham quan: - Bản Cát Cát đẹp như một bức tranh giữa
                      vùng phố cổ Sapa, nơi đây thu hút du khách bởi cầu treo,
                      thác nước, guồng nước và những mảng màu hoa mê hoặc du
                      khách khi lạc bước đến đây - Thăm những nếp nhà của người
                      Mông trong bản, du khách sẽ không khỏi ngỡ ngàng trước vẻ
                      đẹp bình dị, mộc mạc. Buổi tối Quý khách dạo phố, ngắm nhà
                      thờ Đá Sapa, tự do thưởng thức đặc sản vùng cao như: thịt
                      lợn cắp nách nướng, trứng nướng, rượu táo mèo, giao lưu
                      với người dân tộc vùng cao. Xem nội dung đầy đủ tại:
                    </p>
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
      value: 2,
      items: [
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg',
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg',
        },
      ],
    };
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
