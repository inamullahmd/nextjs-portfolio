import { ArticleLayout } from "@/components/ArticleLayout";
import { type Article } from "@/lib/articles";

const article: Article = {
    author: 'Inamullah Mohammad',
    date: '2018-09-01',
    title: 'College Fest Website',
    description:
      "We developed a dynamic and user-friendly college fest website that enables participants to register for various events and make payments online or offline, while also offering extensive reporting capabilities, including financial reports, participant data tracking, winner lists, and more detailed insights.",
    href: 'college-fest-website',
    formattedDate: 'September, 2018'
}

export default function CollegeAdministrativeSystem() {
    return (
      <ArticleLayout article={article}>
        <div>
            <p>
              We developed a showcase website for our college&lsquo;s annual fest to centralize all event-related information and enhance user interaction. 
              This platform provides comprehensive details about each event, including schedules, venues, and the contact information of departmental, student, and technical coordinators. 
              By integrating this information into one accessible location, we aimed to streamline the process for participants and ensure they have all the necessary details at their fingertips.
            </p>
            <p>
              The website features a user-friendly event registration system that allows participants to easily sign up for any event they choose. 
              Users can select their desired events and complete their registration seamlessly. 
              To accommodate different payment preferences, we implemented options for both online and offline payments. 
              Participants can use UPI for secure online transactions or choose to pay at the college before the event, catering to various user needs and ensuring a flexible payment process.
            </p>
            <p>
              Our technical stack included <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>, and <code>Bootstrap</code> for the front-end, which ensured a responsive and visually appealing design that adapts to different devices. 
              <code>Java Server Pages (JSP)</code> were utilized for the back-end to manage server-side operations and dynamic content. 
              We chose <code>MySQL</code> as the database solution to handle participant data, event registrations, and payment information efficiently, supporting the website&lsquo;s functionality and security.
            </p>
            <p>
              The website also includes advanced reporting features for fest organizers. 
              It generates detailed reports covering aspects such as event participation, financial summaries, and winner lists. 
              These reports provide valuable insights for managing the fest, helping organizers track and evaluate various components effectively.
            </p>
        </div>
      </ArticleLayout>
    )
  }