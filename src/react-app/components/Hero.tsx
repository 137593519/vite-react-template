import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="hero-title">筑梦博客</h1>
        <p className="hero-slogan">用代码编织梦想，以技术驱动未来</p>
        <div className="hero-roles">
          <span className="role-tag">Frontend Developer</span>
          <span className="role-tag">UI Designer</span>
          <span className="role-tag">Cloudflare Enthusiast</span>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ marginTop: '4rem', fontSize: '2rem', color: '#00f2ff' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
