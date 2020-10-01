<template>
<div class="App">
  <Header/>
</div>
</template>

<script>

import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
$accent: rgb(56, 113, 100);
$text: #333;

a {
  text-decoration: none;
}

::placeholder {
	color: #666;
}

::selection {
	background-color: $accent;
	color: #fff;
}

body {
	font-size: 16px;
	min-width: 320px;
	max-width: 1800px;
	margin: 0 auto;
	position: relative;
	line-height: 1.65;
	font-family: 'Russo One', sans-serif;
	overflow-x: hidden;
	color: $text;
	input, textarea {
		border: #666 1px solid;
		outline: none;
		&:focus:required:invalid {
			border-color: red;
		}
		&:required:valid {
			border-color: green;
		}
	}
}

a {
	text-decoration: none;
	color: $text;
}

ul {
	padding: 0;
	margin: 0;
}

li {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

img {
	display: block;
}

.img-responsive {
	width: 100%;
	height: auto;
}
</style>
