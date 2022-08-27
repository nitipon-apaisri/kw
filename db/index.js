import { v4 as uuidv4 } from "uuid";
export const news = [
    {
        _id: uuidv4(),
        title: "Auction #OK200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet massa eget est aliquet eleifend. Aenean volutpat eu odio at.",
        media: {
            image: { link: "https://cdn.discordapp.com/attachments/945735107078156318/1008699980078387210/05.jpg", alt: "auction #200" },
        },
        publish: new Date(),
    },
    {
        _id: uuidv4(),
        title: "Special Bonus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet massa eget est aliquet eleifend. Aenean volutpat eu odio at.",
        media: {
            image: { link: "https://media.discordapp.net/attachments/942847516150472714/1005398138833621122/000000000.jpg?width=1232&height=1232", alt: "reward-bonus" },
        },
        publish: new Date(),
    },
    {
        _id: uuidv4(),
        title: "Fried Durian Giveaway",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet massa eget est aliquet eleifend. Aenean volutpat eu odio at.",
        media: {
            image: { link: "https://images-ext-2.discordapp.net/external/Mb7QH4oYR0cDNtxlgts0U83cFWhADJM_cxv6oRwIjqA/https/pbs.twimg.com/media/FZ8NbGEakAAkl_R.jpg", alt: "fried durian ga" },
        },
        publish: new Date(),
    },
    {
        _id: uuidv4(),
        title: "Collab Giveaway",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet massa eget est aliquet eleifend. Aenean volutpat eu odio at.",
        media: {
            image: { link: "https://images-ext-1.discordapp.net/external/BwW9PsF0uvfaqoFa76GeJR2Nz2ZoKTD4U2fz-28CLPQ/https/pbs.twimg.com/media/FWzYnZmaMAAaC-L.jpg", alt: "collab ga" },
        },
        publish: new Date(),
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
    {
        _id: uuidv4(),
        title: "OpenSea",
        slug: "opensea",
        media: {
            profile: "https://cdn.discordapp.com/attachments/988543164082167898/1012814961879289888/op-profile.png",
            cover: "https://cdn.discordapp.com/attachments/988543164082167898/1012813207183818802/op-cover.png",
        },
    },
];
export const kwStats = [
    { _id: uuidv4(), title: "Marketplace", value: 3 },
    { _id: uuidv4(), title: "Total Sold NFT", value: 200 },
];
