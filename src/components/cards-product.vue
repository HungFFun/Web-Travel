<template>
  <mdb-card-group deck>
    <template v-for="(img, i) in basic.slice(0, 5)">
      <mdb-card :key="i" cascade narrow ecommerce>
        <mdb-card-image
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
          alt="Card image cap"
          class="imgProduct"
          style="width: 290px;height:300px; border-radius: 2%;"
        ></mdb-card-image>
        <mdb-card-body class="text-center" cascade style="margin-top: 17rem;">
          <a href="" class="grey-text">
            <h5>Denim</h5>
          </a>
          <mdb-card-title>
            <strong>
              <a href="">Denim trousers</a>
            </strong>
          </mdb-card-title>

          <mdb-card-text
            >Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit.</mdb-card-text
          >
          <mdb-card-footer color="white" textColor="black" class="px-1">
            <span class="float-left font-weight-bold">
              <strong>49$</strong>
            </span>
            <span class="float-right">
              <a>
                <mdb-tooltip trigger="hover" :options="{ placement: 'top' }">
                  <div class="tooltip">
                    Add to cart
                  </div>
                  <mdb-icon
                    slot="reference"
                    icon="shopping-cart"
                    class="grey-text ml-3"
                  ></mdb-icon>
                </mdb-tooltip>
              </a>
              <a>
                <mdb-tooltip trigger="hover" :options="{ placement: 'top' }">
                  <div class="tooltip">
                    Share
                  </div>
                  <mdb-icon
                    slot="reference"
                    icon="share-alt"
                    class="grey-text ml-3"
                  ></mdb-icon>
                </mdb-tooltip>
              </a>
              <a class="active">
                <mdb-tooltip
                  trigger="hover"
                  class="active"
                  :options="{ placement: 'top' }"
                >
                  <div class="tooltip">
                    Added to watchlist
                  </div>
                  <mdb-icon
                    slot="reference"
                    icon="heart"
                    class="ml-3"
                  ></mdb-icon>
                </mdb-tooltip>
              </a>
            </span>
          </mdb-card-footer>
        </mdb-card-body>
      </mdb-card>
    </template>
  </mdb-card-group>
</template>

<script>
import { mdbCard, mdbCardText, mdbCardBody } from 'mdbvue';
export default {
  name: 'CarouselPage',
  components: {
    mdbCard,
    mdbCardText,
    mdbCardBody,
  },
  data() {
    return {
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
.imgProduct {
  margin-top: -17px;
  margin-left: 15px;
  position: absolute;
}
</style>
