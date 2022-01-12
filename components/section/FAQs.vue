<template>
  <section :id="$t('sections.f_a_qs.id')" class="bg-white py-10">
    <div class="container mx-auto px-0 md:px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('sections.f_a_qs.title') }}
      </h1>
      <div class="w-full pt-2 flex justify-center">
        <input
          v-model="search"
          :placeholder="$t('sections.f_a_qs.search_placeholder')"
          class="border border-primary w-1/2 bg-white appearance-none block rounded-full py-3 px-4 focus:border-blue-500 focus:outline-none"
          type="text"
        />
      </div>
      <div class="flex flex-col justify-center pb-4 px-2 md:px-12 my-12">
        <card-f-a-q
          v-for="(question, i) in questions"
          :key="question.title"
          :title="question.title"
          :readable="i === 0"
          :separate="question.separate"
          :description="question.desc"
        >
        </card-f-a-q>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FAQs extends Vue {
  search: string = ''

  get questions(): Array<object> {
    return (this.$t('sections.f_a_qs.items') as unknown as Array<any>).filter(
      (question) =>
        question.title.includes(this.search) ||
        question.desc.includes(this.search)
    )
  }
}
</script>
