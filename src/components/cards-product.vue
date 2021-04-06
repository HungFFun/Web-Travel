<template>
  <mdb-card-group deck>
    <template v-for="(img, i) in basic.slice(0, 5)">
      <mdb-card :key="i" cascade narrow ecommerce>
        <mdb-view overlay="white-slight" cascade>
          <mdb-card-image
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
            waves
            top
            alt="sample photo"
          />
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <a href="" class="grey-text">
            <h5>Denim</h5>
          </a>
          <mdb-card-title>
            <strong>
              <a href="">Denim trousers</a>
            </strong>
          </mdb-card-title>
          <ul class="rating">
            <li>
              <mdb-icon icon="star"></mdb-icon>
            </li>
            <li>
              <mdb-icon icon="star"></mdb-icon>
            </li>
            <li>
              <mdb-icon icon="star"></mdb-icon>
            </li>
            <li>
              <mdb-icon icon="star"></mdb-icon>
            </li>
            <li>
              <mdb-icon far icon="star"></mdb-icon>
            </li>
          </ul>
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
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardFooter,
  mdbCardText,
  mdbIcon,
  mdbTooltip,
  mdbView,
} from 'mdbvue';
export default {
  name: 'EcommercePage',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbIcon,
    mdbTooltip,
    mdbView,
  },
};
</script>
