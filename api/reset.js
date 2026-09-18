import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await redis.del("participants");
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Redis error:', error);
        return res.status(500).json({ error: 'Failed to clear database', details: error.message || String(error) });
    }
}
