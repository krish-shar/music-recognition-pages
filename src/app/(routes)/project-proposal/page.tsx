"use client";

import React from 'react';
import {useState, useEffect} from "react";
import Sidebar from "@/components/sidebar";
import Image from 'next/image';
import { YouTubeEmbed } from "@next/third-parties/google";

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

    const references = [
        "A. Amatov et al., A SEMI-SUPERVISED DEEP LEARNING APPROACH TO DATASET COLLECTION FOR QUERY-BY-HUMMING TASK.",
        "Sun, J., & Lee, S.-P. (n.d.). (rep.). Query by Singing/Humming System Based on Deep Learning (Vol. 12). International Journal of Applied Engineering Research.",
        "B. L. Pham, H. H. Huong Hoang Luong, T. P. Tran, H. P. Ngo, H. V. Nguyen, and T. Thinh, \"An Approach to Hummed-tune and Song Sequences Matching,\" An Approach to Hummed-tune and Song Sequences Matching, Nov. 20, 2020. https://link.springer.com/chapter/10.1007/978-981-19-8069-5_49 (accessed Oct. 02, 2024)."
    ];

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar sections={sections}/>
            <main className="flex-1 p-8">
                <p className="text-4xl font-bold mb-8 text-primary">Project Proposal</p>

                <section id="section-0" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Video Presentation</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <YouTubeEmbed
                            videoid="cEeuGUJa3K8"
                            height={400}
                            width={720}
                            />
                        {/* <iframe
                            src="https://www.youtube.com/watch?v=cEeuGUJa3K8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="w-full h-full"
                        /> */}
                    </div>
                </section>

                <section id="section-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction and Background</h2>
                    <p className="text-primary/90 indent-8">
                        The challenge of identifying songs from hummed melodies has gained significant attention in the
                        field of music information retrieval. Recent research has made substantial progress in this
                        area, with various approaches yielding promising results. A semi-supervised learning method
                        using the Covers and Hummings Aligned Dataset (CHAD) has shown improved accuracy compared to
                        traditional machine learning models [1]. Another study demonstrated the effectiveness of deep
                        learning applied to polyphonic databases, outperforming models trained on monophonic data [2].
                    </p>
                    <div className="h-4"/>
                    <p className="text-primary/90 indent-8">
                        Our project aims to build upon these advancements by developing a robust system for song
                        recognition from hummed tunes. We will utilize two primary datasets: a collection of over 6,000
                        humming and whistling recordings covering eight songs, and the CHAD dataset, which contains more
                        than 5,000 humming covers for over 300 songs. These datasets provide a diverse range of melodic
                        interpretations, essential for training a versatile model.
                    </p>
                    <div className="h-4"/>
                    <p className="text-primary/90">
                        Dataset links:
                    </p>
                    <ul className="list-disc pl-6 text-primary/80 mr-8">
                        <li><a className="text-blue-500 underline"
                               href="https://www.kaggle.com/datasets/jesusrequena/mlend-hums-and-whistles">Hums and
                            Whistles</a></li>
                        <li><a className="text-blue-500 underline"
                        href={"https://huggingface.co/datasets/amanteur/CHAD_hummings"}>CHAD Hummings</a></li>
                    </ul>
                    <div className="h-4"/>
                    <p className="text-primary/90 indent-8">
                        By combining these resources and implementing advanced machine learning techniques, we aim to
                        create a system that accurately identifies songs from user-provided humming, addressing the
                        limitations of current music recognition technologies and enhancing the user experience in music
                        discovery and interaction.
                    </p>
                </section>

                <section id="section-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Problem Definition</h2>
                    <p className="text-primary/90 indent-8">
                        The problem we aim to address is the inability of current music recognition systems to identify songs based on hummed melodies. Traditional systems like Shazam require the original recording, limiting their usefulness when users can only recall a tune. Our goal is to develop a machine learning system that can accurately identify songs from hummed input, overcoming challenges such as variations in pitch, tempo, and vocal quality.
                    </p>
                    <div className={"h-4"}/>
                    <p className={"text-primary/90 indent-8"}>
                        The problem we aim to address is the inability of current music recognition systems to identify songs based on hummed melodies. Traditional systems like Shazam require the original recording, limiting their usefulness when users can only recall a tune. Our goal is to develop a machine learning system that can accurately identify songs from hummed input, overcoming challenges such as variations in pitch, tempo, and vocal quality.
                    </p>
                </section>

                <section id="section-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Methods</h2>
                    <p className="text-primary/90">Our approach will involve several data preprocessing methods and
                        machine learning algorithms to effectively identify songs from hummed melodies.
                    </p>
                    <div className={"h-4"}/>
                    <p className={"text-primary/90"}>
                        Data Preprocessing:
                    </p>
                    <ul className="list-disc pl-6 text-primary/80 mr-8">
                        <li>
                            Audio extraction of Mel Spectrogram
                        </li>
                        <li>
                            Fast Fourier Transformation
                        </li>
                        <li>
                            Down Sampling
                        </li>
                    </ul>
                    <p className={"text-primary/90"}>
                        Machine Learning Algorithms:
                    </p>
                    <ul className="list-disc pl-6 text-primary/80 mr-8">
                        <li>
                            Recurrent Neural Network (RNN) (Used as a supervised model)
                        </li>
                        <li>
                            Convolutional Neural Network (CNN) (Used as a supervised model)
                        </li>
                        <li>
                            Yin Algorithm
                        </li>
                    </ul>
                    <p className={"text-primary/90"}>
                        Quantitative Metrics:
                    </p>
                    <ul className="list-disc pl-6 text-primary/80 mr-8">
                        <li>
                            Mean Reciprocal Rank (MRR)                        </li>
                        <li>
                            Cross-Entropy Loss                        </li>
                        <li>
                            Dynamic Time Warping                        </li>
                    </ul>
                    <div className={"h-4"} />
                    <p className={"text-primary/90 indent-8"}>
                        These methods were chosen for their effectiveness in processing audio data and capturing the unique characteristics of hummed melodies. The Mel Spectrogram and Fast Fourier Transformation will help extract relevant frequency features, while downsampling will reduce noise and focus on essential data. RNNs are well-suited for sequential data like melodies, while CNNs excel at pattern recognition in spectrograms[3]. The Yin Algorithm will provide accurate pitch estimation, crucial for melody matching. Our quantitative metrics (MRR, Cross-Entropy Loss, and Dynamic Time Warping) will allow us to evaluate model performance comprehensively. We&apos;ll implement these techniques using libraries such as PyTorch for audio processing and TensorFlow/Keras for neural network development, ensuring efficient and robust model creation.
                    </p>
                </section>

                <section id="section-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Potential Results and Discussion</h2>
                    <p className="text-primary/90 indent-8">We&apos;ll use Mean Reciprocal Rank (MRR) to evaluate song ranking accuracy, Cross-Entropy Loss to measure model performance, and Dynamic Time Warping to assess melody similarity. Our goal is to minimize prediction errors, enabling quick and accurate song identification from humming. We expect to develop a system that can accurately predict and display the name of a song based on a user&apos;s hummed audio sample.
                    </p>
                </section>

                <section id="section-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">References</h2>
                    <ol className="list-none pl-0 space-y-2">
                        {references.map((reference, index) => (
                            <li key={index} className="flex">
                                <span className="mr-2 font-bold">[{index + 1}]</span>
                                <span>{reference}</span>
                            </li>
                        ))}
                    </ol>
                </section>
                
                <section id="section-6" className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-primary">Gantt Chart</h2>
    <div>
        <h1>Gantt Chart</h1>
        <Image 
            src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/GanttChart.png?raw=true"
            alt="Gantt Chart" 
            width={500} 
            height={300} 
            layout="responsive"
        />
    </div>
</section>

<section id="section-7" className="mb-12">
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contribution Table</h2>
        <h1>Contribution Table</h1>
        <Image 
            src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/ContributionTable.png?raw=true"
            alt="Contribution Table" 
            width={500} 
            height={300} 
            layout="responsive"
        />
    </div>
</section>

            </main>
        </div>
    )
}

export default Page
