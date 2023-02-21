<template>
  <container>
    <main>
      <img alt="image" class="image" :src="handleCheckGirl" />
    </main>
    <footer>
      <Flicking
        ref="flicking"
        :options="{
          renderOnlyVisible: true,
          circular: true,
          resizeOnContentsReady: true,
          deceleration: 0.0005,
          autoInit: true,
        }"
      >
        <div v-for="ls in GirlsArr" class="flicking_panel" :key="ls">
          <img
            alt="image"
            class="image_scroll"
            :src="ls.path"
            @click="HandleChangeImage(ls.path)"
          />
        </div>
      </Flicking>
    </footer>
  </container>
</template>

<script>
import { GirlsArr } from '@/assets/const/GirlsArr';

export default {
  data() {
    return {
      GirlsArr,
      handleCheckGirl:
        'https://golye-devushki-photo.ru/pics/golie-devki-v-odezhde.jpg',
    };
  },
  methods: {
    HandleChangeImage(path) {
      this.handleCheckGirl = path;
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  height: 55vh;
  width: 80 vh;
  object-fit: cover;
  cursor: pointer;
  animation: fadeIn ease 2s;
}

footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin-bottom: 1vh;
}

.image_scroll {
  height: 25vh;
  width: 17vw;
  object-fit: cover;
  cursor: pointer;
}

.frame {
  height: 55vh;
  width: 32vw;
  object-fit: contain;
}

.wrapper {
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
}

.flicking_panel {
  margin: 16px;
}

/* ANIMATION */
.fade-in {
  animation: fadeIn ease 10s;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
