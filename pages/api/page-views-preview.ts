import {connectToDatabase} from '@/config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  const slug = req.query.id; 
  
  if(!slug) return res.json("Página não encontrada!")

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {
    const pageViewBySlug = await db
    .collection("pageviews")
    .findOne({ slug })

  let total = 0;
  if(pageViewBySlug) {
    total = pageViewBySlug.total;
  }
   
  return res.status(200).json({ total })
    
  }

  return res.status(500).json({ error: 'client DB is not connected' })

}
