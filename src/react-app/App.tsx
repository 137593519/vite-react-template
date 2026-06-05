// src/App.tsx

import "./App.css";

function App() {
	return (
		<div className="homepage">
			<header className="hero">
				<p className="eyebrow">筑梦博客</p>
				<h1>欢迎来到筑梦博客</h1>
				<p>
					这里是我的官网首页，分享前端技术、产品思考与成长故事。
				</p>
				<a className="cta" href="#latest">
					查看最新文章
				</a>
			</header>

			<section className="intro">
				<h2>我们一起筑梦前行</h2>
				<p>
					在这里，你会看到关于 React、Vite、Cloudflare Workers 以及个人成长的实战分享。
				</p>
			</section>

			<section id="latest" className="cards">
				<article className="card">
					<h3>最新文章</h3>
					<p>持续更新前端实战、性能优化与开发者工具的实用攻略。</p>
				</article>
				<article className="card">
					<h3>关于我</h3>
					<p>一个热爱技术、愿意用代码记录梦想的开发者。</p>
				</article>
				<article className="card">
					<h3>联系我</h3>
					<p>欢迎留言交流，共同打造更好的产品与体验。</p>
				</article>
			</section>
		</div>
	);
}

export default App;
