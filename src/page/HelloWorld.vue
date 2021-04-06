<template>
  <div>
    <Nav></Nav>
    <div>
      <mdb-container>
        <section class="text-center mb-4">
          <h2 class="h1-responsive font-weight-bold text-center ">
            Địa điểm du lịch yêu thích
          </h2>
          <p class="grey-text text-center w-responsive mx-auto mb-5">
            Trong nước và ngoài nước
          </p>

          <mdb-row>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px;">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px;">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd2.jpg"
                    alt=""
                  />
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px;">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px;">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-5 mt-4 mr-0">
            <mdb-col cols="12">
              <mdb-row>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg1.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg2.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg3.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg4.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center" class="pr-0">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg5.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <section class="text-center  m-4">
        <h2 class="h1-responsive font-weight-bold text-center ">
          Chuyến đi tốt nhất
        </h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">
          Ưu đãi tốt nhất cho các chuyến đi từ chúng tôi
        </p>
      </section>
      <mdb-container>
        <mdb-row>
          <cards-tour></cards-tour>
        </mdb-row>
        <mdb-row class="mt-4">
          <cards-tour></cards-tour>
        </mdb-row>
      </mdb-container>

      <mdb-row class="mr-0 mt-5">
        <mdb-col col="12" class="pr-0 text-center">
          <mdb-btn color="primary">Xem thêm</mdb-btn>
        </mdb-col>
      </mdb-row>

      <mdb-row class="mr-0 mt-5">
        <mdb-col col="12" class="pr-0">
          <template>
            <mdb-carousel
              :items="items"
              :interval="2000"
              controlls
            ></mdb-carousel>
          </template>
        </mdb-col>
      </mdb-row>

      <section class="text-center  m-5">
        <h2 class="h1-responsive font-weight-bold text-center ">
          Sản phẩm đáng chú ý
        </h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">
          Những sản phẩm thích hợp cho những chuyến du lich
        </p>
        <mdb-row class="mr-0 mt-5 mb-5">
          <mdb-col col="12" class=" pr-0">
            <cards-product></cards-product>
          </mdb-col>
        </mdb-row>
      </section>
      <mdb-row class="mr-0 mt-5 mb-5 p-5">
        <mdb-col col="12" class=" text-center pr-0">
          <img src="https://travel.com.vn/Content/ThemeHe/img/conma-bot.png" />
        </mdb-col>
      </mdb-row>
      <mdb-row
        class="mr-0 mt-5 mb-5"
        style="height: 23rem;background: #f1f1f1;"
      >
        <mdb-col col="5" class=" pr-0">
          <div class=" example z-depth-1 dot">
            <img
              class="img"
              src="https://travel.com.vn/Content/ThemeHe/img/bg-why.png"
            />
            <div class="why">
              <h2>Vì sao chọn</h2>
              <b>
                <span>Website Banda Fly</span>
              </b>
            </div>
          </div>
        </mdb-col>
        <mdb-col col="7">
          <mdb-row class="mr-0 mb-4 mt-4 pt-1">
            <mdb-col col="4">
              <h2 class="colorWord">
                1.
              </h2>
              <b class="bSize">MẠNG BÁN TOUR</b> <br />
              <span>------------------------------------</span> <br />
              <span>Đầu tiên tại Việt Nam</span> <br />
              <span>Ứng dụng công nghệ mới nhất</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">
                2.
              </h2>
              <b class="bSize">Thanh Toán</b> <br />
              <span>------------------------------------</span> <br />
              <span>An toàn và linh hoạt</span> <br />
              <span>Liên kết với các tổ chức tài chính</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">
                3.
              </h2>
              <b class="bSize">Giá cả</b> <br />
              <span>------------------------------------</span> <br />
              <span>Luôn có mức giá tốt nhất</span> <br />
              <span>Bảo đám giá tốt</span>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mr-0 ">
            <mdb-col col="4">
              <h2 class="colorWord">
                4.
              </h2>
              <b class="bSize">Sản phẩm</b> <br />
              <span>------------------------------------</span> <br />
              <span>Đa dạng, chất lượng</span> <br />
              <span>Đảm bảo chất lượng tốt nhất</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">
                5.
              </h2>
              <b class="bSize">Đặt tour</b> <br />
              <span>------------------------------------</span> <br />
              <span>Dễ dàng và nhanh chóng</span> <br />
              <span>Đặt tour chỉ với 3 bước</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">
                6.
              </h2>
              <b class="bSize">Hỗ trợ</b> <br />
              <span>------------------------------------</span> <br />
              <span>Từ 08h00- 22h00</span> <br />
              <span>Hotline và hỗ trợ trực tuyến</span>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </div>

    <FooterB></FooterB>
  </div>
</template>

<script>
import { mdbCarousel } from 'mdbvue';
import { mdbRow, mdbCol, mdbCard, mdbCardImage } from 'mdbvue';

import FooterB from '../components/FooterB.vue';
import Nav from '../components/NavB.vue';
import CardsTour from '../components/Cards-tour.vue';
import CardsProduct from '../components/cards-product.vue';
export default {
  components: {
    Nav,
    FooterB,
    mdbCarousel,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    CardsTour,
    CardsProduct,
  },
  data() {
    return {
      items: [
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
        },
        {
          img: true,
          src:
            'https://images.unsplash.com/photo-1547152850-11ac68bbe48f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80',
        },
        {
          img: true,
          src:
            'https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
      ],
    };
  },
};
</script>
<style>
.view {
  height: 500px;
}
.w-100 {
  height: 500px;
}
.dot {
  width: 20rem;
  height: 25rem;
  background-color: #f1f1f1;
  /* background-image: url(https://travel.com.vn/Content/ThemeHe/img/bg-why.png); */
  border-radius: 5px;
  margin-top: -1rem;
  margin-left: 23rem;
}
.img {
  margin-left: -21px;
  margin-top: -8px;
  width: 22rem;
  height: 26rem;
}
.rounded,
.dot {
  position: absolute;
}

.why {
  margin-top: -16rem;
  margin-left: 4rem;
  position: absolute;
}
b {
  font-size: 25px;
  font-weight: bold;
}
.bSize {
  font-size: 14px;
  font-weight: bold;
}

.colorWord {
  font-size: 30px;
  color: #ff0000;
  font-weight: bold;
  font-style: italic;
}
</style>
