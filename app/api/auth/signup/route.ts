import db from '@/lib/db';

export default async (req : any, res : any) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    const sql = 'INSERT INTO users (username, email, password, RegistrationDate) VALUES (?, ?, ?, CURRENT_TIMESTAMP)';
    db.query(sql, [name, email, password], (err: any, result: any) => {
      if (err) {
        console.error('Registration failed:', err);
        res.status(500).json({ message: 'Registration failed' });
      } else {
        console.log('Registration successful');
        res.status(200).json({ message: 'Registration successful' });
      }
    });
  } else {
    res.status(405).end();
  }
};
