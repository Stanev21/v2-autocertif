<template>
  <div>
    <TheHeader />

    <section class="bg-[#f7f8f6] min-h-[calc(100vh-160px)] pt-28 sm:pt-36 pb-16 flex items-start justify-center relative overflow-hidden">
      <!-- Background orbs -->
      <div class="absolute top-20 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.07] blur-[100px] pointer-events-none" style="background: radial-gradient(circle, #f87171 0%, transparent 70%);"></div>
      <div class="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>

      <div class="max-w-[480px] w-full mx-auto px-4 sm:px-8 relative z-10">

        <!-- Forgot password view -->
        <template v-if="mode === 'forgot'">
          <!-- Logo + heading centered -->
          <div class="text-center mb-10">
            <div class="w-14 h-14 rounded-2xl bg-[#0A1020] flex items-center justify-center mx-auto mb-6">
              <span class="text-coral text-[18px] font-heading font-bold">A</span>
            </div>
            <h1 class="font-heading text-[1.75rem] sm:text-[2rem] text-gray-900 mb-2">
              Reset your password
            </h1>
            <p class="text-gray-400 text-[14px] font-inter">
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          <!-- Forgot card -->
          <div class="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <button
              class="flex items-center gap-2 text-gray-400 text-[13px] font-inter font-medium hover:text-gray-600 transition-colors cursor-pointer mb-6"
              @click="mode = 'login'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Back to Sign In
            </button>

            <form class="space-y-4" @submit.prevent>
              <div>
                <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-1.5">{{ $t('auth.email') }}</label>
                <input type="email" placeholder="you@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
              </div>
              <button type="submit" class="w-full py-3.5 rounded-xl bg-coral text-white text-[14px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer mt-2">
                Send Reset Link
              </button>
            </form>
          </div>

          <p class="text-center mt-6 text-gray-500 text-[13px] font-inter">
            Remember your password?
            <button class="text-coral font-medium hover:underline cursor-pointer" @click="mode = 'login'">
              {{ $t('auth.switchLogin') }}
            </button>
          </p>
        </template>

        <!-- Login / Signup view -->
        <template v-else>
          <!-- Logo + heading centered -->
          <div class="text-center mb-10">
            <div class="w-14 h-14 rounded-2xl bg-[#0A1020] flex items-center justify-center mx-auto mb-6">
              <span class="text-coral text-[18px] font-heading font-bold">A</span>
            </div>
            <h1 class="font-heading text-[1.75rem] sm:text-[2rem] text-gray-900 mb-2">
              {{ mode === 'login' ? $t('auth.loginTitle') : $t('auth.signupTitle') }}
            </h1>
            <p class="text-gray-400 text-[14px] font-inter">
              {{ mode === 'login' ? $t('auth.loginSubtitle') : $t('auth.signupSubtitle') }}
            </p>
          </div>

          <!-- Auth card -->
          <div class="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <!-- Toggle tabs -->
            <div class="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                class="flex-1 py-2.5 rounded-lg text-[13px] font-inter font-medium transition-all duration-300 cursor-pointer text-center"
                :class="mode === 'login' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'"
                @click="mode = 'login'"
              >{{ $t('auth.login') }}</button>
              <button
                class="flex-1 py-2.5 rounded-lg text-[13px] font-inter font-medium transition-all duration-300 cursor-pointer text-center"
                :class="mode === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'"
                @click="mode = 'signup'"
              >{{ $t('auth.signup') }}</button>
            </div>

            <!-- Social buttons -->
            <div class="grid grid-cols-2 gap-3 mb-6">
              <button class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-[13px] font-inter font-medium hover:bg-gray-50 transition-all cursor-pointer">
                <svg class="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                {{ $t('auth.google') }}
              </button>
              <button class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-[13px] font-inter font-medium hover:bg-gray-50 transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.11 4.45-3.74 4.25z"/></svg>
                {{ $t('auth.apple') }}
              </button>
            </div>

            <!-- Divider -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex-1 h-px bg-gray-200"></div>
              <span class="text-gray-400 text-[12px] font-inter">{{ $t('auth.orContinue') }}</span>
              <div class="flex-1 h-px bg-gray-200"></div>
            </div>

            <!-- Form -->
            <form class="space-y-4" @submit.prevent>
              <div v-if="mode === 'signup'">
                <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-1.5">{{ $t('auth.fullName') }}</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
              </div>
              <div>
                <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-1.5">{{ $t('auth.email') }}</label>
                <input type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label class="text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider">{{ $t('auth.password') }}</label>
                  <button v-if="mode === 'login'" type="button" class="text-coral text-[12px] font-inter font-medium hover:underline cursor-pointer" @click="mode = 'forgot'">{{ $t('auth.forgotPassword') }}</button>
                </div>
                <input type="password" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
              </div>
              <div v-if="mode === 'signup'">
                <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-1.5">{{ $t('auth.confirmPassword') }}</label>
                <input type="password" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
              </div>
              <button type="submit" class="w-full py-3.5 rounded-xl bg-coral text-white text-[14px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer mt-2">
                {{ mode === 'login' ? $t('auth.login') : $t('auth.signup') }}
              </button>
            </form>

            <!-- Terms -->
            <p v-if="mode === 'signup'" class="text-gray-400 text-[11px] font-inter text-center mt-4 leading-relaxed">
              {{ $t('auth.terms') }}
              <NuxtLink :to="localePath('/terms-of-use')" class="text-coral hover:underline">{{ $t('auth.termsLink') }}</NuxtLink>
              {{ $t('auth.and') }}
              <NuxtLink :to="localePath('/privacy-policy')" class="text-coral hover:underline">{{ $t('auth.privacyLink') }}</NuxtLink>.
            </p>
          </div>

          <!-- Switch text below card -->
          <p class="text-center mt-6 text-gray-500 text-[13px] font-inter">
            {{ mode === 'login' ? $t('auth.noAccount') : $t('auth.hasAccount') }}
            <button class="text-coral font-medium hover:underline cursor-pointer" @click="mode = mode === 'login' ? 'signup' : 'login'">
              {{ mode === 'login' ? $t('auth.switchSignup') : $t('auth.switchLogin') }}
            </button>
          </p>
        </template>

      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const localePath = useLocalePath()
const mode = ref<'login' | 'signup' | 'forgot'>('login')

useHead({ title: computed(() => mode.value === 'login' ? 'Sign In - Autocertif' : 'Create Account - Autocertif') })

const stats = computed(() => {
  const raw = tm('auth.stats')
  return Array.isArray(raw) ? raw.map((s: any) => typeof s === 'string' ? s : rt(s)) : []
})
</script>
