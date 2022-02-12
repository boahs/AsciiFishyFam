import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const FaqSection = () => {
const data = {
    title: "FAQ",
    rows: [
        {
            title: "Do you have derivative rights for this project?",
            content: `Yes we have received official approval from the @FishyFamNFT project owners!`,
        },
        {
            title: "What makes us different?",
            content:
                "Ascii Fishy Fam is an entirely different project than any other NFT collection. We plan to create high quality colorful ASCII art NFTs of the Fishy Fam collection. We plan to achieve what other NFTs haven't and keep you excited on what we're releasing next.",
        },
        {
            title: "Does Ascii Fishy Fam have a utility?",
            content: `Ascii Fishy Fam will have more than one utility in the future. Working in an AGILE environment we plan to carefully release news about these features we plan to add overtime. Keep an eye on our twitter or the website which will always be updated first. These utility functions will be epic...We'll give you a hint : "Three.JS" will be used!`,
        },
        {
            title: `Are the developers "DOXED"?`,
            content: `Yes the team is doxxed - we have no malevolent intentions and plan to take this project to the next level!`
        },
        {
            title: `Does the team have professional experience in the real world?`,
            content: `Yes the developers of this team have worked in very large and small teams alike professionally.`
        },
        {
            title: `Do we get a roadmap?`,
            content: `A roadmap is in the works currently.`
        },
        {
            title: `Do we get a team member section on the website?`,
            content: `A team member section will be added in when the components are built for it.`
        },
        {
            title: `Will this project be Web3 applicable?`,
            content: `Web3 is a pretty big buzzword - We will be intergrating ethers.js which is a web3 javascript library. We will use it to interact with the blockchain and its ecosystem.`
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