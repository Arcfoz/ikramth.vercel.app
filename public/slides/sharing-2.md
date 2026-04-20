# Integrasi N8N dengan OpenClaw
## Pencatat Keuangan Pribadi dengan Self-Hosting
<!-- .slide: data-transition="zoom" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 50%, #0d1412 100%)" class="center" -->

<div class="badge-row" style="display: flex; gap: 12px; justify-content: center; margin-top: 16px;">
  <span class="tech-badge">🤖 AI-Powered</span>
  <span class="tech-badge">🔒 Self-Hosted</span>
  <span class="tech-badge">💰 Finance</span>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 😩 Masalah yang Ingin Diselesaikan

<div style="display: flex; gap: 28px; align-items: stretch; margin-top: 16px;">

<div style="flex: 1; background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.18); border-radius: 14px; padding: 28px;">
  <div style="font-size: 2.2rem; margin-bottom: 12px;">💸</div>
  <h3 style="color: #34d399; font-size: 1.2rem; margin-bottom: 10px;">Ingin Mencatat Keuangan</h3>
  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.6;">Setiap orang tahu pentingnya mencatat pengeluaran harian. Namun kenyataannya...</p>
</div>

<div style="flex: 1.4; background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2); border-radius: 14px; padding: 28px;">
  <div style="font-size: 2.2rem; margin-bottom: 12px;">🚫</div>
  <h3 style="color: #fca5a5; font-size: 1.2rem; margin-bottom: 10px;">Pain Point: Tidak Konsisten</h3>
  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.6;">Alasan utama: <strong style="color: #fca5a5;">"Terlalu ribet!"</strong></p>
  <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); border-radius: 8px; padding: 8px 14px;">
      <span style="color: #f87171; font-size: 1rem;">✗</span>
      <span style="color: #94a3b8; font-size: 0.82rem;">Harus buka app, pilih kategori, input manual</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); border-radius: 8px; padding: 8px 14px;">
      <span style="color: #f87171; font-size: 1rem;">✗</span>
      <span style="color: #94a3b8; font-size: 0.82rem;">Lupa mencatat setelah transaksi</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); border-radius: 8px; padding: 8px 14px;">
      <span style="color: #f87171; font-size: 1rem;">✗</span>
      <span style="color: #94a3b8; font-size: 0.82rem;">Akhirnya berhenti dalam beberapa hari</span>
    </div>
  </div>
</div>

</div>

<div style="text-align: center; margin-top: 18px;">
  <p style="font-size: 0.9rem; color: #475569; font-style: italic;">"Bagaimana kalau pencatatan terjadi secara otomatis, tanpa effort dari user?"</p>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## ✅ Solusi: Automasi Pencatatan Keuangan

