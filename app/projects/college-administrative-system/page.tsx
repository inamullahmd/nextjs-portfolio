import { ArticleLayout } from "@/components/ArticleLayout";
import { type Article } from "@/lib/articles";

const article: Article = {
    author: 'Inamullah Mohammad',
    date: '2020-02-01',
    title: 'College Administrative System',
    description:
      "We have developed a fully functional website to automate our college&lsquo;s day-to-day activities, including admissions, attendance, examinations, results, invigilations, and fees. We utilized Java Server Pages (JSP) along with a MySQL database and employed web technologies such as HTML, CSS, JavaScript, AJAX, jQuery, and Bootstrap.",
    href: 'college-administrative-system',
    formattedDate: 'February, 2020'
}

export default function CollegeAdministrativeSystem() {
    return (
      <ArticleLayout article={article}>
        <div>
          {/* <p>
          My friend and I developed the <code>College Administrative System</code> for Dhanekula Institute of Engineering & Technology to help automate and streamline the college's daily administrative and academic tasks. We designed this system to meet the needs of the college&lsquo;s management, lecturers, and students. By working closely with these groups, we made sure the system covered important areas like admissions, academics, attendance, exams, and fee management. This project shows our dedication to innovation and technical quality in the education sector.
          </p>
            <p>We initiated this project at the end of our sophomore year, driven by the limitations of a generic automation portal used by multiple colleges in our region. Recognizing its lack of flexibility to meet our college's specific needs, we embarked on building a new, tailored automation portal. To start, we engaged stakeholders—principal, lecturers, management, and students—to gather requirements, which guided the development of a comprehensive plan.</p>
            <p>Our approach involved developing the portal module by module, aiming to replicate all previous functionality while adding features to address our unique needs. Challenges arose during the initial phases, particularly regarding the complex data structure of the older system. Ultimately, we chose not to integrate it due to its complexity, opting instead to maintain snapshots of its data for potential future use.</p>
            <p>Testing the portal posed another significant challenge. We conducted thorough testing by having faculty and management perform tasks in the portal and manually, comparing the results to ensure accuracy. This testing process was repeated for each module, with many students also actively participating in testing functionalities relevant to them.</p>
            <p>One of my key contributions was the development of an attainment module, crucial for assessing and quantifying student achievement in specific subjects or courses. This module was particularly complex, requiring nearly six months to complete. The most challenging aspect was implementing intricate calculations that, if done manually, would have required several hundred Excel sheets. Converting these calculations into code was a time-consuming process.</p>
            <p>Additionally, we implemented a PDF uploading feature using the <code>PDFBox</code> library to read PDFs, extract data, and upload it into the database, adding a valuable functionality to the portal.</p>
            <p>Through this project, I have learned an immense amount about software development, project management, and collaboration. The challenges we faced, particularly in handling complex data structures and ensuring accurate functionality, have sharpened my problem-solving skills and deepened my understanding of coding principles.</p>
            <p>As our automation portal continues to be actively used at our college, I am proud that our efforts have left a lasting legacy. It not only meets our college's specific needs but also serves as a testament to our dedication and innovation. I am confident that the skills and knowledge gained from this project will continue to benefit me in future endeavors, and I am excited to see how our work will continue to impact our college community.</p> */}

            <p>
              Over the course of two years, my friend and I took on the significant challenge of creating a custom <code>College Administrative System</code> for Dhanekula Institute of Engineering & Technology. 
              This system was built to automate and simplify the college&lsquo;s daily administrative and academic tasks, serving the needs of management, lecturers, and students. 
              Our goal was to go beyond the limitations of the generic automation portals used by other colleges and create a solution that perfectly met the specific needs of our institution.
            </p>
            <p>
              We started this project during our sophomore year, driven by the frustration of working with a rigid, one-size-fits-all system that wasn&lsquo;t flexible enough for our college. 
              We worked closely with key stakeholders—our principal, lecturers, management, and students—to gather their requirements and develop a detailed plan that addressed their needs.
            </p>
            <p>
              We used a range of technologies to bring this vision to life, including 
              <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>, <code>AJAX</code>, <code>JQuery</code>, and <code>Bootstrap</code> for the front-end, while <code>MySQL</code> was used for the database. 
              The back-end was developed using <code>Java</code> and <code>JSP</code>, all built within the <code>NetBeans IDE</code> and deployed on the <code>Apache Tomcat Server</code>.
            </p>
            <p>
              The system was developed module by module, replicating the functionality of the old system while also adding new features. 
              One of the biggest challenges was dealing with the complexity of the previous system&lsquo;s data. 
              After careful consideration, we decided to maintain snapshots of this data instead of directly integrating it.
            </p>
            <p>
              Testing was a critical part of the project. 
              We had faculty and management test the portal alongside their manual processes to ensure everything was accurate. 
              We repeated this process for each module, with students also actively participating to ensure that the system worked for everyone.
            </p>
            <p>
              One of my key contributions was developing the <code>attainment module</code>, which was used to assess student performance in various courses. 
              This module was the most complex part of the project and took nearly six months to complete. 
              The hardest part was converting hundreds of manual calculations, previously done on dozens of Excel sheets, into automated code. 
              This process saved an enormous amount of time for both faculty and administrators.
            </p>
            <p>
              Additionally, we implemented a PDF uploading feature using the <code>PDFBox</code> library, allowing the system to read, extract, and store data from PDFs directly into the database, adding another layer of functionality.
            </p>
            <p>
              Throughout this project, I learned a tremendous amount about software development, problem-solving, and project management. 
              Handling complex data structures, ensuring accurate functionality, and managing the various technologies taught me valuable lessons that will serve me well in the future.
            </p>
            <p>
              Our College Administrative System is now actively used by the Dhanekula community, meeting the specific needs of our college while showcasing our hard work and dedication. 
              This project stands as a lasting testament to our skills and the impact we&lsquo;ve had on our college. 
              I am proud of the journey we took and confident that the skills and knowledge I gained from this experience will benefit me in my future endeavors.
            </p>
        </div>
      </ArticleLayout>
    )
  }