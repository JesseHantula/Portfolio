const projectsText = {
    p1: {
        name: "Connect4 AI",
        tools: ["Java", "IntelliJ IDEA"],
        description: "Implementation of a connect 4 GUI that allows the user to play against an advanced artificial intelligence in the classic board game Connect 4. The artificial intelligence was created using the minimax function alongside alpha-beta pruning, as well as a function that evaluates the position of the game board. The project was tested using Junit. To learn more about the project, as well as read detailed guides regarding the application and testing, check out the code by clicking the link below.",
        image: "Connect4.png",
        link: "https://github.com/JesseHantula/Connect4AI",
        fields: ["Software development", "Artificial intelligence"],
        date: "November 2023"
    },
    p2: {
        name: "HSL Bike Planner",
        tools: ["Python", "Jupyter Notebook", "HTML"],
        description: "A group project that was made for the introduction of data science class at the University of Helsinki. Our goal was to predict the busyness of each city bike station in the Helsinki/Espoo region for future dates, and this was done by using a machine learning model that was trained on prior city bike station data and weather data for the city of Helsinki. Using the predictions made by the model, we created an interactive map of the Helsinki/Espoo region that has a pin for each city bike station. Clicking on a pin reveals the expected busyness of the station for the next 5 days.",
        image: "BikePlanner.png",
        link: "https://github.com/JesseHantula/data_science_project.github.io",
        fields: ["Data science", "Machine learning"],
        date: "September 2023"
    },
    p3: {
        name: "Flawed Website",
        tools: ["Python", "Django", "HTML", "SQL"],
        description: "A cybersecurity project that uses a simple web application to highlight common cybersecurity flaws. The application allows users to create and manage to-do lists, which are then stored in a SQL database. There is also a login system for the application, which allows for the creation of new users, as well as logging in with known credentials. For more information on the project, including a report that explains the cybersecurity flaws in great depth (as well as explanations on how to fix them in the code), check out the repository for the project below.",
        image: "FlawedWebsite.png",
        link: "https://github.com/JesseHantula/Flawed-Website-Project",
        fields: ["Web development", "Cybersecurity"],
        date: "January 2023"
    },
    p4: {
        name: "MindLink",
        tools: ["React Native", "GraphQL", "Apollo Client", "Django"],
        image: "MindLink.png",
        description: "A project made for the Junction 2024 Hackathon. MindLink is a mobile application that allows job seekers to connect with companies that fit their interests; most importantly, their personal values and mental health needs. The information that is gathered from both job-seekers and companies during registration is used to calculate a compatibility score between the two parties. The application allows job seekers to scroll through potential job opportunities, which are often from companies that are compatible with the job seeker's values and preferences. For more information regarding the app, including a video presentation displaying the app's features, check out the repository below.",
        link: "https://github.com/JesseHantula/junction2024",
        fields: ["Mobile development", "Hackathon"],
        date: "November 2024"
    }
}

export default projectsText