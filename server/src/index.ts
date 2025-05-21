// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4000;
// const API_KEY = process.env.OPENAI_API_KEY;

// app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the frontend
// app.use(express.json());

// app.post('/api/chat', async (req: Request, res: Response) => {
//   const { messages } = req.body;

//   try {
//     // Use dynamic import to handle ESM module
//     const fetch = await import('node-fetch').then((mod) => mod.default);

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch AI response');
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('OpenAI API error:', error);
//     res.status(500).json({ error: 'Failed to fetch AI response' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Tourist AI backend running at http://localhost:${PORT}`);
// });
