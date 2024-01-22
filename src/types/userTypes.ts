import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(data => /^\d{9,15}$/.test(data), {
    message: 'Numer telefonu musi zawierać od 9 do 15 cyfr.',
  }),
  postCode: z.string().refine(data => /^[0-9a-zA-Z\- ]+$/.test(data), {
    message: 'Kod pocztowy jest nieprawidłowy.',
  }),
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export type User = z.infer<typeof UserSchema>;