<div style="background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.18); border-radius: 12px; padding: 14px 18px; margin-top: 8px; margin-bottom: 14px;">
  <p style="font-size: 0.88rem; color: #a7f3d0; line-height: 1.5; margin: 0;">Setiap transaksi dicatat <strong style="color: #34d399;">otomatis</strong> — tanpa perlu buka aplikasi atau input manual.</p>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 0; margin-top: 12px;">

  <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 14px; padding: 14px 16px; text-align: center; min-width: 130px;">
    <div style="font-size: 1.8rem; margin-bottom: 6px;">📱</div>
    <p style="font-size: 0.72rem; color: #6ee7b7; font-weight: 600; margin: 0; line-height: 1.3;">Scan QRIS /<br/>Transaksi</p>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 6px;">
    <div style="width: 36px; height: 2px; background: linear-gradient(90deg, #10b981, #34d399);"></div>
    <span style="color: #34d399; font-size: 0.7rem; margin-top: 2px;">→</span>
  </div>

  <div style="background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.3); border-radius: 14px; padding: 14px 16px; text-align: center; min-width: 130px;">
    <div style="font-size: 1.8rem; margin-bottom: 6px;">📧</div>
    <p style="font-size: 0.72rem; color: #a7f3d0; font-weight: 600; margin: 0; line-height: 1.3;">Email Notifikasi<br/><span style="font-weight: 400; color: #94a3b8; font-size: 0.65rem;">Mandiri · Bank Jago</span></p>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 6px;">
    <div style="width: 36px; height: 2px; background: linear-gradient(90deg, #34d399, #059669);"></div>
    <span style="color: #34d399; font-size: 0.7rem; margin-top: 2px;">→</span>
  </div>

  <div style="background: rgba(5,150,105,0.1); border: 1px solid rgba(5,150,105,0.3); border-radius: 14px; padding: 14px 16px; text-align: center; min-width: 130px;">
    <div style="font-size: 1.8rem; margin-bottom: 6px;">⚡</div>
    <p style="font-size: 0.72rem; color: #34d399; font-weight: 600; margin: 0; line-height: 1.3;">N8N Parsing<br/><span style="font-weight: 400; color: #94a3b8; font-size: 0.65rem;">nominal · merchant · waktu</span></p>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 6px;">
    <div style="width: 36px; height: 2px; background: linear-gradient(90deg, #059669, #10b981);"></div>
    <span style="color: #34d399; font-size: 0.7rem; margin-top: 2px;">→</span>
  </div>

  <div style="position: relative;">
    <div style="background: rgba(16,185,129,0.1); border: 2px dashed rgba(250,204,21,0.6); border-radius: 14px; padding: 14px 16px; text-align: center; min-width: 130px; box-shadow: 0 0 16px rgba(250,204,21,0.12);">
      <div style="font-size: 1.8rem; margin-bottom: 6px;">🐙</div>
      <p style="font-size: 0.72rem; color: #6ee7b7; font-weight: 600; margin: 0; line-height: 1.3;">OpenClaw<br/><span style="font-weight: 400; color: #94a3b8; font-size: 0.65rem;">AI categorization</span></p>
    </div>
    <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); margin-top: 6px; white-space: nowrap;">
      <p style="font-size: 0.58rem; color: #fbbf24; margin: 0; text-align: center; line-height: 1.4;">* Sebenarnya tanpa OpenClaw juga bisa<br/><span style="color: #94a3b8;">Tujuan utama: integrasi chatbot di <strong style="color: #6ee7b7;">WhatsApp</strong></span></p>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 6px;">
    <div style="width: 36px; height: 2px; background: linear-gradient(90deg, #10b981, #6ee7b7);"></div>
    <span style="color: #34d399; font-size: 0.7rem; margin-top: 2px;">→</span>
  </div>

  <div style="background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.3); border-radius: 14px; padding: 14px 16px; text-align: center; min-width: 130px;">
    <div style="font-size: 1.8rem; margin-bottom: 6px;">💰</div>
    <p style="font-size: 0.72rem; color: #a7f3d0; font-weight: 600; margin: 0; line-height: 1.3;">Sure Finance<br/><span style="font-weight: 400; color: #94a3b8; font-size: 0.65rem;">self-hosted dashboard</span></p>
  </div>

</div>

<div style="text-align: center; margin-top: 60px;">
  <p style="font-size: 0.78rem; color: #475569; margin: 0;">Semua proses berjalan di background — <strong style="color: #34d399;">zero effort</strong> dari user.</p>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 🛠️ Yang Dibutuhkan

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; margin-top: 16px;">

<div class="req-card" style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 20px; text-align: center;">
  <div style="font-size: 2rem; margin-bottom: 8px;">☁️</div>
  <h3 style="color: #34d399; font-size: 1.15rem; margin-bottom: 8px;">VPS Server</h3>
  <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">Contabo — <strong style="color: #6ee7b7;">$4/bulan</strong></p>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 10px; text-align: left;">
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ 4 vCPUs</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ 8 GB RAM</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ 75 GB NVMe</p>
  </div>
</div>

<div class="req-card" style="background: rgba(52, 211, 153, 0.07); border: 1px solid rgba(52, 211, 153, 0.2); border-radius: 14px; padding: 20px; text-align: center;">
  <div style="font-size: 2rem; margin-bottom: 8px;">🌐</div>
  <h3 style="color: #6ee7b7; font-size: 1.15rem; margin-bottom: 8px;">Domain</h3>
  <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;"><em>(Optional)</em></p>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 10px; text-align: left;">
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ Custom domain</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ SSL/HTTPS</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ Subdomain routing</p>
  </div>
