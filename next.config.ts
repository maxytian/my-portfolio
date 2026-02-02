import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 开启静态导出，生成 out 文件夹
  images: {
    unoptimized: true, // 静态导出不支持 Next.js 默认的图片优化服务，需关闭
  },
  reactCompiler: true,
};

export default nextConfig;
