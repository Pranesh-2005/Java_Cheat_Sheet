<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
// import ReferenceIcon from '~/components/icons/ReferenceIcon.vue'
// import PluginIcon from '~/components/icons/PluginIcon.vue'
// import ArrowIcon from '~/components/icons/ArrowIcon.vue'
// import GridIcon from '~/components/icons/GridIcon.vue'

// const cardLinks = [
//   // {
//   //   path: 'https://github.com/wilfredinni/javascript-cheatsheet',
//   //   name: 'View on GitHub',
//   //   description: `Drop a star on GitHub if you find this project useful.`,
//   //   icon: ArrowIcon,
//   //   external: true,
//   // },
//   // {
//   //   path: '/contributing',
//   //   name: 'Contribute',
//   //   description: `Get to know how easy it is to contribute to the Javascript Cheatsheet.`,
//   //   icon: PluginIcon,
//   // },
//   // {
//   //   path: '/blog',
//   //   name: 'Blog',
//   //   description: `Read detailed articles about Python and it's ecosystem.`,
//   //   icon: ReferenceIcon,
//   // },
//   // {
//   //   path: '/changelog',
//   //   name: 'Changelog',
//   //   description: `See what is new, what got fixed, and what is coming.`,
//   //   icon: GridIcon,
//   // },
// ]

const { description } = useMeta()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <article>
    <prose>
      <div class="flex justify-center sm:hidden px-32">
        <img
          class="rounded"
          src="/icons/java.png"
          alt="java"
          height="10"
          width="10"
        />
      </div>

      <base-title
        v-if="smAndLarger"
        id="javascript-cheatsheet"
        title="Java Cheatsheet"
        :description="description"
      >
        <h1>Java Cheatsheet</h1>
      </base-title>
      <h1
        v-else
        class="mb-2 bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-amber-400 dark:via-teal-300 dark:to-amber-300"
      >
        Java Cheatsheet
      </h1>
    </prose>
<prose class="hidden sm:block">
  <p>
    Welcome to the Java Cheatsheet! This is a comprehensive resource designed to provide developers with quick access to essential Java programming concepts. Whether you're a beginner or an experienced developer, you'll find useful information and code snippets for common tasks, data structures, algorithms, and more. Use this cheatsheet as a reference to boost your productivity and refresh your memory on Java topics.
  </p>
</prose>


    <div className="not-prose my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <!-- <base-link-card
        v-for="link in cardLinks"
        v-once
        :key="link.path"
        :title="link.name"
        :description="link.description"
        :path="link.path"
        :icon="link.icon"
        :is-external="link.external"
      /> -->
    </div>

    <!-- <div class="mt-10">
      <prose>
        <h2 id="contributors" class="text-center sm:text-start">
          Contributors
        </h2>
      </prose>
      <contributors class="pb-3 pt-10" />
    </div> -->
  </article>
</template>
