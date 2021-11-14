<template>
  <div class="activity">
    <div  v-if="theme" class="activityBanner banner" :style="{ 'background-image': `url(${themeBackground[theme].image})` }">
      <div class="container h-100">
        <div class="d-flex justify-content-center align-items-center h-100">
          <h1 class="text-shadow text-white fs-2 fw-bold">{{ themeBackground[theme].name }}</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-13">
    <div class="position-relative mb-9">
      <img
        class="searchIcon position-absolute top-50 translate-middle-y"
        src="../assets/img/bx_bx-search.png"
        alt="search icon"
      />
      <input
        type="text"
        class="form-control box-shadow rounded-5 py-3 ps-10"
        placeholder="所有縣市"
      />
    </div>
    <div class="d-flex justify-content-between align-items-center border-bottom border-secondary-light mb-10">
      <ul class="theme-list d-flex list-unstyled">
        <li>
          <router-link to="/theme/activity" class="theme-item text-dark fw-bold fs-5 px-6 pb-3" :class="{ active: theme === 'activity'}">
            精選活動
          </router-link>
        </li>
        <li>
          <router-link to="/theme/viewpoint" class="theme-item text-dark fw-bold fs-5 px-6 pb-3" :class="{ active: theme === 'viewpoint'}">
            各地景點
          </router-link>
        </li>
        <li>
          <router-link to="/theme/food" class="theme-item text-dark fw-bold fs-5 px-6 pb-3" :class="{ active: theme === 'food'}">
            探索美食
          </router-link>
        </li>
        <li>
          <router-link to="/theme/hotel" class="theme-item text-dark fw-bold fs-5 px-6 pb-3" :class="{ active: theme === 'hotel'}">
            住宿飯店
          </router-link>
        </li>
      </ul>
      <div class="position-relative">
        <img src="../assets/img/system-uicons_filtering.png" alt="theme icon" class="position-absolute theme-icon">
        <select class="form-select theme-select rounded-5 fs-5 box-shadow px-11 py-3">
          <option class="py-3" selected disabled>主題分類</option>
          <option class="py-3" value="熱門活動">熱門活動</option>
          <option class="py-3" value="近期活動">近期活動</option>
          <option class="py-3" value="傳統節慶">傳統節慶</option>
          <option class="py-3" value="原住民活動">原住民活動</option>
        </select>
      </div>
    </div>
    <ul class="row list-unstyled mb-16">
      <li class="col-md-6 mb-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-7">
              <img
                src="https://fakeimg.pl/355x300/"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-5">
              <div
                class="
                  card-body
                  d-flex
                  flex-column
                  justify-content-between
                  h-100
                "
              >
                <div>
                  <h5 class="card-title fw-bold fs-7 mb-6">
                    新北市歡樂耶誕城
                  </h5>
                  <p class="card-text fw-bold mb-4">
                    時間:
                    <small class="fw-light">2021/11/20-2021/12/30</small>
                  </p>
                  <p class="card-text fw-bold mb-4">
                    地點: <small class="fw-light">新北市板橋區</small>
                  </p>
                  <p class="card-text fw-light">
                    新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......
                  </p>
                </div>
                <div class="ms-auto">
                  <button
                    type="button"
                    class="
                      btn btn-primary-light
                      text-white
                      rounded-4
                      px-7
                      py-1
                    "
                  >
                    <small>活動詳情</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-md-6 mb-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-7">
              <img
                src="https://fakeimg.pl/355x300/"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-5">
              <div
                class="
                  card-body
                  d-flex
                  flex-column
                  justify-content-between
                  h-100
                "
              >
                <div>
                  <h5 class="card-title fw-bold fs-7 mb-6">
                    新北市歡樂耶誕城
                  </h5>
                  <p class="card-text fw-bold mb-4">
                    時間:
                    <small class="fw-light">2021/11/20-2021/12/30</small>
                  </p>
                  <p class="card-text fw-bold mb-4">
                    地點: <small class="fw-light">新北市板橋區</small>
                  </p>
                  <p class="card-text fw-light">
                    新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......
                  </p>
                </div>
                <div class="ms-auto">
                  <button
                    type="button"
                    class="
                      btn btn-primary-light
                      text-white
                      rounded-4
                      px-7
                      py-1
                    "
                  >
                    <small>活動詳情</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-md-6">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-7">
              <img
                src="https://fakeimg.pl/355x300/"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-5">
              <div
                class="
                  card-body
                  d-flex
                  flex-column
                  justify-content-between
                  h-100
                "
              >
                <div>
                  <h5 class="card-title fw-bold fs-7 mb-6">
                    新北市歡樂耶誕城
                  </h5>
                  <p class="card-text fw-bold mb-4">
                    時間:
                    <small class="fw-light">2021/11/20-2021/12/30</small>
                  </p>
                  <p class="card-text fw-bold mb-4">
                    地點: <small class="fw-light">新北市板橋區</small>
                  </p>
                  <p class="card-text fw-light">
                    新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......
                  </p>
                </div>
                <div class="ms-auto">
                  <button
                    type="button"
                    class="
                      btn btn-primary-light
                      text-white
                      rounded-4
                      px-7
                      py-1
                    "
                  >
                    <small>活動詳情</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-md-6">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-7">
              <img
                src="https://fakeimg.pl/355x300/"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-5">
              <div
                class="
                  card-body
                  d-flex
                  flex-column
                  justify-content-between
                  h-100
                "
              >
                <div>
                  <h5 class="card-title fw-bold fs-7 mb-6">
                    新北市歡樂耶誕城
                  </h5>
                  <p class="card-text fw-bold mb-4">
                    時間:
                    <small class="fw-light">2021/11/20-2021/12/30</small>
                  </p>
                  <p class="card-text fw-bold mb-4">
                    地點: <small class="fw-light">新北市板橋區</small>
                  </p>
                  <p class="card-text fw-light">
                    新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......
                  </p>
                </div>
                <div class="ms-auto">
                  <button
                    type="button"
                    class="
                      btn btn-primary-light
                      text-white
                      rounded-4
                      px-7
                      py-1
                    "
                  >
                    <small>活動詳情</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: '',
      themeBackground: {
        activity: {
          name: '精選活動',
          image: require('@/assets/img/bannerAct.jpg')
        },
        viewpoint: {
          name: '全台景點',
          image: require('@/assets/img/bannerview.jpg')
        },
        food: {
          name: '探索美食',
          image: require('@/assets/img/bannerfood.jpg')
        },
        hotel: {
          name: '住宿飯店',
          image: require('@/assets/img/bannerhotel.jpg')
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath.match('/theme/')) {
        this.theme = this.$route.params.id
      }
    }
  },
  mounted () {
    this.theme = this.$route.params.id
  }
}
</script>
