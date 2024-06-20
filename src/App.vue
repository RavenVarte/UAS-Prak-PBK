<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="background-color: slategrey;">
      <q-toolbar>
        <q-toolbar-title>
          UAS PBK
        </q-toolbar-title>
        <q-btn flat label="Widget" @click="$router.push('/widget')" />
        <q-btn flat label="Portofolio" @click="$router.push('/portfolio')" />
        <q-btn flat label="Tugas 2" @click="$router.push('/tugas2')" />
        <q-btn flat label="Tugas 3" @click="$router.push('/tugas3')" />
        <q-btn flat label="Tugas 4" @click="$router.push('/tugas4')" />
        <q-btn flat label="Tugas 5" @click="$router.push('/tugas5')" />
        <q-btn flat label="Tugas 6" @click="$router.push('/tugas6')" />
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>
