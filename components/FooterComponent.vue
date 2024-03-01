<template>
  <footer>
    <div class="footer-container">
      <div class="icons-container">
        <a href="https://www.instagram.com/manillatimes/"
          ><img
            class="social-icon"
            src="../assets/insta.png"
            alt="insta-icon"
          />
        </a>
        <a href="https://www.facebook.com/manillatimesband/"
          ><img
            class="social-icon"
            src="../assets/facebook.png"
            alt="facebook-icon"
          />
        </a>
        <a href="hhttps://www.tiktok.com/@manillatimes"
          ><img
            class="social-icon"
            src="../assets/tiktok.png"
            alt="tiktok-icon"
          />
        </a>
        <a href="https://www.youtube.com/@manillatimesband"
          ><img
            class="social-icon"
            src="../assets/youtube.png"
            alt="youtube-icon"
          />
        </a>
        <a href="https://twitter.com/ManillaTimes"
          ><img class="social-icon" src="../assets/x.png" alt="x-icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: black;
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-container {
    width: 100%;
  }
  @media all and (min-width: 1024px) {
    .footer-container {
      width: 600px;
    }
  }

  .icons-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .social-icon {
      width: 40px;
      width: 40px;
    }
  }
}
</style>
