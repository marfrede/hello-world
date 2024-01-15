<header><span>Svelte Tutorial</span></header>
<div class="main-content">
	<slot />
</div>
<footer><span>© marvinfrede</span></footer>

<style lang="scss">
	.main-content {
		margin: 16px 16px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	header,
	footer {
		position: relative;
		width: 100%;
		height: 32px;
		background-color: black;

		@keyframes moveLeftAndRight {
			0%,
			100% {
				transform: translateX(-50%);
			}
			50% {
				transform: translateX(calc(-50% + 32px));
			}
		}

		span {
			color: aliceblue;
			position: absolute;
			top: 25%;
			left: 50%;
			font-size: 16px;

			font-family: 'Courier New', Courier, monospace;
			animation: moveLeftAndRight 2s ease infinite;
		}
	}

	footer {
		position: fixed;
		bottom: 0;
	}
</style>
