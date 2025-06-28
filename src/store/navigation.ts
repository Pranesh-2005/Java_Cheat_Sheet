import { acceptHMRUpdate, defineStore } from 'pinia'

export interface NavigationItem {
  name: string
  path: string
  updated?: boolean
  internal?: boolean
}

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [] as NavigationItem[],

    // Only "Getting Started" remains in mainNavigation
    mainNavigation: [
      {
        name: 'Getting Started',
        path: '/',
      },
    ] as NavigationItem[],

    // Only start with "Basics" as the first cheatsheet entry
    cheatsheetNavigation: [
      {
        name: 'Basics',
        path: '/cheatsheet/basics',
        updated: false,
      },
      {
        name: 'Control Flow',
        path: '/cheatsheet/control-flow',
        updated: false,
      },
      {
        name: 'Functions',
        path: '/cheatsheet/functions',
        updated: false,
      },
      {
        name: 'Arrays',
        path: '/cheatsheet/arrays',
        updated: false,
      },
      {
        name: 'Array Methods',
        path: '/cheatsheet/array-methods',
        updated: false,
      },
      // {
      //   name: 'Objects',
      //   path: '/cheatsheet/objects',
      //   updated: false,
      // },
      // {
      //   name: 'Map',
      //   path: '/cheatsheet/map',
      //   updated: false,
      // },
      // {
      //   name: 'Sets',
      //   path: '/cheatsheet/sets',
      //   updated: false,
      // },
      {
        name: 'String Manipulation',
        path: '/cheatsheet/manipulating-strings',
        updated: false,
      },
      {
        name: 'String Formatting',
        path: '/cheatsheet/string-formatting',
        updated: false,
      },
      {
        name: 'Regular Expressions',
        path: '/cheatsheet/regular-expressions',
        updated: false,
      },
      {
        name: 'Files and Directories',
        path: '/cheatsheet/directory-files',
        updated: false,
      },
      {
        name: 'Error Handling',
        path: '/cheatsheet/error-handling',
        updated: false,
      },
      {
        name: 'Debugging',
        path: '/cheatsheet/debugging',
        updated: false,
      },
    ] as NavigationItem[],
    oopsNavigation: [
      {
        name: 'Basics',
        path: '/oops/oopsbasics',
        updated: false,
      },
      {
        name: 'Class',
        path: '/oops/class',
        updated: false,
      },
      {
        name: 'Object',
        path: '/oops/object',
        updated: false,
      },
       {
        name: 'Abstraction',
        path: '/oops/abstraction',
        updated: false,
      },
      {
        name: 'Encapsulation',
        path: '/oops/encapsulation',
        updated: false,
      },
      {
        name: 'Inheritence',
        path: '/oops/inheritence',
        updated: false,
      },
      {
        name: 'Polymorphism',
        path: '/oops/polymorphism',
        updated: false,
      },
    ] as NavigationItem[],
    collectionNavigation: [
      {
        name: 'Basics',
        path: '/collection/basics',
        updated: false,
      },
      {
        name: 'List',
        path: '/collection/list',
        updated: false,
      },
      {
        name: 'Set',
        path: '/collection/set',
        updated: false,
      },
      {
        name: 'Stack',
        path: '/collection/stack',
        updated: false,
      },
      {
        name: 'LinkedList',
        path: '/collection/linkedlist',
        updated: false,
      },
       {
        name: 'Queue',
        path: '/collection/queue',
        updated: false,
      },
      {
        name: 'Map',
        path: '/collection/map',
        updated: false,
      },
      {
        name: 'Deque',
        path: '/collection/deque',
        updated: false,
      },
      {
        name: 'SortedSet',
        path: '/collection/sortedset',
        updated: false,
      },
    ] as NavigationItem[],

    multiThreadNavigation: [
      {
        name: 'Basics',
        path: '/multithread/basics',
      },
    ] as NavigationItem[],
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
