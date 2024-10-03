"use client";

import React from 'react';
import {useState, useEffect} from "react";
import Sidebar from "@/components/sidebar";

function Page() {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        const headings = Array.from(document.querySelectorAll("h2"));
        const newSections = headings.map((heading, index) => ({
            id: `section-${index + 1}`,
            title: heading.textContent,
        }));
        // @ts-expect-error i know what im doing here
        setSections(newSections);
    }, []);

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar sections={sections}/>
            <main className="flex-1 p-8">
                <h1 className="text-4xl font-bold mb-8 text-primary">Project Proposal: [Project Name]</h1>

                <section id="section-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Executive Summary</h2>
                    <p className="text-primary">Brief overview of the project proposal...</p>
                </section>

                <section id="section-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Project Objectives</h2>
                    <ul className="list-disc pl-6 text-primary/80">
                        <li>Objective 1</li>
                        <li>Objective 2</li>
                        <li>Objective 3</li>
                    </ul>
                </section>

                <section id="section-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Methodology</h2>
                    <p className="text-primary/90">Description of the project methodology...</p>
                </section>

                <section id="section-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Timeline</h2>
                    <p className="text-primary/90">Project timeline and milestones...</p>
                </section>

                <section id="section-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Budget</h2>
                    <p className="text-primary/90">Detailed budget breakdown...</p>
                </section>

                <section id="section-6" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Team and Resources</h2>
                    <p className="text-primary/90">Information about the project team and required resources...</p>
                </section>

                <section id="section-7" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Conclusion</h2>
                    <p className="text-primary/90">Concluding remarks and call to action...</p>
                </section>
            </main>
        </div>
    )
}

export default Page
