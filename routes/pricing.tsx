/*
 * @Date: 2023-02-21 01:24:24
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 13:20:03
 * @FilePath: /www-main/routes/send.tsx
 */
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";
import { Translation } from "../i18n/types.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


export default function Pricing(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>sking - Full Stack Web Developer</title>
        <meta
          name="description"
          content="sking - Full Stack Web Developer - Portfolio"
        />
      </Head>
      <Header active="/pricing" />
      <main class="mx-auto mt-12 max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-6">
          <section>
            <p>Last updated: 11/20/2023</p>

            <p>Welcome to my blog. This privacy policy explains how we collect, use, and share information when you
              visit our website.</p>

            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our service
              to you.</p>

            <h3>Types of Data Collected</h3>
            <ul>
              <li><strong>Personal Data:</strong> While using our website, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you ("Personal Data").
              </li>
              <li><strong>Usage Data:</strong> We may also collect information on how the website is accessed and used
                ("Usage Data"). This Usage Data may include information such as your computer's IP address, browser
                type, browser version, the pages you visit, the time and date of your visit, the time spent on those
                pages, and other diagnostic data.</li>
              <li><strong>Cookies Data:</strong> We use cookies and similar tracking technologies to track activity on
                our website and hold certain information. Cookies are files with a small amount of data which may
                include an anonymous unique identifier.</li>
            </ul>

            <h2>Use of Data</h2>
            <p>Click A Joke uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our website</li>
              <li>To allow you to participate in interactive features of our website when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Google AdSense & Third-Party Privacy Policies</h2>
            <p>Our website uses Google AdSense to serve ads. Google's use of advertising cookies enables it and its
              partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </p>

            <h2>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Click
              A Joke aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
              Personal Data.</p>
            <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
              systems, please contact us. In certain circumstances, you have the following data protection rights:</p>
            <ul>
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification. You have the right to have your information rectified if that
                information is inaccurate or incomplete.</li>
              <li>The right to object. You have the right to object to our processing of your Personal Data.</li>
              <li>The right of restriction. You have the right to request that we restrict the processing of your
                personal information.</li>
              <li>The right to data portability. You have the right to be provided with a copy of the information we
                have on you in a structured, machine-readable, and commonly used format.</li>
              <li>The right to withdraw consent. You also have the right to withdraw your consent at any time where
                Click A Joke relied on your consent to process your personal information.</li>
            </ul>

            <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

            <h2>Children's Privacy</h2>
            <p>Our website does not address anyone under the age of 18 ("Children"). We do not knowingly collect
              personally identifiable information from anyone under the age of 18. If you are a parent or guardian and
              you are
              of the European Economic Area (EEA), you have certain data protection rights. Click A Joke aims to take
              reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <ul>
              <li><strong>The right to access, update or to delete</strong> the information we have on you.</li>
              <li><strong>The right of rectification</strong>. You have the right to have your information rectified
                if that information is inaccurate or incomplete.</li>
              <li><strong>The right to object</strong>. You have the right to object to our processing of your
                Personal Data.</li>
              <li><strong>The right of restriction</strong>. You have the right to request that we restrict the
                processing of your personal information.</li>
              <li><strong>The right to data portability</strong>. You have the right to be provided with a copy of the
                information we have on you in a structured, machine-readable, and commonly used format.</li>
              <li><strong>The right to withdraw consent</strong>. You also have the right to withdraw your consent at
                any time where Click A Joke relied on your consent to process your personal information.</li>
            </ul>
            <p>Please note that we may ask you to verify your identity before responding to such requests.</p>
            <h2>Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally
              identifiable information from anyone under the age of 13. If you are a parent or guardian and you are
              aware that your Children have provided
              us with Personal Data, please contact us. We take steps to remove that information from our servers
              and/or obtain parental consent as required by law.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: shijianzhong521@gmail.com</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
