/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true, // データ取得時にキャッシュがヒットしたかをターミナルで確認できる
    },
  },
};

export default nextConfig;
