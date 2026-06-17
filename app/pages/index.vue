<script setup lang="ts">
import gsap from "gsap"
import confetti from "canvas-confetti"

const stage = ref(0)
const hearts = ref<{ id: number; style: Record<string, string> }[]>([])

const next = () => {
  stage.value++
}

const surprise = () => {
  confetti({
    particleCount: 300,
    spread: 180,
    origin: { y: 0.6 }
  })

  const duration = 5000

  const end = Date.now() + duration

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 20,
      spread: 120
    })
  }, 300)

  stage.value = 99
}

onMounted(() => {
  const heartCount = window.innerWidth < 640 ? 18 : 30

  hearts.value = Array.from({ length: heartCount }, (_, index) => {
    const floatX = -20 + Math.random() * 40
    const floatY = -80 - Math.random() * 80

    return {
      id: index,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
        "--float-x": `${floatX}px`,
        "--float-mid-y": `${floatY / 2}px`,
        "--float-y": `${floatY}px`
      }
    }
  })

  gsap.from(".window", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
})
</script>

<template>
  <div
    class="relative isolate min-h-dvh overflow-x-hidden bg-gradient-to-br from-pink-300 via-pink-200 to-rose-200"
  >
    <!-- floating hearts -->

    <div
      v-for="heart in hearts"
      :key="heart.id"
      class="floating-heart absolute z-0"
      :style="heart.style"
    >
      💖
    </div>

    <!-- SCREEN 1 -->

    <div
      v-if="stage === 0"
      class="crt relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6"
    >
      <div
        class="window w-full max-w-xl rounded-3xl bg-white/95 p-6 text-center shadow-2xl sm:p-10"
      >
        <h1
          class="retro-font break-words text-base leading-relaxed text-pink-500 sm:text-xl"
        >
          NEW MESSAGE
        </h1>

        <h1
          class="retro-font break-words text-base leading-relaxed text-pink-500 sm:text-xl"
        >
          Hi Alice!
        </h1>

        <p class="mt-6 text-sm text-gray-600 sm:mt-8 sm:text-base">
          You have received
          <span class="font-bold">
            1 unread message
          </span>
        </p>

        <button
          @click="next"
          class="mt-8 w-full rounded-full bg-pink-500 px-8 py-3 font-bold text-white transition hover:scale-105 sm:w-auto"
        >
          Open 💌
        </button>
      </div>
    </div>

    <!-- SCREEN 2 -->

    <div
      v-else-if="stage === 1"
      class="relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6"
    >
      <div
        class="w-full max-w-2xl rounded-3xl bg-white/95 p-6 shadow-2xl sm:p-10"
      >
        <h2
          class="break-words text-3xl font-bold text-pink-500 sm:text-4xl"
        >
          Dear You 🌸
        </h2>

        <p class="mt-6 text-base leading-8 text-gray-700 sm:mt-8 sm:text-lg sm:leading-9">
          Halo sayang, maaf aku nggak bisa bilang ini langsung ke kamu, jadi aku buat pesan ini untuk menyampaikan perasaanku.
          Ya gimana ya, namanya introvert wkwkwk.
          Daripada hubungan kita nggak jelas kan, mending aku buat ini 🤣
        </p>

        <button
          @click="next"
          class="mt-8 w-full rounded-full bg-pink-500 px-8 py-3 font-bold text-white transition hover:scale-105 sm:w-auto"
        >
          Continue →
        </button>
      </div>
    </div>

    <!-- SCREEN 3 -->

    <div
      v-else-if="stage === 2"
      class="relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6"
    >
      <div
        class="w-full max-w-xl rounded-3xl bg-white/95 p-6 text-center shadow-2xl sm:p-10"
      >
        <div class="text-6xl sm:text-7xl">
          💖
        </div>

        <h2
          class="mt-6 text-4xl font-extrabold text-pink-500 sm:text-5xl"
        >
          Will You
        </h2>

        <h3
          class="mt-2 break-words text-2xl font-bold leading-tight text-rose-500 sm:text-4xl"
        >
          Accept My Feelings and be my Girlfriend?
        </h3>

        <div
          class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <button
            @click="surprise"
            class="w-full rounded-full bg-pink-500 px-8 py-4 font-bold text-white transition hover:scale-110 sm:w-auto"
          >
            YES 💖
          </button>

          <button
            @click="surprise"
            class="w-full rounded-full bg-rose-500 px-8 py-4 font-bold text-white transition hover:scale-110 sm:w-auto"
          >
            YES ABSOLUTELY 💕
          </button>
        </div>
      </div>
    </div>

    <!-- SURPRISE -->

    <div
      v-else
      class="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-8 text-center sm:px-6"
    >
      <div
        class="glow animate__animated animate__heartBeat animate__infinite text-7xl sm:text-[120px]"
      >
        💖
      </div>

      <h1
        class="glow text-4xl font-extrabold text-white sm:text-6xl"
      >
        YAY!!
      </h1>

      <p
        class="mt-6 text-xl font-bold text-white sm:text-3xl"
      >
        You just unlocked
      </p>

      <p
        class="mt-3 break-words text-3xl font-black text-pink-50 sm:text-5xl"
      >
        My Happiest Moment ❤️
      </p>

      <div
        class="mt-8 max-w-3xl animate-bounce break-words text-4xl sm:mt-12 sm:text-6xl"
      >
        <p
          class="mt-3 break-words text-xl font-black text-pink-50 sm:text-3xl"
        >
         ❤️ KITA AKHIRNYA PACARAN SENGGGGG ❤️
        </p>
        🌸💕✨💖🌷
      </div>
    </div>
  </div>
</template>
