import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const FaqSection = () => {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "What makes us different?",
                content:
                    "Ascii Fishy Fam stands out in the NFT world with our dedication to high-quality, colorful ASCII art. We’re pushing creative boundaries and keeping you excited with new, unique releases. Our vision is to build a project that feels fresh and engaging, setting us apart from other NFT collections.",
            },
            {
                title: "Is Ascii Fishy Fam fun like memes?",
                content: `Definitely! Ascii Fishy Fam was designed to bring a smile to your face, combining internet humor and vibrant ASCII art. Our community is all about fun, and you’ll find plenty of meme-worthy content to enjoy and share. This project is here to be as entertaining as it is valuable.`,
            },
            {
                title: "Does Ascii Fishy Fam have a utility?",
                content: `Yes! Ascii Fishy Fam is being developed with multiple future utilities in mind. Working in an AGILE environment, we’re rolling out exciting features over time. For a hint: we’ll be using "Three.JS" to bring the project to life in new, interactive ways. Keep an eye on our Twitter or website for updates—trust us, you’ll want to be the first to know!`,
            },
            {
                title: "Are the developers 'DOXED'?",
                content: `Yes, our team is fully doxxed. Transparency is our priority, and we’re here to build something genuinely special and long-lasting. You can trust that we’re committed to taking this project to the next level with integrity.`,
            },
            {
                title: "Does the team have professional experience?",
                content: `Yes, the developers behind Ascii Fishy Fam have experience in both large and small teams across professional industries. We’re bringing this expertise to ensure a smooth and professional project launch.`,
            },
            {
                title: "Is there a roadmap?",
                content: `Absolutely, a detailed roadmap is in the works and will be released soon. This will outline our exciting plans and the project’s future direction, keeping the community informed and engaged every step of the way.`,
            },
            {
                title: "Will there be a team member section on the website?",
                content: `Yes! We’re planning to add a dedicated team section to the website once the components are ready. Stay tuned for more insights into the people bringing Ascii Fishy Fam to life.`,
            },
            {
                title: "Is Ascii Fishy Fam Web3 compatible?",
                content: `Yes! We’re integrating ethers.js, a JavaScript library that allows us to interact with blockchain technology. This will provide secure and seamless access to the full ecosystem of Web3, making Ascii Fishy Fam a truly modern NFT experience.`,
            },
            {
                title: "Are there any rewards for early supporters?",
                content: `Yes, we’re planning an airdrop of over 100 Ascii Fishy Fam NFTs to reward our early community members. This is our way of showing appreciation for your support and giving you an opportunity to expand your collection right from the start!`,
            },
        ],
    };
    

const styles = {
     bgColor: `#f1f4c6`,
    titleTextColor: `#181818`,
    rowTitleColor: `#181818`,
     rowContentColor: `#006994`,
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

return (
    <div>
        <h2 className="section-title">FAQ section</h2>

        <div className="faq-style-wrapper">
            <Faq data={data} styles={styles}/>
        </div>
    </div>
);

};

export default FaqSection;