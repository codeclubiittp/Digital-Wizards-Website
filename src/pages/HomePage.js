import React from "react";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import LandingPage from "../components/LandingPage.jsx";
import DomainCards from "../components/Domains.jsx";
import FallingMatrix from "../components/FallingMatrix.jsx";
import { Leads } from "../components/Leads.jsx";
import Events from "../components/Events.jsx";
import ProjectsGrid from "../components/OngoingProjects.jsx";
import KnowledgeTransfer from "../components/KnowledgeTransfer.jsx";

function HomePage() {
    return (
        <div>
            <FallingMatrix />
            <Navbar />
            <LandingPage />
            <div id="domain-cards">
                <DomainCards />
            </div>
            <Events />
            <ProjectsGrid />
            <KnowledgeTransfer />
            <Leads />

            {/* Contact Us */}
            <div className="flex justify-center items-center my-5">
                <a
                    href="/contact"
                    className="group relative inline-block bg-white rounded-full 
            py-3 px-5 md:py-4 md:px-7 lg:py-4 lg:px-9 
            text-[1rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]
            font-extrabold text-center text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100 
            shadow-md hover:shadow-lg hover:scale-110 transition duration-300 ease-out"
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #f3f4f6", // Optional border for subtle contrast
                    }}
                >
                    Contact Us
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
