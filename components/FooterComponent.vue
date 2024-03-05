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
        <a href="https://www.tiktok.com/@manillatimes"
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
        <a href="https://open.spotify.com/artist/4pJF1tw5SVplqOd4WIMz5n"
          ><img
            class="social-icon"
            src="../assets/spotify-white.png"
            alt="x-icon"
          />
        </a>
        <a href="https://music.apple.com/gb/artist/manilla-times/1612683636"
          ><img
            class="social-icon"
            src="../assets/apple-music-white.png"
            alt="x-icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.to(".icons-container > a", {
    y: 10,
    opacity: 1,
    duration: 0.6,
    delay: 0.2,
    stagger: 0.2,
  });
});
</script>

<style scoped lang="scss">
footer {
  background-color: black;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0px;
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
    transform: translate(0px, -10px);
    a {
      opacity: 0;
      .social-icon {
        width: 32px;
        width: 32px;
      }
    }
  }
}
</style>
