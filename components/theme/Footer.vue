<template>
  <div>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6 lg:mr-16 text-black">
            <NuxtLink
              prefetch
              :to="localePath('/')"
              class="text-blue-900 no-underline hover:no-underline"
              :title="$t('footer.logo.link.title')"
            >
              <theme-logo />
            </NuxtLink>
          </div>
          <div
            v-for="group in $t('footer.groups')"
            :key="group.name"
            class="flex-1 mt-5"
          >
            <p class="uppercase text-gray-500 md:mb-6">{{ group.name }}</p>
            <ul class="list-reset mb-6">
              <li
                v-for="link in group.links"
                :key="link.name"
                class="mt-2 inline-block mr-2 md:block md:mr-0"
              >
                <a
                  v-if="typeof link.href === 'string'"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  :href="link.href"
                  :title="link.title"
                  >{{ link.name }}</a
                >
                <NuxtLink
                  v-else
                  prefetch
                  :to="localePath(link.href.path)"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  :title="link.title"
                  >{{ link.name }}</NuxtLink
                >
              </li>
              <li
                v-if="group.name === 'Validator'"
                class="mt-2 inline-block mr-2 md:block md:mr-0"
              >
                <nuxt-link
                  v-if="$i18n.locale === 'tr'"
                  key="en"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  :to="switchLocalePath('en')"
                  >English</nuxt-link
                >
                <nuxt-link
                  v-else
                  key="tr"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  :to="switchLocalePath('tr')"
                  >Türkçe</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-2 mx-8 mb-3">
        <lazy-button-status
          :name="$t('statusButton.name')"
          :validator="$chain.config('T_VALIDATOR')"
          :rpc="$chain.config('RPC')"
        />
        <lazy-button-status
          :name="$t('statusButton.testNetName')"
          :validator="$chain.config('T_VALIDATOR', 'TESTNET')"
          :rpc="$chain.config('RPC', 'TESTNET')"
        />
      </div>

      <p
        class="text-gray-500 text-sm pb-2 mx-8"
        v-html="$t('footer.copyright')"
      ></p>
    </footer>
  </div>
</template>
