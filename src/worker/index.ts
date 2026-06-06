import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.post("/api/contact", async (c) => {
  const { name, email, message } = await c.req.json();
  
  // 在实际项目中，这里可以集成 Email 服务或存入 KV/D1
  console.log(`收到来自 ${name} (${email}) 的留言: ${message}`);
  
  return c.json({ success: true, message: "消息已接收" });
});

export default app;
