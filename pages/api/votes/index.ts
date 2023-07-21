import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { code } from '../../../lib/code';
import { notEqual } from 'assert';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  // Create New Votes
  if (req.method === 'POST') {
    const result = await prisma.votes.create({
      data: {
        title: req.body.title,
        candidates: req.body.candidates,
        startDateTime: req.body.startDate,
        endDateTime: req.body.endDate,
        publisher: req.body.publisher,
        code: code(6),
        deletedAt: null,
      },
    });

    return res.json(result);
  }

  // Get All Votes by User
  else if (req.method === 'GET') {
    const result = await prisma.votes.findMany({
      where: {
        AND: [{ deletedAt: null }, { publisher: session.user.email }],
      },
    });

    const response = {
      status: 200,
      data: result,
    };
    return res.json(response);
  }

  // Update Votes
  else if (req.method === 'PUT') {
    const result = await prisma.votes.update({
      where: {
        code: req.body.code,
      },
      data: {
        candidates: req.body.candidates,
        endDateTime: req.body.endDate,
        startDateTime: req.body.startDate,
        title: req.body.title,
      },
    });

    return res.json(result);
  }

  return res.status(400).json('Method not allowed.');
}
