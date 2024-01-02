import { z, ZodType } from 'zod';

export const UserSchema: ZodType<{ id: number; name: string; email: string; phoneNumber: string }> = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(data => /^\d{9,15}$/.test(data), {
    message: 'Numer telefonu musi zawierać od 9 do 15 cyfr.',
  }),
});
