import Header from './../components/Header';
import WorkItem from './../components/WorkItem';

import amazon from './../images/work images/Amazon.jpg';
import fidelity from './../images/work images/Fidelity.png';
import umass from './../images/work images/UMass Crest.png';
import sharon_rec from './../images/work images/Sharon Crest.jpg';
import ncls from './../images/work images/NCLS Crest.png';

export default function Work() {
    return (
        <body class="work-body">
            <Header
                link="./../"
                text="Work"
            />

            <div class="gallery">
                <WorkItem 
                    title="SDE Intern"
                    duration="Summer 2021"
                    description="Incoming SDE Intern at the East Palo Alto location!"
                    image={amazon}
                />
                <WorkItem 
                    title="LEAP Full-stack Intern"
                    duration="Jun 2020 - Aug 2020"
                    description="Full-stack software engineering intern at Fidelity Investments. Worked on automating squad tasks and developing an Outlook add-on for company associates."
                    image={fidelity}
                />
                <WorkItem 
                    title="Undergraduate Course Assistant"
                    duration="Jan 2020 - Present"
                    description="UCA for Algorithms (Fall 2020), Data Structures (Spring 2020), and Statistics (Spring 2021)"
                    image={umass}
                />
                <WorkItem 
                    title="Sailing Supervisor, Instructor"
                    duration="Aug 2014 - Aug 2019"
                    description="Supervisor and instructor for the sailing programs at the Sharon Recreation Department"
                    image={sharon_rec}
                />
                <WorkItem 
                    title="Teacher Assistant"
                    duration="Sep 2015 - May 2017"
                    description="TA at the Newton Chinese Language School for middle school Mathematics and Mandarin"
                    image={ncls}
                />
            </div>
        </body>
    )
}