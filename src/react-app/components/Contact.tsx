import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("发送中...");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        }),
        headers: { "Content-Type": "application/json" }
      });
      
      if (res.ok) {
        setStatus("消息已发送！我会尽快回复你。");
        form.reset();
      } else {
        setStatus("发送失败，请稍后再试。");
      }
    } catch (error) {
      setStatus("网络错误，请检查连接。");
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">联系我</h2>
      <div className="contact-wrapper">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <p>欢迎留言交流，共同打造更好的产品与体验。</p>
          <div className="social-links">
            <a href="mailto:your@email.com">Email</a>
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="你的名字" required />
          <input type="email" name="email" placeholder="你的邮箱" required />
          <textarea name="message" rows={5} placeholder="想对我说的话..." required></textarea>
          <button type="submit">发送消息</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
