import React from "react";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";
import { Container } from "react-bootstrap";
import styles from "./App.module.scss";
import Header from "./components/form/header";
import { Row, Col } from "react-bootstrap";
import cvTemplate from "../src/assests/resume-template-1.jpg";

function App() {
  const data = {
    education: [
      {
        degree: "Master of Science (MSc)",
        fieldOfStudy: "Computer Science",
        notes:
          "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
        schoolName: "University College London",
        startDate: {
          year: 2012,
        },
        endDate: {
          year: 2013,
        },
      },
      {
        degree: "Bachelor of Engineering (BEng)",
        fieldOfStudy: "Material Science and Engineering",
        notes:
          "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
        schoolName: "Imperial College London",
        startDate: {
          year: 2009,
        },
        endDate: {
          year: 2012,
        },
      },
    ],
    experiences: [
      {
        isCurrent: true,
        summary:
          "Full-stack developer working with Angular and Java. Working for the iShares platform",
        title: "Associate Software Developer",
        startDate: {
          month: 11,
          year: 2017,
        },
        company: {
          name: "BlackRock",
        },
      },
      {
        isCurrent: false,
        summary:
          "Full-stack developer working with Angular, Node and TypeScript. Working for the iShares platform. Emphasis on Dev-ops and developing the continous integration pipeline.",
        title: "Software Developer",
        endDate: {
          month: 11,
          year: 2017,
        },
        startDate: {
          month: 10,
          year: 2016,
        },
        company: {
          name: "Torch Markets",
        },
      },
      {
        isCurrent: false,
        summary:
          "Used ASP.NET MVC 5 to produce a diversity data collection tool for the future of British television.\n\nUsed AngularJS and C# best practices. Technologies used include JavaScript, ASP.NET MVC 5, SQL, Oracle, SASS, Bootstrap, Grunt.",
        title: "Software Developer",
        endDate: {
          month: 10,
          year: 2016,
        },
        startDate: {
          month: 3,
          year: 2015,
        },
        company: {
          name: "Soundmouse",
        },
      },
      {
        isCurrent: false,
        summary:
          "Develop web commerce platforms for various high profile clients.\n\nCreated a log analysis web application with the Play Framework in Java, incorporating Test Driven Development. It asynchronously uploads and processes large (2 GB) log files, and outputs meaningful results in context with the problem. \n\nAnalysis  and  development  of  the payment system infrastructure and user accounts section to be used by several clients of the company such as Waitrose, Tally Weijl, DJ Sports, Debenhams, Ann Summers, John Lewis and others.\n\nTechnologies used include WebSphere Commerce, Java, JavaScript and JSP.",
        title: "Java Developer",
        endDate: {
          month: 10,
          year: 2014,
        },
        startDate: {
          month: 3,
          year: 2013,
        },
        company: {
          name: "Soundmouse",
        },
      },
    ],
    skills: [
      {
        name: "Angular",
      },
      {
        name: "TypeScript",
      },
      {
        name: "JavaScript",
      },
      {
        name: "NodeJS",
      },
    ],
    achievements: [
      {
        issuer: "Oracle",
        name: "Oracle Certified Expert",
      },
    ],
  };

  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.personalInfo.firstName}  ${data.personalInfo.lastName}`,
                  allCaps: true,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Mobile: ${data.personalInfo.phone}`,
                  break: 1,
                }),

                new TextRun({
                  text: `Email: ${data.personalInfo.email}`,
                  break: 1,
                }),

                new TextRun({
                  text: `Address: ${data.personalInfo.address}`,
                  break: 1,
                }),
                new TextRun({
                  text: "",
                  break: 1,
                }),
              ],
              border: {
                bottom: {
                  color: "black",
                  space: 1,
                  value: "single",
                  size: 6,
                },
              },
              alignment: AlignmentType.CENTER,
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  break: 1,
                }),
                new TextRun({
                  text: "Summary/objective",
                  bold: true,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: data.personalInfo.summary,
                  break: 1,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  break: 1,
                }),
                new TextRun({
                  text: "Experience",
                  bold: true,
                  break: 1,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            ...data.experiences.map((e) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: e.title,
                    bold: true,
                    break: 1,
                    color: "#4472C4",
                    size: 25,
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: e.company.name,
                        bold: true,
                        break: 1,
                      }),
                      new TextRun({
                        text: !e.isCurrent
                          ? `${e.startDate.month}/${e.startDate.year} - ${e.endDate.month}/ ${e.endDate.year}`
                          : `${e.startDate.month}/ ${e.startDate.year} - current`,
                        break: 1,
                      }),
                      new TextRun({
                        text: e.summary,
                        break: 1,
                      }),
                    ],
                    alignment: AlignmentType.LEFT,
                  }),
                ],

                heading: HeadingLevel.HEADING_4,
                alignment: AlignmentType.LEFT,
              });
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  break: 2,
                }),
                new TextRun({
                  text: "Education",
                  bold: true,
                  break: 3,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            ...data.education.map((e) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: `${e.degree}-${e.fieldOfStudy}`,
                    bold: true,
                    break: 1,
                    color: "#4472C4",
                    size: 25,
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: e.schoolName,
                        bold: true,
                        break: 1,
                      }),
                      new TextRun({
                        text: `${e.startDate.year} -  ${e.endDate.year}`,
                        break: 1,
                      }),
                      new TextRun({
                        text: e.notes,
                        break: 1,
                      }),
                    ],
                    alignment: AlignmentType.LEFT,
                  }),
                ],

                heading: HeadingLevel.HEADING_4,
                alignment: AlignmentType.LEFT,
              });
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  break: 2,
                }),
                new TextRun({
                  text: "Skills",
                  bold: true,
                  break: 2,
                }),
                new TextRun({
                  text: "",
                  break: 1,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            ...data.skills.map((e) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: e.name,
                  }),
                  new TextRun({
                    text: "",
                    break: 1,
                  }),
                ],
                bullet: {
                  level: 0,
                },
                alignment: AlignmentType.LEFT,
              });
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  break: 2,
                }),
                new TextRun({
                  text: "achievements",
                  bold: true,
                  break: 1,
                }),
                new TextRun({
                  text: "",
                  break: 1,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            ...data.achievements.map((e) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: e.name,
                    bold: true,
                  }),
                  new TextRun({
                    text: "",
                    break: 1,
                  }),
                  new TextRun({
                    text: e.issuer,
                    break: 1,
                  }),
                ],

                alignment: AlignmentType.LEFT,
              });
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };

  return (
    <div className="App">
      <Container className={styles.container}>
        <Row>
          <Header generate={generate} />

          <Col>
            <img src={cvTemplate} alt="cv template" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
