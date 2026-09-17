import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { clientId, originalName, nickname, answers } = req.body;
    
    if (!clientId || !answers) {
        return res.status(400).json({ error: 'Missing clientId or answers' });
    }

    try {
        const participantData = {
            participant_id: clientId,
            original_name: originalName,
            nickname: nickname,
            answers: answers
        };
        await redis.hset("participants", { [clientId]: JSON.stringify(participantData) });
        return res.status(200).json({ success: true, clientId });
    } catch (error) {
        console.error('Redis error:', error);
        return res.status(500).json({ error: 'Failed to save to database' });
    }
}
