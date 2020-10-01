<template>
	<div class="top-menu">

			<div class="contucts-block">
				<a class="contucts-phone" id="contucts-phone" href="tel:+375291465108" title="click!"> 29-1465108 </a>
				<p class="contucts-address" id="contucts-address">Минск, Чкалова-15</p>
				<ul class="social-links-list" id="social-links-list">
					<li class="social-links-item"> <a href="#"> <i class="fab fa-instagram"></i> </a></li>
					<li class="social-links-item"><a href="#"> <i class="fab fa-vk"></i> </a></li>
				</ul>
			</div>

			<div class="logo-block">
				<a href="index.html">Famouse Barber</a>
			</div>

			<div class="main-menu-btn" id="main-menu-btn" title="Menu">
				<a class="toggle-btn" id="toggle-btn" href="#"></a>
			</div>
		</div>
</template>

<style lang="scss" scoped>
$accent: rgb(56, 113, 100);
$text: #333;
.top-menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	font-weight: 800;
	font-size: 1.6em;
	position: fixed;
	width: 100%;
	max-width: 1800px;
	z-index: 5;
}

.social-links-list,
.contucts-address {
	position: fixed;
	z-index: 3;
	bottom: 0;
}

.contucts-phone {
	top: 60px;
}

.main-menu-btn {
	margin-right: 80px;
	z-index: 10;
	.show-menu::after,
	.show-menu::before {
		background-color: #fff;
	}
}

.toggle-btn {
	display: block;
	width: 40px;
	height: 40px;
	position: relative;
	margin-left: 50px;
	z-index: 5;

	&::before {
		content: "";
		position: absolute;	
		width: 100%;
		height: 5px;
		background-color: $text;
		left: 0;
		top: 10px;
	}

	&::after {
		content: "";
		position: absolute;	
		width: 100%;
		height: 5px;
		background-color: $text;
		left: 0;
		bottom: 10px;
	}

	&::after,
	&::before {
		transition: .3s;
	}

}

.toggle-btn:hover.toggle-btn::before {
		top: 7px;
}

.toggle-btn:hover.toggle-btn::after {
		bottom: 7px;
}

.main-menu-btn .show-menu:hover.show-menu::after {
		bottom: 5px;
		background-color: $accent;
	}
.main-menu-btn .show-menu:hover.show-menu::before {
	top: 5px;
	background-color: $accent;
}
</style>