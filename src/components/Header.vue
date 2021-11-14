<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary py-0 py-md-3">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img class="logoImg" src="../assets/img/logo.png" alt="logo image">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="../assets/img/menu.png" alt="hamburger menu button">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/theme/activity" class="nav-link text-white fs-7 px-4">
                精選活動
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/theme/viewpoint" class="nav-link text-white fs-7 px-4">
                全台景點
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/theme/food" class="nav-link text-white fs-7 px-4">
                探索美食
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/theme/hotel" class="nav-link text-white fs-7 px-4">
                住宿飯店
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