</div>

<div class="req-card" style="background: rgba(5, 150, 105, 0.08); border: 1px solid rgba(5, 150, 105, 0.25); border-radius: 14px; padding: 20px; text-align: center;">
  <div style="font-size: 2rem; margin-bottom: 8px;">🧠</div>
  <h3 style="color: #10b981; font-size: 1.15rem; margin-bottom: 8px;">Model LLM</h3>
  <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">AI untuk automasi</p>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 10px; text-align: left;">
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ MiniMax</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ Claude / GPT</p>
    <p style="font-size: 0.78rem; margin: 3px 0; color: #a7f3d0;">▸ Model sejenis</p>
  </div>
</div>

</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 🚀 Metode Deployment

<div style="display: flex; align-items: stretch; gap: 24px; margin-top: 12px;">

<div style="flex: 1;">
  <div style="background: rgba(16, 185, 129, 0.07); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 14px; padding: 20px; margin-bottom: 14px;">
    <h3 style="color: #34d399; font-size: 1.2rem; margin-bottom: 10px;">⚡ Coolify</h3>
    <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 10px;">Self-hosted PaaS — deploy aplikasi dengan mudah layaknya Vercel / Railway, tapi di server sendiri.</p>
    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
      <span class="tech-badge">Docker</span>
      <span class="tech-badge">Auto SSL</span>
      <span class="tech-badge">Git Deploy</span>
    </div>
  </div>

  <div style="background: rgba(5, 150, 105, 0.07); border: 1px solid rgba(5, 150, 105, 0.2); border-radius: 14px; padding: 20px;">
    <h3 style="color: #6ee7b7; font-size: 1.2rem; margin-bottom: 10px;">🔐 Tailscale</h3>
    <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 10px;">Mesh VPN sebagai pengaman jaringan — <strong style="color: #a7f3d0;">firewall zero-trust</strong> tanpa expose port publik.</p>
    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
      <span class="tech-badge">WireGuard</span>
      <span class="tech-badge">Zero Trust</span>
      <span class="tech-badge">MagicDNS</span>
    </div>
  </div>
</div>

<div style="flex: 0 0 240px; text-align: center;">
  <div style="background: rgba(13, 20, 18, 0.9); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center;">
    <div style="font-size: 2.4rem; margin-bottom: 6px;">🏗️</div>
    <p style="color: #34d399; font-size: 0.9rem; font-weight: 600; margin-bottom: 12px;">Arsitektur</p>
    <div style="text-align: center; font-size: 0.82rem; color: #94a3b8;">
      <p style="margin: 5px 0;">🌍 Internet</p>
      <p style="color: #059669; margin: 2px 0;">↓</p>
      <p style="margin: 5px 0; color: #6ee7b7;">🔐 Tailscale VPN</p>
      <p style="color: #059669; margin: 2px 0;">↓</p>
      <p style="margin: 5px 0; color: #34d399;">⚡ Coolify PaaS</p>
      <p style="color: #059669; margin: 2px 0;">↓</p>
      <p style="margin: 5px 0; color: #a7f3d0;">🐳 Docker Containers</p>
    </div>
  </div>
</div>

</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 📦 Aplikasi yang Diinstall

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 16px;">

<div style="background: linear-gradient(145deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02)); border: 1px solid rgba(16,185,129,0.2); border-radius: 16px; padding: 24px; text-align: center; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #059669, #34d399);"></div>
  <div style="font-size: 2.4rem; margin-bottom: 10px;">🐙</div>
  <h3 style="color: #34d399; font-size: 1.25rem; margin-bottom: 8px;">OpenClaw</h3>
  <p style="font-size: 0.82rem; color: #94a3b8; line-height: 1.5;">AI Assistant chatbot — jembatan komunikasi antara user dan sistem pencatatan keuangan</p>
  <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(16,185,129,0.15);">
    <span class="tech-badge">LLM Chat</span>
    <span class="tech-badge">API</span>
  </div>
