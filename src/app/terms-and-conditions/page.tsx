
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${APP_NAME}`,
  description: `Terms and Conditions for ${APP_NAME}.`,
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity (“you”) and {APP_NAME} (“we,” “us” or “our”), concerning
            your access to and use of the {APP_NAME} website as well as any other media form, media channel,
            mobile website or mobile application related, linked, or otherwise connected thereto
            (collectively, the “Site”).
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all
            of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then
            you are expressly prohibited from using the Site and you must discontinue use immediately.
          </p>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
            functionality, software, website designs, audio, video, text, photographs, and graphics on the
            Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein
            (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright
            and trademark laws and various other intellectual property rights and unfair competition laws of
            India, foreign jurisdictions, and international conventions.
          </p>
          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary...</p>
          <h2>4. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <h2>5. Term and Termination</h2>
          <p>These Terms and Conditions shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON...</p>
          <h2>6. Governing Law</h2>
          <p>These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of India applicable to agreements made and to be entirely performed within India, without regard to its conflict of law principles.</p>
          <h2>7. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: swapnadeep8888@gmail.com or by post to: [Your Company Address, City, Postal Code, Country].</p>
        </CardContent>
      </Card>
    </div>
  );
}
