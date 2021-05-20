import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Privacy Policy
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-4">


            <h3>GDPR</h3>
            <p>
              I also use Google Adsense and Google Analytics, which collects various data on you
              too. Via Google Analytics, I have opted for the lowest user and event data retention
              available on their platform, which is 14 months. More info on data retention:
              https://support.google.com/analytics/answer/7667196?authuser=0.
            </p>

            <p>Also, via google analytics, IPs are anonymized.</p>

            <h4>How long your data is retained:</h4>
            <ol>
              <li>
                All of the above data is retained indefinitely (except for Google Analytics and
                Google Adsense, I really cannot speak to their full practices, just that I chose the
                14-month retention in Google Analytics), unless otherwise requested in writing.
              </li>
              <li>
                <p>
                  Within Google Analytics, I have set the data retention to 14 months, and to reset
                  on new activity. So, data stored via Google Analytics is removed 14 months
                  automatically after you *stop* using the website. If you continue to use the
                  website, then the data's expiration renews to be the CURRENT time, plus 14 months.
                </p>
              </li>
            </ol>

            <h4>Who we share your data with?</h4>
            <ol>
              <li>
                To monetize the website, I make use of Google Adsense, which uses tracking cookies,
                tracking its own data on you.
              </li>
              <li>
                The data found under the above "Personal data collected, and why!" section is not
                shared with any other entities, except in the case of a PayPal transaction where we
                compare details of the transaction on our end with PayPal's details of that same
                transaction to confirm its legitimacy.
              </li>
            </ol>

            <h4>What are my rights with my data??</h4>
            <ol>

              <li>
                If you want all of your data permanently scrubbed, deleted, never to be seen again
                from the website...make a request to 00shxf@gmail.com  for this
                service.
              </li>
            </ol>

            <p>Resuming the original privacy policy: </p>

            <p>
              PythonProgramming ("us", "we", or "our") operates the http://pythonstuff.com
              website (the "Service").
            </p>

            <p>
              This page informs you of our policies regarding the collection, use and disclosure of
              Personal Information when you use our Service.
            </p>

            <p>
              We will not use or share your information with anyone except as described in this
              Privacy Policy.
            </p>

            <p>
              <strong>
                We use your Personal Information for providing and improving the Service. By using
                the Service, you agree to the collection and use of information in accordance with
                this policy.
              </strong>
            </p>

            <p>
              <strong>Information Collection And Use</strong>
            </p>


            <p>
              We collect this information for the purpose of providing the Service, identifying and
              communicating with you, responding to your requests/inquiries, servicing your purchase
              orders, and improving our services.
            </p>

            <p>
              <strong>Log Data</strong>
            </p>

            <p>
              We collect information that your browser sends whenever you visit our Service ("Log
              Data"). This Log Data may include information such as your computer's Internet
              Protocol ("IP") address, browser type, browser version, the pages of our Service that
              you visit, the time and date of your visit, the time spent on those pages and other
              statistics.
            </p>

            <p>
              In addition, we may use third party services such as Google Analytics that collect,
              monitor and analyze this type of information in order to increase our Service's
              functionality. These third party service providers have their own privacy policies
              addressing how they use such information.
            </p>

            <p>
              <strong>Cookies</strong>
            </p>

            <p>
              Cookies are files with a small amount of data, which may include an anonymous unique
              identifier. Cookies are sent to your browser from a web site and transferred to your
              device. We use cookies to collect information in order to improve our services for
              you.
            </p>

            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is
              being sent. The Help feature on most browsers provide information on how to accept
              cookies, disable cookies or to notify you when receiving a new cookie.
            </p>

            <p>
              If you do not accept cookies, you may not be able to use some features of our Service
              and we recommend that you leave them turned on.
            </p>

            <p>
              <strong>DoubleClick Cookie</strong>
            </p>

            <p>
              Google, as a third party vendor, uses cookies to serve ads on our Service. Google's
              use of the DoubleClick cookie enables it and its partners to serve ads to our users
              based on their visit to our Service or other web sites on the Internet.
            </p>

            <p>
              You may opt out of the use of the DoubleClick Cookie for interest-based advertising by
              visiting the{' '}
              <a
                href="http://www.google.com/ads/preferences/"
                title="Google Ads Settings"
                rel="nofollow"
              >
                Google Ads Settings
              </a>{' '}
              web page.
            </p>

            <p>
              <strong>Do Not Track Disclosure</strong>
            </p>
            <p>
              We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in
              your web browser to inform websites that you do not want to be tracked.
            </p>
            <p>
              You can enable or disable Do Not Track by visiting the Preferences or Settings page of
              your web browser.
            </p>

            <p>
              <strong>Service Providers</strong>
            </p>

            <p>
              We may employ third party companies and individuals to facilitate our Service, to
              provide the Service on our behalf, to perform Service-related services and/or to
              assist us in analyzing how our Service is used.
            </p>

            <p>
              These third parties have access to your Personal Information only to perform specific
              tasks on our behalf and are obligated not to disclose or use your information for any
              other purpose.
            </p>

            <p>
              <strong>Communications</strong>
            </p>

            <p>
              We may use your Personal Information to contact you with newsletters, marketing or
              promotional materials and other information that may be of interest to you. You may
              opt out of receiving any, or all, of these communications from us by contacting us.
            </p>

            <p>
              <strong>Compliance With Laws</strong>
            </p>

            <p>
              We will disclose your Personal Information where required to do so by law or subpoena
              or if we believe that such action is necessary to comply with the law and the
              reasonable requests of law enforcement or to protect the security or integrity of our
              Service.
            </p>

            <p>
              <strong>Security</strong>
            </p>

            <p>
              The security of your Personal Information is important to us, and we strive to
              implement and maintain reasonable, commercially acceptable security procedures and
              practices appropriate to the nature of the information we store, in order to protect
              it from unauthorized access, destruction, use, modification, or disclosure.
            </p>

            <p>
              However, please be aware that no method of transmission over the internet, or method
              of electronic storage is 100% secure and we are unable to guarantee the absolute
              security of the Personal Information we have collected from you.
            </p>

            <p>
              <strong>International Transfer</strong>
            </p>

            <p>
              Your information, including Personal Information, may be transferred to - and
              maintained on - computers located outside of your state, province, country or other
              governmental jurisdiction where the data protection laws may differ than those from
              your jurisdiction.
            </p>

            <p>
              If you are located outside United States and choose to provide information to us,
              please note that we transfer the information, including Personal Information, to
              United States and process it there.
            </p>

            <p>
              Your consent to this Privacy Policy followed by your submission of such information
              represents your agreement to that transfer.
            </p>

            <p>
              <strong>Links To Other Sites</strong>
            </p>

            <p>
              Our Service may contain links to other sites that are not operated by us. If you click
              on a third party link, you will be directed to that third party's site. We strongly
              advise you to review the Privacy Policy of every site you visit.
            </p>

            <p>
              We have no control over, and assume no responsibility for the content, privacy
              policies or practices of any third party sites or services.
            </p>

            <p>
              <strong>Children's Privacy</strong>
            </p>

            <p>
              Only persons age 18 or older have permission to access our Service, or if a legal
              guardian or parent of the user gives consent. Our Service does not address anyone
              under the age of 13 ("Children").
            </p>

            <p>
              We do not knowingly collect personally identifiable information from children under
              13. If you are a parent or guardian and you learn that your Children have provided us
              with Personal Information, please contact us. If we become aware that we have
              collected Personal Information from a children under age 13 without verification of
              parental consent, we take steps to remove that information from our servers.
            </p>

            <p>
              <strong>Changes To This Privacy Policy</strong>
            </p>

            <p>
              This Privacy Policy is effective as of May 22, 2021 and will remain in effect
              except with respect to any changes in its provisions in the future, which will be in
              effect immediately after being posted on this page.
            </p>

            <p>
              We reserve the right to update or change our Privacy Policy at any time and you should
              check this Privacy Policy periodically. Your continued use of the Service after we
              post any modifications to the Privacy Policy on this page will constitute your
              acknowledgment of the modifications and your consent to abide and be bound by the
              modified Privacy Policy.
            </p>

            <p>
              If we make any material changes to this Privacy Policy, we will notify you either
              through the email address you have provided us, or by placing a prominent notice on
              our website.
            </p>

            <p>
              <strong>Contact Us</strong>
            </p>

            <p>
              If you have any questions about this Privacy Policy, please contact
              00shxf@gmail.com .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
