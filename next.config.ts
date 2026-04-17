import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/**'
      ),
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
