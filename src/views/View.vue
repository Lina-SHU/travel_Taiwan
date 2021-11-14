<template>
  <div class="container pt-15 pb-16">
    <div class="row mb-14">
      <div class="col-md-6">
        <img v-if="activity.Picture" :src="activity.Picture.PictureUrl1" alt="view image" class="w-100" />
      </div>
      <div class="col-md-6">
        <h1 class="fs-5 fw-bold mb-6">{{ activity.Name }}</h1>
        <ul class="tag-list list-unstyled d-flex mb-7">
          <li class="tag-item rounded-4 me-2"># {{ activity.Class1 }}</li>
          <li class="tag-item rounded-4"># {{ activity.Class2 }}</li>
        </ul>
        <h2 class="text-primary fs-7 fw-bold mb-2">關於</h2>
        <p class="mb-6">
          {{ activity.Description }}
        </p>
        <h2 class="text-primary fs-7 fw-bold mb-2">開放時間</h2>
        <p class="mb-6">{{ activity.StartTime }} - {{ activity.EndTime }}</p>
        <h2 class="text-primary fs-7 fw-bold mb-2" v-if="activity.Charge">票價資訊</h2>
        <p class="mb-6" v-if="activity.Charge">{{ activity.Charge }}</p>
        <h2 class="text-primary fs-7 fw-bold mb-2">地址</h2>
        <p class="mb-10">
          {{ activity.Address }}
          <a href="#"
            ><img
              src="../assets/img/logos_google-maps.png"
              alt="google maps link icon"
              class="ms-1"
          /></a>
        </p>
        <a
          :href="activity.WebsiteUrl" target="_blank"
          class="btn btn-primary-light text-white rounded-4 px-7 py-1"
        >
          <small>官方網站</small>
        </a>
      </div>
    </div>
    <div class="d-md-flex mb-15" v-if="false">
      <div class="info">
        <h2 class="text-primary fs-7 fw-bold mb-5">交通資訊</h2>
        <p class="mb-5">自行開車：</p>
        <p class="mb-8">國道1號-八堵交流道下-省道臺62線-省道臺2線。</p>
        <p class="mb-5">大眾運輸：</p>
        <p class="mb-5">搭高鐵或臺鐵至臺北站下-轉搭國光客運1811（往羅東）、1812（往南方澳）至福隆站下。</p>
        <p class="mb-5">搭臺鐵至福隆站下。</p>
        <p class="mb-5">搭臺鐵至瑞芳站下-轉搭台灣好行856黃金福隆線至福隆遊客中心站下。</p>
        <p class="mb-0">搭臺鐵至基隆站下-轉搭基隆客運791（往福隆）至福隆站下。</p>
      </div>
      <div class="info">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.951072918418!2d121.50852961488397!3d25.137344940295094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae4235dd59e3%3A0x223863496a66dc30!2z5Zyw54ax6LC3!5e0!3m2!1szh-TW!2stw!4v1636859602242!5m2!1szh-TW!2stw" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
    <div class="recommand">
      <h2 class="fs-7 fw-bold mb-6">
        <img src="../assets/img/ic_baseline-recommend.png" alt="recommand view icon" class="me-3">
        其他推薦
      </h2>
      <ul class="list-unstyled row">
        <li class="col-md-4">
          <div class="card">
            <img src="https://fakeimg.pl/400x207/" class="card-img-top w-100" alt="view image" />
            <div class="card-body p-3">
              <h5 class="card-title fw-bold fs-7 mb-4">台中歌劇院</h5>
              <p class="card-text">
                <img src="../assets/img/location.png" alt="location icon" class="me-2">
                台北市 北投區
              </p>
            </div>
          </div>
        </li>
        <li class="col-md-4">
          <div class="card">
            <img src="https://fakeimg.pl/400x207/" class="card-img-top w-100" alt="view image" />
            <div class="card-body p-3">
              <h5 class="card-title fw-bold fs-7 mb-4">台中歌劇院</h5>
              <p class="card-text">
                <img src="../assets/img/location.png" alt="location icon" class="me-2">
                台北市 北投區
              </p>
            </div>
          </div>
        </li>
        <li class="col-md-4">
          <div class="card">
            <img src="https://fakeimg.pl/400x207/" class="card-img-top w-100" alt="view image" />
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activity: '123'
    }
  },
  mounted () {
    this.activity = JSON.parse(this.$route.params.content)
    console.log(this.$route.params.content)
    console.log(this.activity)
  }
}
</script>
