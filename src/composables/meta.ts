export function useMeta() {
  const route = useRoute()
  const base_url = import.meta.env.VITE_BASE_URL || 'localhost:3000'

  const description =
    'Anyone can forget how to make character classes for a regex, slice a list or do a for loop. This cheat sheet tries to provide a basic reference for beginner and advanced developers, lower the entry barrier for newcomers and help veterans refresh the old tricks.'
  // const cardImage =
  // 'https://raw.githubusercontent.com/wilfredinni/javascript-cheatsheet/master/public/social/social_banner.png'
  const themeColor = computed(() => (isDark.value ? '#1f2937' : '#ffffff'))
  const url = computed(() => `https://${base_url}${route.path}`)
  const keywords = [
    'java',
    'cheatsheet',
    'cheat',
    'sheet',
    'functions',
    'args',
    'kwargs',
    'sets',
    'dictionary',
    'list',
    'string',
    'regular',
    'expression',
    'formatting',
    'file',
    'path',
    'json',
    'test',
    'vscode',
    'comprehension',
    'exception',
    'debugging',
    'dataclasses',
    'environments',
    'flow control',
    'itertools',
  ]

  const meta = {
    title: 'Java Cheatsheet - Java Cheatsheet',
    description,
    meta: [
      { name: 'theme-color', content: themeColor },
      { name: 'description', content: description },
      { name: 'author', content: 'Java Cheatsheet' },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:title', content: 'Java Cheatsheet' },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      // { property: 'og:image', content: cardImage },
      { name: 'twitter:title', content: 'Java Cheatsheet' },
      { name: 'twitter:description', content: 'The Java Cheatsheet' },
      // { name: 'twitter:image', content: cardImage },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [{ rel: 'canonical', href: url }],
  }

  return { meta, description }
}
