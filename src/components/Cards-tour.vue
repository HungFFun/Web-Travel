<template>
  <mdb-card-group deck>
    <template v-for="(img, i) in basic.slice(0, 3)">
      <mdb-card :key="i">
        <mdb-card-image :src="img" alt="Card image cap"></mdb-card-image>
        <mdb-card-body class="pb-0">
          <mdb-card-title> Bay cùng Vietravel {{ i + 1 }} </mdb-card-title>
          <mdb-card-text>
            <hr />
            <mdb-row>
              <mdb-col col="2">
                <mdb-icon icon="map-marked-alt"> </mdb-icon>
              </mdb-col>
              <mdb-col col="4" class="pl-0">
                <span> Nơi khởi hành:</span>
              </mdb-col>
              <mdb-col col="6" class="pl-0">
                <span> Hồ chí minh </span>
              </mdb-col>
            </mdb-row>

            <mdb-row>
              <mdb-col col="2">
                <mdb-icon icon="hiking"> </mdb-icon>
              </mdb-col>
              <mdb-col col="4" class="pl-0">
                <span> Số vé:</span>
              </mdb-col>
              <mdb-col col="6" class="pl-0">
                <span> 6 vé </span>
              </mdb-col>
            </mdb-row>

            <mdb-row class="mb-1">
              <mdb-col col="2">
                <mdb-icon icon="calendar-alt"> </mdb-icon>
              </mdb-col>
              <mdb-col col="4" class="pl-0">
                <span> 16/4/1999:</span>
              </mdb-col>
              <mdb-col col="6" class="pl-0">
                <span> 3 ngày </span>
              </mdb-col>
            </mdb-row>

            <mdb-row class="">
              <mdb-col col="12">
                <mdb-rating v-model="value" />
              </mdb-col>
            </mdb-row>
          </mdb-card-text>
          <div class="price" style="width: 12rem;">
            <p class="card-price">1250 р.</p>
          </div>
        </mdb-card-body>
      </mdb-card>
    </template>
  </mdb-card-group>
</template>

<script>
import { mdbCard, mdbCardText, mdbCardBody, mdbRating } from 'mdbvue';
export default {
  name: 'CarouselPage',
  components: {
    mdbCard,
    mdbCardText,
    mdbCardBody,
    mdbRating,
  },
  data() {
    return {
      value: 2,
      basic: [
        'https://mdbootstrap.com/img/Photos/Others/img (36).jpg',
        'https://mdbootstrap.com/img/Photos/Others/img (34).jpg',
        'https://mdbootstrap.com/img/Photos/Others/img (38).jpg',
        'https://mdbootstrap.com/img/Photos/Others/img (29).jpg',
        'https://mdbootstrap.com/img/Photos/Others/img (30).jpg',
        'https://mdbootstrap.com/img/Photos/Others/img (27).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg',
      ],
    };
  },
};
</script>
<style>
.yellow-text-dark-2 {
  color: #d7c952 !important;
}
.yellow-text-dark-3 {
  color: #9b9247 !important;
}
.yellow-text-dark-4 {
  color: #827c47 !important;
}
.yellow-text-dark-1 {
  color: #e9d947 !important;
}

.price {
  margin-top: -212px;
  margin-left: -39px;
  position: absolute;
}
.card-price {
  display: inline-block;

  width: auto;
  height: 38px;

  background-color: #f50505;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;

  border-left: 1px solid #f50505;

  /* This makes room for the triangle */
  margin-left: 19px;

  position: relative;

  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;

  padding: 0 10px 0 10px;
}

/* Makes the triangle */
.card-price:before {
  content: '';
  position: absolute;
  display: block;
  left: -19px;
  width: 0;
  height: 0;
  border-top: 19px solid transparent;
  border-bottom: 19px solid transparent;
  border-right: 19px solid #f50505;
}

/* Makes the circle */
.card-price:after {
  content: '';
  background-color: white;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  display: block;
  position: absolute;
  left: -9px;
  top: 17px;
}
.rating-icon {
  margin-left: 35px;
}
</style>
