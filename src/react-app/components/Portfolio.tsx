import { motion } from "framer-motion";

const projects = [
  {
    title: "Vite React Template",
    desc: "基于 Cloudflare Workers 的全栈开发模板，支持 HMR 和零配置部署。",
    tags: ["React", "Hono", "Workers"]
  },
  {
    title: "Edge Analytics Dashboard",
    desc: "实时展示边缘节点数据的监控面板，采用 D1 数据库存储历史数据。",
    tags: ["D1", "Chart.js", "TypeScript"]
  },
  {
    title: "Serverless Image Optimizer",
    desc: "利用 Workers 实现的图片按需压缩与格式转换工具，提升加载速度。",
    tags: ["R2", "Image Processing", "API"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">作品集</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
