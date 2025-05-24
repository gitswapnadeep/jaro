
import type { Metadata } from 'next';
import { SignUpForm } from '@/components/auth/sign-up-form';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Create Account | ${APP_NAME}`,
  description: `Create a new account with ${APP_NAME}.`,
};

export default function SignUpPage() {
  return <SignUpForm />;
}
