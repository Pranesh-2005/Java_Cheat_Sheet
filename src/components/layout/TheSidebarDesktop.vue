<script setup lang="ts">
const navigation = useNavigationStore()
</script>

<template>
  <nav>


    <the-sidebar-navigation
      :navigation="navigation.cheatsheetNavigation"
      section-name="Cheatsheet"
    />
     <the-sidebar-navigation
      :navigation="navigation.oopsNavigation"
      section-name="OOP - Object Oriented Programming"
    />
     <the-sidebar-navigation
      :navigation="navigation.wrapperclassNavigation"
      section-name="Wrapper Classes In Java"
    />
    <the-sidebar-navigation
      :navigation="navigation.collectionNavigation"
      section-name="Collection Framework in Java"
    />
        <the-sidebar-navigation
      :navigation="navigation.multiThreadNavigation"
      section-name="Multi Theading in Java"
    />
  </nav>
</template>
