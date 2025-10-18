import { User } from "../../store/authStore";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (userData: { email: string; password: string }) => {
  const res = await fetch('/api/register', {  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }

  return res.json();
};