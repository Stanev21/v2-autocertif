<template>
  <div class="min-h-screen flex">
    <!-- Left: branding panel -->
    <div class="hidden lg:flex lg:w-[45%] relative bg-[#0B1426] overflow-hidden flex-col justify-between p-14">
      <!-- Orbs -->
      <div class="absolute top-1/4 left-1/3 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full opacity-[0.15] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full opacity-[0.08] blur-[100px]" style="background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);"></div>
      <!-- Grid -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

      <!-- Logo -->
      <div class="relative z-10">
        <NuxtLink to="/" class="text-white text-xl font-extrabold tracking-tight font-heading">AUTOCERTIF</NuxtLink>
      </div>

      <!-- Center content -->
      <div class="relative z-10">
        <h2 class="text-[1.75rem] sm:text-[2.5rem] xl:text-[3rem] font-heading font-normal text-white leading-[1.08] tracking-[-0.02em] mb-6">
          Vehicle history<br/>you can <span class="text-coral">trust</span>
        </h2>
        <p class="text-white/40 text-[15px] leading-[1.7] font-inter max-w-sm mb-10">
          Access comprehensive vehicle reports from 8,000+ verified sources across 25+ countries. Reports generated in ~55 seconds.
        </p>

        <!-- Stats pills -->
        <div class="flex items-center gap-3 flex-wrap">
          <span v-for="(stat, i) in stats" :key="i"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.06] text-white/50 text-[12px] font-inter font-medium">
            <svg class="w-3.5 h-3.5 text-coral" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            {{ stat }}
          </span>
        </div>
      </div>

      <!-- Bottom testimonial -->
      <div class="relative z-10">
        <div class="flex items-center gap-1 mb-3">
          <svg v-for="n in 5" :key="n" class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        </div>
        <p class="text-white/60 text-[14px] font-inter leading-[1.6] italic mb-3">"Saved me from buying a car with a rolled-back odometer. The report caught what the seller didn't disclose."</p>
        <p class="text-white/30 text-[12px] font-inter">- Verified Autocertif User</p>
      </div>
    </div>

    <!-- Right: auth form -->
    <div class="flex-1 flex items-center justify-center bg-white px-6 py-12 lg:px-16">
      <div class="w-full max-w-[420px]">
        <!-- Mobile logo -->
        <div class="lg:hidden mb-10">
          <NuxtLink to="/" class="text-gray-900 text-xl font-extrabold tracking-tight font-heading">AUTOCERTIF</NuxtLink>
        </div>

        <!-- Forgot password view -->
        <template v-if="mode === 'forgot'">
          <button class="flex items-center gap-2 text-gray-400 text-[13px] font-inter font-medium hover:text-gray-600 transition-colors cursor-pointer mb-8" @click="mode = 'login'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            Back to Sign In
          </button>

          <h1 class="text-[1.75rem] lg:text-[2rem] font-heading font-normal text-gray-900 leading-[1.1] mb-2">
            Reset your password
          </h1>
          <p class="text-gray-400 text-[14px] font-inter mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form class="space-y-4" @submit.prevent>
            <div>
              <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
              <input type="email" placeholder="you@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
            </div>
            <button type="submit" class="w-full py-3.5 rounded-xl bg-coral text-white text-[14px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer mt-2">
              Send Reset Link
            </button>
          </form>
        </template>

        <!-- Login / Signup view -->
        <template v-else>
          <!-- Toggle -->
          <div class="flex items-center bg-gray-100 rounded-xl p-1 mb-8">
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

          <!-- Heading -->
          <h1 class="text-[1.75rem] lg:text-[2rem] font-heading font-normal text-gray-900 leading-[1.1] mb-2">
            {{ mode === 'login' ? $t('auth.loginTitle') : $t('auth.signupTitle') }}
          </h1>
          <p class="text-gray-400 text-[14px] font-inter mb-8">
            {{ mode === 'login' ? $t('auth.loginSubtitle') : $t('auth.signupSubtitle') }}
          </p>

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
            <NuxtLink to="/terms-of-use" class="text-coral hover:underline">{{ $t('auth.termsLink') }}</NuxtLink>
            {{ $t('auth.and') }}
            <NuxtLink to="/privacy-policy" class="text-coral hover:underline">{{ $t('auth.privacyLink') }}</NuxtLink>.
          </p>

          <!-- Switch -->
          <p class="text-center mt-6 text-gray-500 text-[13px] font-inter">
            {{ mode === 'login' ? $t('auth.noAccount') : $t('auth.hasAccount') }}
            <button class="text-coral font-medium hover:underline cursor-pointer" @click="mode = mode === 'login' ? 'signup' : 'login'">
              {{ mode === 'login' ? $t('auth.switchSignup') : $t('auth.switchLogin') }}
            </button>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const mode = ref<'login' | 'signup' | 'forgot'>('login')

useHead({ title: computed(() => mode.value === 'login' ? 'Sign In - Autocertif' : 'Create Account - Autocertif') })

const stats = computed(() => {
  const raw = tm('auth.stats')
  return Array.isArray(raw) ? raw.map((s: any) => typeof s === 'string' ? s : rt(s)) : []
})
</script>
