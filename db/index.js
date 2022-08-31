import { v4 as uuidv4 } from "uuid";
export const news = [
    {
        _id: uuidv4(),
        title: "The beginning of a new story",
        description:
            "When the world is no longer the same after the virus outbreak Everyone has to do whatever it takes to become number one and rule the penthouse. Welcome to WHAT THE... collection ",
        media: {
            image: { link: "https://cdn.discordapp.com/attachments/942847516150472714/1014528587090632766/IMG_3280.jpg", alt: "opening the new collection" },
        },
        publish: "31/08/2022",
    },
];

export const collections = [
    {
        _id: uuidv4(),
        title: "Paras Marketplace",
        slug: "paras",
        media: {
            profile: "https://cdn.discordapp.com/attachments/988543164082167898/1012820529218072637/Group_153.png",
            cover: "https://cdn.discordapp.com/attachments/988543164082167898/1012820047368028190/paras-cover.png",
        },
    },
    // {
    //     _id: uuidv4(),
    //     title: "OpenSea",
    //     slug: "opensea",
    //     media: {
    //         profile: "https://cdn.discordapp.com/attachments/988543164082167898/1012814961879289888/op-profile.png",
    //         cover: "https://cdn.discordapp.com/attachments/988543164082167898/1012813207183818802/op-cover.png",
    //     },
    // },
];
export const kwStats = [
    { _id: uuidv4(), title: "Marketplace", value: 3 },
    { _id: uuidv4(), title: "Total Sold NFT", value: 200 },
];