</div>

<div style="background: linear-gradient(145deg, rgba(234,179,8,0.1), rgba(234,179,8,0.02)); border: 1px solid rgba(234,179,8,0.2); border-radius: 16px; padding: 24px; text-align: center; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #d97706, #fbbf24);"></div>
  <div style="font-size: 2.4rem; margin-bottom: 10px;">⚙️</div>
  <h3 style="color: #fbbf24; font-size: 1.25rem; margin-bottom: 8px;">N8N</h3>
  <p style="font-size: 0.82rem; color: #94a3b8; line-height: 1.5;">Workflow automation — orkestrasi proses pencatatan dari chat ke database keuangan</p>
  <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(234,179,8,0.15);">
    <span class="tech-badge">Automation</span>
    <span class="tech-badge">Webhook</span>
  </div>
</div>

<div style="background: linear-gradient(145deg, rgba(52,211,153,0.1), rgba(52,211,153,0.02)); border: 1px solid rgba(52,211,153,0.2); border-radius: 16px; padding: 24px; text-align: center; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #10b981, #6ee7b7);"></div>
  <div style="font-size: 2.4rem; margin-bottom: 10px;">💰</div>
  <h3 style="color: #6ee7b7; font-size: 1.25rem; margin-bottom: 8px;">Sure Finance</h3>
  <p style="font-size: 0.82rem; color: #94a3b8; line-height: 1.5;">Dashboard keuangan pribadi — visualisasi dan tracking transaksi harian secara otomatis</p>
  <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(52,211,153,0.15);">
    <span class="tech-badge">Dashboard</span>
    <span class="tech-badge">Finance</span>
  </div>
</div>

</div>

---

<!-- .slide: data-transition="zoom" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## ⚡ Coolify Dashboard

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; margin-top: 40px;">
  <p style="color: #94a3b8; font-size: 1rem; text-align: center;">Self-hosted PaaS — deploy & manage semua service dari satu dashboard.</p>
  <a href="https://coolify.arcfoz.site" target="_blank" style="display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #059669, #10b981); color: #ecfdf5; text-decoration: none; padding: 16px 36px; border-radius: 14px; font-size: 1.1rem; font-weight: 600; box-shadow: 0 8px 32px rgba(16,185,129,0.3); letter-spacing: 0.01em;">
    <span>⚡</span> Buka Coolify Dashboard
  </a>
  <p style="color: #475569; font-size: 0.8rem; margin: 0;">🔗 coolify.arcfoz.site</p>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 🤖 Skema N8N + Claude AI

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 12px;">

<div style="background: rgba(13,20,18,0.9); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 18px; font-family: 'JetBrains Mono', monospace;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(16,185,129,0.12);">
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #f87171;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #fbbf24;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #34d399;"></div>
    <span style="color: #475569; font-size: 0.7rem; margin-left: 6px;">Claude Chat</span>
  </div>
  <div style="background: rgba(16,185,129,0.08); border-radius: 10px; padding: 12px 14px; margin-bottom: 10px; border-left: 3px solid #34d399;">
    <p style="font-size: 0.72rem; color: #94a3b8; margin: 0 0 4px 0;">👤 User</p>
    <p style="font-size: 0.78rem; color: #ecfdf5; margin: 0; line-height: 1.5;">"Buatkan saya flow pencatat keuangan dari email notifikasi bank ke Openclaw"</p>
  </div>
  <div style="background: rgba(5,150,105,0.08); border-radius: 10px; padding: 12px 14px; border-left: 3px solid #059669;">
    <p style="font-size: 0.72rem; color: #94a3b8; margin: 0 0 4px 0;">🤖 Claude</p>
    <p style="font-size: 0.78rem; color: #a7f3d0; margin: 0; line-height: 1.5;">Baik! Saya akan membuat workflow N8N untuk kamu. Menganalisis kebutuhan...<br/><span style="color: #34d399;">✓ Generating workflow JSON</span><br/><span style="color: #34d399;">✓ Deploying to N8N</span></p>
  </div>
  <p style="font-size: 0.62rem; color: #334155; margin: 10px 0 0 0; text-align: right;">powered by n8n-skills · czlonkowski</p>
