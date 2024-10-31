<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-alt py-3" style="padding: 10px; display:flex; flex-direction: row;">
    <CContainer fluid style="display:flex; width: 100%">
      <RouterLink to="/" class="navbar-brand">
        <img src="/public/Project_Lodestone_Logo_Made_By_NikStudios.svg" alt="" height="36"/>
      </RouterLink>
      <CNavbarToggler aria-label="Toggle navigation" aria-expanded="visible" @click="toggleVisible"/>
      <!-- uhhh is this how the css is really meant to be done lmfao -->
      <CCollapse class="navbar-collapse" :visible="visible" style="display:flex; flex-direction: row; justify-content: end; width: 100%; align-items: center;">
        <CNavbarNav>
          <CNavItem>
            <CNavItem>
            <RouterLink href="/Documentation/Team.html" class="topbarBtn">
              <CNavLink class="h5">Team</CNavLink>
            </RouterLink>
          </CNavItem>
            <RouterLink href="/Documentation" class="topbarBtn">
              <CNavLink class="h5">Documentation</CNavLink>
            </RouterLink>
          </CNavItem>
          <CNavItem>
            <RouterLink to="/download" class="topbarBtn">
              <CNavLink class="h5">Download</CNavLink>
            </RouterLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<style lang="css" scoped>
.topbarBtn {
    margin: 10px;  
  }
</style>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>
