'use client';
import { Button } from '@mui/material';

export default function HomePage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Next.js with Redux and Material-UI</h1>
      <p>This is a basic setup using the app directory and src structure.</p>
      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
    </main>
  );
}