</div>

<div style="display: flex; flex-direction: column; gap: 10px; justify-content: center;">
  <div style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 14px;">
    <div style="font-size: 1.6rem; flex-shrink: 0;">💬</div>
    <div>
      <p style="font-size: 0.78rem; color: #34d399; font-weight: 600; margin: 0 0 2px 0;">1. Prompt</p>
      <p style="font-size: 0.72rem; color: #94a3b8; margin: 0;">Deskripsikan workflow yang diinginkan</p>
    </div>
  </div>
  <div style="background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.2); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 14px;">
    <div style="font-size: 1.6rem; flex-shrink: 0;">🧠</div>
    <div>
      <p style="font-size: 0.78rem; color: #6ee7b7; font-weight: 600; margin: 0 0 2px 0;">2. Claude Analisis</p>
      <p style="font-size: 0.72rem; color: #94a3b8; margin: 0;">Memilih nodes & konfigurasi yang tepat</p>
    </div>
  </div>
  <div style="background: rgba(5,150,105,0.08); border: 1px solid rgba(5,150,105,0.2); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 14px;">
    <div style="font-size: 1.6rem; flex-shrink: 0;">📦</div>
    <div>
      <p style="font-size: 0.78rem; color: #a7f3d0; font-weight: 600; margin: 0 0 2px 0;">3. Generate & Deploy</p>
      <p style="font-size: 0.72rem; color: #94a3b8; margin: 0;">JSON workflow langsung masuk ke N8N</p>
    </div>
  </div>
</div>

</div>

---

<!-- .slide: data-transition="zoom" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## ⚙️ N8N Dashboard

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; margin-top: 40px;">
  <p style="color: #94a3b8; font-size: 1rem; text-align: center;">Workflow automation engine — orkestrasi semua integrasi dari satu tempat.</p>
  <a href="https://n8n.arcfoz.site" target="_blank" style="display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #d97706, #fbbf24); color: #0d1412; text-decoration: none; padding: 16px 36px; border-radius: 14px; font-size: 1.1rem; font-weight: 600; box-shadow: 0 8px 32px rgba(234,179,8,0.25); letter-spacing: 0.01em;">
    <span>⚙️</span> Buka N8N Dashboard
  </a>
  <p style="color: #475569; font-size: 0.8rem; margin: 0;">🔗 n8n.arcfoz.site</p>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 🔗 Integrasi API Sure Finance di OpenClaw

<div style="background: rgba(13,20,18,0.9); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 18px; margin-top: 12px; font-family: 'JetBrains Mono', monospace;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(16,185,129,0.12);">
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #f87171;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #fbbf24;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #34d399;"></div>
    <span style="color: #475569; font-size: 0.7rem; margin-left: 6px;">OpenClaw Chat</span>
  </div>

  <div style="background: rgba(16,185,129,0.08); border-radius: 10px; padding: 12px 14px; margin-bottom: 10px; border-left: 3px solid #34d399;">
    <p style="font-size: 0.72rem; color: #94a3b8; margin: 0 0 4px 0;">👤 User</p>
    <p style="font-size: 0.78rem; color: #ecfdf5; margin: 0; line-height: 1.6;">Tolong integrasikan dengan Sure Finance di <span style="color: #34d399;">https://sure.arcfoz.site</span> menggunakan API Key <span style="color: #fbbf24;">XXX</span></p>
  </div>

  <div style="background: rgba(5,150,105,0.08); border-radius: 10px; padding: 12px 14px; border-left: 3px solid #059669;">
    <p style="font-size: 0.72rem; color: #94a3b8; margin: 0 0 6px 0;">🐙 OpenClaw</p>
    <p style="font-size: 0.75rem; color: #a7f3d0; margin: 0 0 6px 0; line-height: 1.5;">Siap! Saya akan menghubungkan ke Sure Finance. Mengkonfigurasi koneksi...</p>
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <span style="font-size: 0.72rem; color: #34d399;">✓ API endpoint terhubung: https://sure.arcfoz.site</span>
      <span style="font-size: 0.72rem; color: #34d399;">✓ API Key terverifikasi</span>
      <span style="font-size: 0.72rem; color: #34d399;">✓ Tool pencatat transaksi aktif</span>
    </div>
    <p style="font-size: 0.75rem; color: #6ee7b7; margin: 8px 0 0 0;">Sekarang saya bisa mencatat transaksi kamu langsung ke dashboard. Coba kirim: <em style="color: #a7f3d0;">"Catat pengeluaran makan siang 25rb"</em></p>
  </div>
