
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Introduction</h2>
          <p>
            Welcome to {APP_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your
            personal information and your right to privacy. If you have any questions or concerns about this
            privacy notice, or our practices with regards to your personal information, please contact us.
          </p>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the
            {APP_NAME}, express an interest in obtaining information about us or our products and services,
            when you participate in activities on the {APP_NAME} or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and
            the {APP_NAME}, the choices you make and the products and features you use. The personal
            information we collect may include the following: Name, Email Address, Phone Number, Payment
            Information, etc.
          </p>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our {APP_NAME} for a variety of business purposes
            described below. We process your personal information for these purposes in reliance on our
            legitimate business interests, in order to enter into or perform a contract with you, with your
            consent, and/or for compliance with our legal obligations.
          </p>
          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services,
            to protect your rights, or to fulfill business obligations.
          </p>
          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this
            privacy notice unless otherwise required by law.
          </p>
          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical
            security measures.
          </p>
          <h2>7. What Are Your Privacy Rights?</h2>
          <p>
            In some regions (like the European Economic Area and the UK), you have certain rights under
            applicable data protection laws. These may include the right (i) to request access and obtain a
            copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict
            the processing of your personal information; and (iv) if applicable, to data portability.
          </p>
          <h2>8. Updates to This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an
            updated &quot;Last updated&quot; date and the updated version will be effective as soon as it is
            accessible.
          </p>
          <h2>9. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at swapnadeep8888@gmail.com
            or by post to: [Your Company Address, City, Postal Code, Country].
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
