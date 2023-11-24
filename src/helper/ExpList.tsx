import Bank from "../assets/img/bank.png";
import CodePath from "../assets/img/codepath_pic.jpg";
import Lyft from "../assets/img/lyft.png";

export const ExpList = [
  {
    name: "U.S. Treasury",
    img: Bank,
    role: "Software Developer Intern @ Department of Treasury",
    period: "Jun 2022 - PRESENT",
    desc: [
      "Designed front-end work for OCIO’s OneCT main page. Improved the visual design and implemented API calls with JSON data to retrieve information from the backend more effectively. (HTML, Bootstrap, jQuery, Datatable, API/JSON)",
      "Developed Web APIs enabling communication with SQL Server database tables for dynamic solutions to data retrieval, manipulation, and interaction. (SQL Server, C# .NET, REST API)",
      "Wrote scripts to establish communication between a SQL Server database and SharePoint, enabling the conversion of Excel data into interactive hyperlinks. (Powershell ISE, SQL Server, SharePoint)",
      "Developed a student loan and issue tracking web form with SharePoint applications / user controls. Allows for streamlined communication and organization between SharePoint library & users. Improved data collection efficiency. (C#, .NET, SP Powershell, IIS)",
    ],
  },
  {
    name: "CodePath",
    img: CodePath,
    role: "CodePath Intermediate Web Development | WEB102",
    period: "Sep 2023 - Nov 2023",
    desc: [
      "Crafted 5 mini React projects centered around reusable components, user input handling, RESTful APIs integration, React routing, and database management",
      "Developed a capstone project that prioritized accessibility and adhered to fundamental web design principles while implementing seamless CRUD operations using Supabase",
    ],
  },
  {
    name: "Forage | Lyft",
    img: Lyft,
    role: "Lyft Back-End Engineering Job Simulation | Certificate",
    period: "Issued Nov 2023",
    desc: [
      "Completed the Back-End Engineering job simulation, taking over development of an unfinished project for the Lyft Rentals team",
      "Drafted a UML class diagram representing a new reorganized architecture",
      "Refactored a messy codebase inherited from another team to accurately reflect my new design",
      "Implemented unit tests and added new functionality using test-driven development",
    ],
  },
];
