"use client";

import React from 'react'
import {useState, useEffect} from "react";
import Sidebar from "@/components/sidebar";
import Image from 'next/image';

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
			<p className="text-4xl font-bold mb-8 text-primary">Midterm Report</p>

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
			</section>

			<section id="section-3" className="mb-12">
			  <h2 className="text-2xl font-semibold mb-4 text-primary">Methods</h2>
			  <p className="text-primary/90 indent-8">
					We implemented a Convolutional Neural Network, CNN, as our supervised learning method for the project. 
					We chose to use CNN as our supervised method because our plan was to convert each song into sine waves and have our 
					model identify the song through its sine wave representation. Hence, using CNN could identify songs through its sine 
					wave visual. In order to preprocess the data, we first had to choose 5 songs for data that our model will be able to 
					detect after training. These songs were Let It Go, Happy Birthday, Here Comes the Sun, Party Rock, and I Got a Feeling. 
					For preprocessing, we did three methods. These were cropping the training data into the 3 most popular 10 second segments, 
					converting the audio into sine waves, and then creating variations of these audio files. First, we cropped each song into 
					the 3 most popular 10 second segments and hummed all these segments. After humming, we had to convert each audio files to ensure 
					consistent digital audio segments. We did this by converting the hummed audio files into sine waves as this would ensure that the 
					audio files would be in the simplest form and our CNN would only focus on the melodic part of the songs. 
					Finally, we created variations of each audio clip by speeding up, slowing down, altering the pitch speed, 
					and rhythm of the hummed parts and converted those variations into sine waves. The reason for creating many versions 
					for these audio segments was to take into account the population since everyone hums with different pitches, rhythms, etc. 
					so our model will be trained to detect songs with these nuances. Labeling the variations with the 5 songs they were associated with; 
					we fed all the training data into the CNN. 
			  </p>
			</section>

			<section id="section-4" className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-primary">Results and Discussion</h2>
				<div className="mt-8">
					<div className="flex flex-col md:flex-row justify-between mb-8">
					<div className="md:w-1/2 mb-4 md:mb-0">
						<Image 
						src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/epochloss.png?raw=true"
						alt="Epoch Loss Chart" 
						width={500} 
						height={300} 
						layout="responsive"
						/>
						<p className="text-sm text-center mt-2">Figure 1: Epoch Loss Chart</p>
					</div>
					<div className="md:w-1/2">
						<Image 
						src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/train.png?raw=true"
						alt="Training Data Chart" 
						width={500} 
						height={300} 
						layout="responsive"
						/>
						<p className="text-sm text-center mt-2">Figure 2: Training Data Chart</p>
					</div>
					</div>
					
					<p className="text-primary/90">
					We performed the training for our CNN over 10 epochs and the results for training can be seen in the images above. 
					Initially, our training loss started at a high value (1.425) and we had a low training accuracy of 0.3500. 
					Over the course of the epochs, the training loss decreased to 0.002 up to the 10th epoch and the training accuracy 
					increased to 1.000 in the 10th epoch. After training on all the data, the model was ready to be tested.
					</p>
					
					<div className="md:w-1/2">
						<Image 
						src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/testandtrain.png?raw=true"
						alt="Training and Testing Data Chart" 
						width={500} 
						height={300} 
						layout="responsive"
						/>
						<p className="text-sm text-center mt-2">Figure 3: Training and Testing Data Chart</p>
					</div>

					<p className="text-primary/90">
					The orange lines represent our test loss and accuracy. As you can see our model’s accuracy and loss remained constant 
					after the first two epochs. In the beginning of testing, the test loss was high at around 0.4 but decreased to near 0 
					after two epochs. The accuracy started at 0.9 in epoch 0 and in epoch 1 went to 1.0/perfect accuracy. Also, we 
					hypothesize that our model may be overfitting our data, and we plan to tackle this for the result. We have concluded 
					that some of the preprocessing methods we trained the model in can result in this behavior.
					</p>

				</div>
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
			
			<h2 className="text-2xl font-semibold mb-4 text-primary">Gantt Chart</h2>
			<Image 
				src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/MidtermGantt.png?raw=true"
				alt="Midterm Gantt Chart" 
				width={500} 
				height={300} 
				style={{ width: '100%', height: 'auto' }}
			/>

			<h2 className="text-2xl font-semibold mb-4 text-primary">Contribution Chart</h2>
			<Image 
				src="https://github.com/krish-shar/music-recognition-pages/blob/main/images/MidtermContribution.png?raw=true"
				alt="Midterm Contribution Chart" 
				width={500} 
				height={300} 
				style={{ width: '100%', height: 'auto' }}
			/>
		  </main>
	  </div>
  )
}

export default Page
