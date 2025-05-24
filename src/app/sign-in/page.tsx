
import type { Metadata } from 'next';
import { SignInForm } from '@/components/auth/sign-in-form';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Sign In | ${APP_NAME}`,
  description: `Sign in to your ${APP_NAME} account.`,
};

export default function SignInPage() {
  return <SignInForm />;
}