</div>

---

<!-- .slide: data-transition="slide" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 100%)" -->

## 📸 Demo: OpenClaw → Sure Finance

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 16px;">

<div style="background: rgba(234,179,8,0.06); border: 1px solid rgba(234,179,8,0.2); border-radius: 14px; padding: 16px; text-align: center;">
  <h3 style="color: #fbbf24; font-size: 1rem; margin-bottom: 12px;">📧 Email Mandiri</h3>
  <img src="/slides/src/sharing-2/2026-04-21_04-25.png" style="width: 100%; border-radius: 10px; border: 1px solid rgba(234,179,8,0.2);" />
</div>

<div style="background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 16px; text-align: center;">
  <h3 style="color: #34d399; font-size: 1rem; margin-bottom: 12px;">🐙 OpenClaw Response</h3>
  <img src="/slides/src/sharing-2/2026-04-21_04-11.png" style="width: 100%; border-radius: 10px; border: 1px solid rgba(16,185,129,0.2);" />
</div>

<div style="background: rgba(52,211,153,0.06); border: 1px solid rgba(52,211,153,0.2); border-radius: 14px; padding: 16px; text-align: center;">
  <h3 style="color: #6ee7b7; font-size: 1rem; margin-bottom: 12px;">💰 Sure Finance Result</h3>
  <img src="/slides/src/sharing-2/2026-04-21_04-13.png" style="width: 100%; border-radius: 10px; border: 1px solid rgba(52,211,153,0.2);" />
</div>

</div>

<div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.15); border-radius: 10px; padding: 12px 18px; margin-top: 14px;">
  <p style="font-size: 0.78rem; color: #94a3b8; margin: 0; line-height: 1.6;">💡 Karena sudah terintegrasi dengan OpenClaw, pengeluaran non-tunai pun bisa dicatat manual lewat chat — cukup ketik: <em style="color: #a7f3d0;">"pengeluaran 10k untuk parkir <strong style="color: #ecfdf5;">cash</strong>"</em></p>
</div>

---

<!-- .slide: data-transition="zoom" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 50%, #0d1412 100%)" class="center" -->

## 💰 Sure Finance Dashboard

<p style="color: #94a3b8; margin-bottom: 32px;">Lihat hasil pencatatan keuangan secara real-time</p>

<a href="https://sure.arcfoz.site" target="_blank" style="display: inline-flex; align-items: center; gap: 14px; background: linear-gradient(135deg, #059669, #10b981); color: #ecfdf5; text-decoration: none; padding: 18px 44px; border-radius: 16px; font-size: 1.2rem; font-weight: 700; box-shadow: 0 8px 40px rgba(16,185,129,0.35); letter-spacing: 0.01em;">
  <span>💰</span> Buka Sure Finance
</a>

<p style="color: #334155; font-size: 0.8rem; margin-top: 20px;">🔗 sure.arcfoz.site</p>

---

<!-- .slide: data-transition="zoom" data-background-gradient="linear-gradient(135deg, #0d1412 0%, #0f1f1b 50%, #0d1412 100%)" class="center" -->

# Terima Kasih


<div style="display: flex; gap: 12px; justify-content: center; margin-top: 36px">
  <span class="tech-badge">🤖 N8N</span>
  <span class="tech-badge">🐙 OpenClaw</span>
  <span class="tech-badge">💰 Sure Finance</span>
  <span class="tech-badge">🔒 Self-Hosted</span>
</div>
