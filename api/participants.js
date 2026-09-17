import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = await redis.hgetall("participants");
        
        const parsedData = {};
        if (data) {
            for (const [key, value] of Object.entries(data)) {
                parsedData[key] = typeof value === 'string' ? JSON.parse(value) : value;
            }
        }
        
        return res.status(200).json(parsedData);
    } catch (error) {
        console.error('Redis error:', error);
        return res.status(500).json({ error: 'Failed to retrieve database' });
    }
}
