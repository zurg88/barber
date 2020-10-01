<template>
<Header class="main-header"> 
	<TopMenu />
	<HeaderContent />
</Header>
	
</template>

<script>
import TopMenu from '@/components/TopMenu'
import HeaderContent from '@/components/HeaderContent'
export default {
	components: {
		TopMenu,
		HeaderContent
	}
}
</script>

<style lang="scss" scoped>
.main-header {
	position: relative;
	height: 100vh;
	overflow: hidden;
}
</style>