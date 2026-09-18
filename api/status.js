import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const lastReset = await redis.get("global_reset") || "0";
        return res.status(200).json({ global_reset: lastReset });
    } catch (error) {
        console.error('Redis error:', error);
        return res.status(500).json({ error: 'Failed to fetch status', details: error.message || String(error) });
    }
}
