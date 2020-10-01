<template>
	
	<section class="header-content-section">

		<a class="book-now-button" id="book-now-button" href="#">Записаться</a>

		<ul class="services-list">
			<li class="services-list-item">Мужская стрижка</li>
			<li class="services-list-item">Стрижка машинкой</li>
			<li class="services-list-item">Моделирование бороды</li>
			<li class="services-list-item">Бритьё</li>
			<li class="services-list-item">Камуфляж седины</li>
			<li class="services-list-item">Укладка волос</li>
		</ul>

		<div class="header-caption">
			<h1 class="header-title"> Ваш персональный барбер </h1>
		</div>

		<div class="header-image-wrapper">
			<img class="header-image " src="../assets/img/barber-top.jpg" alt="my photo">
		</div>

		<span class="animated-arrow">&#8595;</span>
		
	</section>

</template>

<style lang="scss">

$accent: rgb(56, 113, 100);
$text: #333;

.header-content-section {
	display: flex;
	justify-content: flex-end;
	position: relative;
	margin-top: 80px;
}

.header-caption {
	position: absolute;
	top: 20px;
	left: 0;
	z-index: 1;
	width: 100%;
	text-align: center;
	align-self: center;
}

.header-title {
	color: $accent;
	font-size: 3.5em;
}

.header-title,
.services-list {
	text-transform: uppercase;
}

.services-list {
	height: auto;
	padding-top: 250px;
	padding-right: 10px;
	text-align: right;
	border-right: 3px solid $accent;
}

.services-list-item {
	padding: 8px 0;
	margin: 5px 0;
	font-weight: 800;
}

.animated-arrow {
	font-size: 2.1em;
	position: absolute;
	top: 58%;
	left: 48%;
	animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {

    transform: translateY(0);
  }
  40% {

    transform: translateY(-30px);
  }
  60% {

    transform: translateY(-15px);
  }
}

.book-now-button {
	position: fixed;
	bottom: 0;
	background-color: $accent;
	color: #fff;
	padding: 25px;
	text-transform: uppercase;
	cursor: pointer;
	z-index: 5;
	font-weight: 800;
	font-size: 1em;
	border: 1px solid $accent;
	overflow: hidden;
	&::before {
		content: '';
		width: 20%;
		height: 100%;
		position: absolute;
		left:0;
		bottom: 0;
		background-color: rgba(255, 255, 255, .3);
		transform: translate(-5em) skewX(-45deg);		
	}
	
}

.book-now-button:hover.book-now-button::before {
		animation: move-light .1s;
	}

@keyframes move-light {
	0% {
		transform: translate(-4em) skewX(-45deg);
	}
	100% {
		transform: translate(15em) skewX(-45deg);
	}
}
</style>