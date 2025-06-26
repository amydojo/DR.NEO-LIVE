import React from "react";
import styles from "../../styles/fue.module.css";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
export default function FueReasons() {
    const fueReasons = [
        {
            highlight: "Natural-looking results",
            description: "with aesthetic appeal and more youthful density",
        },
        {
            highlight: "No visible linear scar",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Quicker recovery",
            description: " with our minimally invasive approach",
        },
        {
            highlight: "Ultra-popular procedure",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Men, women, hairlines, crowns, eyebrows and beards",
            description: "-we got you covered",
        },
    ];
    return (
        <div className="w-full flex flex-col justify-center items-center py-20">
            <div className={styles.Container_436_8517}>
                {fueReasons.map((item, index) => (
                    <FadeInOnScroll key={`reason-${index}`} className="flex flex-col w-3/4">
                        <span className="text-[26px] font-bold text-center text-[#FC8310]">
                            {item.highlight}
                        </span>{" "}
                        <span className="text-[26px] font-bold text-center">
                            {item.description}
                        </span>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
    );
}