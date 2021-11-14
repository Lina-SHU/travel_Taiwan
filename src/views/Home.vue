<template>
  <div class="home">
    <div class="homeBanner banner">
      <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6">
            <div class="position-relative">
              <img
                class="searchIcon position-absolute top-50 translate-middle-y"
                src="../assets/img/bx_bx-search.png"
                alt="search icon"
              />
              <input
                type="text"
                class="form-control rounded-5 py-3 ps-10"
                placeholder="我想去..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-12 pb-15">
      <section class="mb-11">
        <h2 class="fs-5 mb-0 text-center fw-bold mb-8">
          <img
            src="../assets/img/icon1.png"
            alt="title icon"
            class="me-3"
          />精選活動
        </h2>
        <ul class="row list-unstyled mb-10">
          <li class="col-lg-6 mb-10" v-for="activity in activities" :key="activity.ID">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7" v-if="activity.Picture">
                  <img
                    :src="activity.Picture.PictureUrl1"
                    class="img-fluid rounded-start h-100"
                    alt="activity image"
                  />
                </div>
                <div class="col-md-5">
                  <div
                    class="
                      card-body
                      d-flex
                      flex-column h-100
                      justify-content-between
                    "
                  >
                    <div>
                      <h5 class="card-title fw-bold fs-7 mb-6">
                        {{ activity.Name }}
                      </h5>
                      <p class="card-text fw-bold mb-4">
                        時間:
                        <small class="fw-light">{{ activity.StartTime }} - {{ activity.EndTime }}</small>
                      </p>
                      <p class="card-text fw-bold mb-4">
                        地點: <small class="fw-light">{{ activity.Location }}</small>
                      </p>
                      <p class="card-text fw-light">
                        {{ activity.Picture.PictureDescription1 }}
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
                        @click.prevent="gotoDetail(activity)"
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
        <div class="d-flex justify-content-end">
          <router-link to="/theme/activity" class="fw-bold position-relative">
            <span class="moreBtn fs-7 position-absolute start-0 text-dark">More</span>
            <img src="../assets/img/more.png" alt="more button" >
          </router-link>
        </div>
      </section>
      <section class="mb-11">
        <h2 class="fs-5 mb-0 text-center fw-bold mb-8">
          <img
            src="../assets/img/icon2.png"
            alt="title icon"
            class="me-3"
          />熱門景點
        </h2>
        <ul class="row list-unstyled mb-8">
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">陽明山國家公園</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">淡水老街</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">寧夏夜市</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">台中歌劇院</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <router-link to="/theme/viewpoint" class="fw-bold position-relative">
            <span class="moreBtn fs-7 position-absolute start-0 text-dark">More</span>
            <img src="../assets/img/more.png" alt="more button" >
          </router-link>
        </div>
      </section>
      <section class="mb-11">
        <h2 class="fs-5 mb-0 text-center fw-bold mb-8">
          <img
            src="../assets/img/icon3.png"
            alt="title icon"
            class="me-3"
          />推薦美食
        </h2>
        <ul class="row list-unstyled mb-8">
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">日式定食</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">風味火鍋</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">生魚片料理</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
          <li class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/280x280/" class="card-img-top" alt="view image" />
              <div class="card-body p-3">
                <h5 class="card-title fw-bold fs-7 mb-4">貴婦下午茶</h5>
                <p class="card-text">
                  <img src="../assets/img/location.png" alt="location icon" class="me-2">
                  台北市 北投區
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <router-link to="/theme/food" class="fw-bold position-relative">
            <span class="moreBtn fs-7 position-absolute start-0 text-dark">More</span>
            <img src="../assets/img/more.png" alt="more button" >
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
      activities: []
    }
  },
  methods: {
    getActivities () {
      const url = 'https://ptx.transportdata.tw/MOTC//v2/Tourism/Activity?$top=30'
      this.$http.get(url)
        .then((res) => {
          res.data.forEach((item) => {
            if (this.activities.length < 4 && item.Picture && item.Picture.PictureUrl1) {
              this.activities.push(item)
            }
          })
          console.log(this.activities)
        })
    },
    gotoDetail (activity) {
      const obj = JSON.stringify(activity)
      this.$router.push({ name: 'view', params: { content: obj } })
    }
  },
  mounted () {
    this.getActivities()
  }
}
</script>
