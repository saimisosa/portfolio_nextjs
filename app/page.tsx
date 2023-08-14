'use client'

import Head from 'next/head';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import img from "./gtihub_pfp.png";
// import assem from "./assembly_databases.png"
// import prog from "./programming_frameworks.png"
import code from "./code.png";
import design from "./design.png";
import consulting from "./consulting.png";
import resume from "./sjuluru_resums.pdf";
export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className = {darkMode ? 'dark' : ''}>
      <Head>
        <title>Saimanasa Juluru Portfolio</title>
        <meta name="description" content="Generated by Next.js"/>
      </Head>
      <main className ="bg-white px-10 dark:bg-gray-800">
          <section className ="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between dark:text-white">
                  <h1 className = "text-xl font-burtons">saimisosa</h1>
                  <ul className="flex items-center">
                      <li>
                          <BsFillMoonStarsFill
                              onClick={() => setDarkMode(!darkMode)}
                              className ="cursor-pointer text-2xl"/>
                      </li>
                      <li>
                          <a className ="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                             href={resume} download="SJ_Resume.pdf">Resume
                          </a>
                      </li>
                  </ul>
              </nav>
              <div className="text-center p-15">
                  <h2 className = "text-3xl py-2 text-teal-600 font-md dark:text-teal-400 md:text-3xl">Saimanasa Juluru</h2>
                  <h3 className = "text-xl py-2 dark:text-white md:text-xl">Aspiring Developer & Designer</h3>
                  <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md">
                      B.S in Computer Science recipient from the NYU Tandon School of Engineering.
                      I'm currently working towards developing my skills in UI/UX design and development, as we as full-stack development.
                      I've spent my undergraduate career diving into a multitude of projects ranging from map-coloring algorithms to coding musical compositions in TidalCycles and Ruby.
                      With a solid background the fundamentals in programming, I aim to explore the overlaps in design and software development.
                  </p>
              </div>
              <div className="text-3xl flex justify-center gap-8 text-gray-600 dark:text-gray-400">
                  <a href={"https://www.linkedin.com/in/saimanasa-juluru-7ab09417a/"}><AiFillLinkedin/></a>
                  <a href={"https://github.com/saimisosa"}><AiFillGithub/></a>
              </div>
              <div className="relative mx-auto content-center p-20">
                  <center>
                  <Image src={img} alt={"Cartoon profile picture"} width={250} height={250}/>
                  </center>
              </div>
          </section>

          <section>
              <h3 className = "text-xl px-15 py-2 dark:text-white">Notable Skills</h3>
              <div className="lg:flex gap-10">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100 flex-1">
                      <center>
                          <Image src={code} alt={"A code example"} width={100} height={100} />
                      </center>
                      <h3 className="text-lg font-medium pt-8 pb-2">
                          Programming & Frameworks
                      </h3>
                      <h4 className="py-4 text-teal-600">Languages Used:</h4>
                      <p className="text-gray-800 py-1">C/C++</p>
                      <p className="text-gray-800 py-1">Java</p>
                      <p className="text-gray-800 py-1">Python (Flask)</p>
                      <p className="text-gray-800 py-1">JavaScript (React, Next, & Node)</p>
                      <p className="text-gray-800 py-1">Ruby</p>
                      <p className="text-gray-800 py-1">Hydra</p>
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 flex-1">
                      <center>
                          <Image src={design} alt={"A design"} width={100} height={100}/>
                      </center>
                      <h3 className="text-lg font-medium pt-8 pb-2 ">
                          Design & Modeling
                      </h3>
                      <h4 className="py-4 text-teal-600">Software Used:</h4>
                      <p className="text-gray-800 py-1">Adobe Photoshop</p>
                      <p className="text-gray-800 py-1">Microsoft Office</p>
                      <p className="text-gray-800 py-1">Figma</p>
                      <p className="text-gray-800 py-1">LaTeX</p>
                      <p className="text-gray-800 py-1">Zapier</p>
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 flex-1">
                      <center>
                          <Image src={consulting} alt={"Consulting example"} width={100} height={100} />
                      </center>
                      <h3 className="text-lg font-medium pt-8 pb-2 ">Databases & Assembly</h3>
                      <h4 className="py-4 text-teal-600">Languages Used:</h4>
                      <p className="text-gray-800 py-1">E15/E20</p>
                      <p className="text-gray-800 py-1">8086</p>
                      <p className="text-gray-800 py-1">MIPS</p>
                      <p className="text-gray-800 py-1">Neo4J</p>
                      <p className="text-gray-800 py-1">SQL</p>
                      <p className="text-gray-800 py-1">noSQL</p>
                  </div>
              </div>
          </section>
          <section>
              <div>
                  <h1 className="text-xl px-15 py-2 dark:text-white">Portfolio</h1>
              </div>
              <div className = "flex flex-wrap gap-10 justify-evenly py-5">
                  <iframe style={{border: 1}} width="600" height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyuzxMi8QyDfv6eDYGDCpqB%2FPortfolio-Website-Example%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DQ1U6Q24sBwPDxXoO-1"
                          allowFullScreen></iframe>

                  <iframe style={{border: 1}} width="600" height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIijHcJ56EMgbdFrZBlJGDh%2FMobile-App-Signup-Flow%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DQ1U6Q24sBwPDxXoO-1"
                          allowFullScreen></iframe>

              </div>
              <div className="flex flex-wrap gap-10 justify-evenly py-5">
                  <iframe style={{border: 1}} width="600" height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOEQdg4RMfklzYiq3f1l4En%2FProduct-Landing-Page%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DQ1U6Q24sBwPDxXoO-1"
                          allowFullScreen></iframe>
                  <iframe style={{border: 1}} width="600" height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAhOhWbK3PahVA7J9egfLrF%2FE-mail-template%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DQ1U6Q24sBwPDxXoO-1"
                          allowFullScreen></iframe>

              </div>
          </section>

      </main>
    </div>
  )
}
