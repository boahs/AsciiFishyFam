import React from "react";
import Faq from "react-faq-component";

const FaqSection = () => {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "What is Ascii Fishy Fam?",
                content: "Ascii Fishy Fam is a collection of unique NFTs crafted entirely from ASCII art, a digital art form as old as the internet."
            },
            {
                title: "Is there any utility?",
                content: "The primary focus of Ascii Fishy Fam is on art and community. Think of it as a fun, collectible experience."
            },
            {
                title: "How do I get one?",
                content: "You can explore and purchase Ascii Fishy Fam NFTs on OpenSea."
            },
            {
                title: "What makes Ascii Fishy Fam unique?",
                content: "Each piece is meticulously created using only text characters, making every NFT a work of digital craftsmanship."
            }
        ],
    };

    const styles = {
        bgColor: "#f1f4c6",
        titleTextColor: "#006994",
        rowTitleColor: "#006994",
        rowContentColor: "#181818",
    };

    return (
        <div>
            <h2 className="section-title">FAQ</h2>
            <Faq data={data} styles={styles} />
        </div>
    );
};

export default FaqSection;
