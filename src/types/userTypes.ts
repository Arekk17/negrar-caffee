import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})
export const UserRegistrationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNu: z.string(),
  password: z.string().min(8),
});

export const UserDataSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  street: z.string(),
  country: z.string(),
  zipCode: z.string(),
});
export type UserSignInType = z.infer<typeof SignInFormSchema>
export type UserDataType = z.infer<typeof UserDataSchema>;
export type UserRegistrationType = z.infer<typeof UserRegistrationSchema>;