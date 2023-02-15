Vue.createApp({
	data() {
		return {
			temp: 22,
			bars: 22,
			barsArray: [],
			showIcon: false,
			tempColor: "#66CCFF",
			liteColor: "#FFB332",
			currentColor: "",
			root: null
		};
	},

	methods: {
		topBars() {
			let half = this.barsArray.length / 2;
			let top = this.barsArray.slice(0, half);
			let bottom = this.barsArray.slice(half).reverse();
			for (let i = 0; i < top.length; i++) {
				let bar = top[i];
				bar.style.transform = `scale(${i * 0.2})`;
				bar.style.backgroundColor = "#FFFFFF";
			}
			for (let j = 0; j < bottom.length; j++) {
				let bar = bottom[j];
				bar.style.transform = `scale(${j * 0.2})`;
				bar.style.backgroundColor = this.currentColor;
			}
		},

		showTemp() {
			this.showIcon = true;
			this.root.style.setProperty("--current-color", this.tempColor);
			this.currentColor = this.tempColor;
			this.topBars();
		},

		showLite() {
			this.showIcon = false;
			this.root.style.setProperty("--current-color", this.liteColor);
			this.currentColor = this.liteColor;
			this.topBars();
		}
	},

	mounted() {
		this.barsArray = [...this.$refs.bar];
		this.root = document.documentElement;
		this.showTemp();
		this.topBars();
	}
}).mount("#app");