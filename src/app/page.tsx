import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
// 引入品牌图标
import { SiCplusplus, SiPython, SiReact, SiNextdotjs, SiUnrealengine, SiTencentqq, SiSteam } from "react-icons/si"; 
import TypewriterTitle from "@/components/TypewriterTitle"; // 引入刚才写的打字机组件

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-zinc-800 selection:text-white font-mono">
      
      {/* 1. 顶部导航栏 */}
      <nav className="border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
           <span className="font-bold text-white tracking-widest">TY.</span>
           <div className="flex gap-6">
             <a href="#projects" className="hover:text-white transition-colors">Projects</a>
             <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
           </div>
        </div>
      </nav>

      {/* 2. Hero 区域 (像素字体 + 点阵) */}
      <div className="relative border-b border-zinc-900">
        <div className="h-80 w-full bg-grid-pattern flex items-center justify-center">
            {/* 使用 font-pixel 应用像素字体 */}
            <h1 className="text-7xl md:text-9xl text-white font-[family-name:var(--font-pixel)] select-none opacity-90">
              YE
            </h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* 头像与名字 */}
        <div className="relative -mt-20 mb-12 flex flex-col md:flex-row items-end gap-8">
          <div className="relative w-40 h-40 rounded-full border-4 border-[#050505] bg-zinc-800 overflow-hidden shrink-0 shadow-2xl">
             <Image src="/avatar.jpg" alt="Avatar" fill className="object-cover" />
          </div>
          
          <div className="mb-4 w-full">
             <div className="flex items-center gap-3">
               <h1 className="text-4xl font-bold text-white tracking-tight">Tian Ye</h1>
               <svg className="w-6 h-6 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
             </div>
             {/* 插入打字机组件 */}
             <TypewriterTitle />
          </div>
        </div>

        {/* 终端框 (保持你之前的样子，稍微美化) */}
        <div className="mb-20 bg-black border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-xs text-zinc-500">zsh — 80x24</span>
          </div>
          <div className="p-6 text-sm space-y-2">
            <div className="flex gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-100">$ cd maxytian</span>
            </div>
            <div className="text-zinc-500 text-xs py-2">Entered directory /home/users/maxytian</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
               <InfoItem label="Role" value="Game Programmer @ Tencent" icon={<SiTencentqq />} />
               <InfoItem label="Stack" value="C++, Python, Unreal Engine" icon={<SiUnrealengine />} />
               <InfoItem label="Location" value="Shanghai, China" />
               <InfoItem label="Email" value="spockstan@gmail.com" />
            </div>
          </div>
        </div>

        {/* 3. About Section */}
        <Section title="About">
          <p className="leading-relaxed text-zinc-400 max-w-3xl">
            Hello! I'm Tian Ye, a <span className="text-white font-medium">Game Programmer</span> currently working at Tencent. 
            I have a passion for low-level systems, graphics programming, and building immersive virtual worlds.
            <br /><br />
            With 3 years of experience in C++ and Python, I focus on performance optimization and engine architecture. 
            I'm currently diving deep into <span className="text-white font-medium">Unreal Engine 5</span> source code.
          </p>
        </Section>

        {/* 4. Tech Stack (图标墙) */}
        <Section title="Stack">
          <div className="flex flex-wrap gap-8 text-4xl text-zinc-600">
            <SiCplusplus className="hover:text-[#00599C] transition-colors" title="C++" />
            <SiPython className="hover:text-[#3776AB] transition-colors" title="Python" />
            <SiUnrealengine className="hover:text-white transition-colors" title="Unreal" />
            <SiReact className="hover:text-[#61DAFB] transition-colors" title="React" />
            <SiNextdotjs className="hover:text-white transition-colors" title="Next.js" />
            <SiSteam className="hover:text-[#171a21] transition-colors" title="Steamworks" />
          </div>
        </Section>

        {/* 5. Blogs (缩略图风格) */}
        <Section title="Blogs" id="blogs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BlogCard 
              title="Understanding Move Semantics in C++"
              desc="A deep dive into lvalues, rvalues, and how std::move actually works under the hood."
              date="Oct 2025"
              readTime="8 min read"
            />
            <BlogCard 
              title="Building My Portfolio with Next.js"
              desc="Why I switched from WordPress to a custom React stack for my personal site."
              date="Feb 2026"
              readTime="5 min read"
            />
          </div>
        </Section>

        {/* 6. Contact Section */}
        <Section title="Contact" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <ContactLink icon={<Linkedin size={20} />} label="LinkedIn" handle="Tian Ye" href="#" />
             <ContactLink icon={<Github size={20} />} label="GitHub" handle="maxytian" href="#" />
             <ContactLink icon={<Twitter size={20} />} label="Twitter" handle="@maxytian" href="#" />
             <ContactLink icon={<Mail size={20} />} label="Email" handle="spockstan@gmail.com" href="mailto:spockstan@gmail.com" />
          </div>
        </Section>

      </main>
    </div>
  );
}

// --- 下面是封装好的子组件，保持页面代码整洁 ---

function Section({ title, children, id }: { title: string; children: React.ReactNode, id?: string }) {
  return (
    <section id={id} className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        {title} <div className="h-px bg-zinc-800 flex-1"></div>
      </h2>
      {children}
    </section>
  );
}

function InfoItem({ label, value, icon }: any) {
  return (
    <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
       {icon ? <span className="text-lg">{icon}</span> : <span className="w-4 h-4 rounded-full bg-zinc-800"></span>}
       <span className="text-zinc-500 w-16">{label}</span>
       <span className="text-zinc-200">{value}</span>
    </div>
  );
}

function BlogCard({ title, desc, date, readTime }: any) {
  return (
    <a href="#" className="block p-6 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all group">
       <div className="flex justify-between items-start mb-4">
         <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📄</div>
         <span className="text-xs text-zinc-500 font-mono">{date}</span>
       </div>
       <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
       <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">{desc}</p>
       <div className="text-xs text-zinc-600 font-mono flex items-center gap-2">
         <span>{readTime}</span>
         <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
         <span>Tech</span>
       </div>
    </a>
  );
}

function ContactLink({ icon, label, handle, href }: any) {
  return (
    <a href={href} target="_blank" className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors group">
       <div className="flex items-center gap-4">
         <span className="text-zinc-400 group-hover:text-white transition-colors">{icon}</span>
         <div>
           <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{label}</div>
           <div className="text-sm text-zinc-300">{handle}</div>
         </div>
       </div>
       <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
    </a>
  );
}