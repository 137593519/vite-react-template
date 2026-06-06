import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Vite", "Hono", 
  "Cloudflare Workers", "Node.js", "Tailwind CSS", "GraphQL"
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">关于我</h2>
      <div className="about-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <p>
            你好！我是筑梦。一名热衷于探索前沿技术的全栈开发者。
            我相信代码不仅仅是逻辑的堆砌，更是创造价值的工具。
          </p>
          <p>
            在这个快速迭代的数字时代，我致力于构建高性能、高可用的 Web 应用，
            并乐于分享在 Cloudflare 边缘计算领域的实战经验。
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#00f2ff', margin: 0 }}>5+</h3>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>年经验</span>
            </div>
            <div>
              <h3 style={{ color: '#bd00ff', margin: 0 }}>50+</h3>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>开源项目</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
