import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import weapons from "../../weapons.json";
import McRoulette from "../Roulette/McRoulette";
import { image } from "./HomeCard2";
import { image3 } from "./HomeCard3";

const ProductCarus = () => {
    let card = [
        {
            weapon_name: "★ KARAMBIT",
            skin_name: "GAMMA DOPPLER",
            rarity: "rare",
            steam_image:
                "https://cdn.key-drop.gg/csgo_icons/58/58c08a9a2c319456d5f498dc06d126ae.png",
        },
        {
            weapon_name: "★ BAYONET",
            skin_name: "GAMMA DOPPLER",
            rarity: "restricted",
            steam_image:
                "https://cdn.key-drop.gg/csgo_icons/8b/8b6397ae8e60e9999d1e36dd4db5a817.png",
        },
        {
            weapon_name: "★ FALCHION KNIFE",
            skin_name: "TIGER TOOTH",
            rarity: "rare",
            steam_image:
                "https://cdn.key-drop.gg/csgo_icons/b4/b456dc0390610897e8b2f8fdac3f747e.png",
        },
        {
            weapon_name: "★ Bowie Knife",
            skin_name: "Убийство",
            rarity: "rare",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbujG5T-sROhuDG_ZjKhFWmrBZyYTygdtTEe1RqYQ3Z8lTtkO6-0JC66czAzCdk73Ym7Hjemh20iREYb_sv26KxNysneA",
        },
        {
            weapon_name: "★ GUT KNIFE",
            skin_name: "AUTOTRONIC",
            rarity: "restricted",
            steam_image:
                "https://cdn.key-drop.gg/csgo_icons/b4/b4a1832cf10e0c8b43fc32ac7d03dc03.png",
        },
        {
            weapon_name: "Desert Eagle",
            skin_name: "Дракон-предводитель",
            rarity: "classified",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowcDPzixc9OLcw82ZlyF8wC8wb251MW4tcifmydi7CEn4HiPlhyy1BxJbeNshqPIHELeWfJvK5CfiA",
        },
        {
            weapon_name: "M4A4",
            skin_name: "Звездный крейсер",
            rarity: "covert",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08y_m46OkuXLP7LWnn9u5MRjjeyPp4j2iwC38kA9N2j7IIeSe1M9ZQrZ-VS3wefv0ZG_tZXOyHo3uSZ34WGdwUJSqpF9BQ",
        },

        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "Desert Eagle",
            skin_name: "Дракон-предводитель",
            rarity: "classified",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowcDPzixc9OLcw82ZlyF8wC8wb251MW4tcifmydi7CEn4HiPlhyy1BxJbeNshqPIHELeWfJvK5CfiA",
        },
        {
            weapon_name: "M4A4",
            skin_name: "Звездный крейсер",
            rarity: "covert",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08y_m46OkuXLP7LWnn9u5MRjjeyPp4j2iwC38kA9N2j7IIeSe1M9ZQrZ-VS3wefv0ZG_tZXOyHo3uSZ34WGdwUJSqpF9BQ",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
        {
            weapon_name: "Desert Eagle",
            skin_name: "Дракон-предводитель",
            rarity: "classified",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowcDPzixc9OLcw82ZlyF8wC8wb251MW4tcifmydi7CEn4HiPlhyy1BxJbeNshqPIHELeWfJvK5CfiA",
        },
        {
            weapon_name: "FAMAS",
            skin_name: "Валентность",
            rarity: "restricted",
            steam_image:
                "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Pp9i_vG8MKj3VDh-kY9MWr3dYDDdwZtaQnV-Fi4k-vph8e0vcmYzXBlvCNw7X7UgVXp1iHYIfHn",
        },
    ];

    const weaponsCount = 150;
    const transitionDuration = 20;
    const { id } = useParams();
    let data = image.find((element) => element.id == id);
    return (
        <div>
            <Box
                sx={{
                    pt: "150px",
                    pb: "30px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1>{data.name}</h1>
            </Box>
            <McRoulette
                weapons={weapons}
                weaponsCount={weaponsCount}
                transitionDuration={transitionDuration}
            />
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    // justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    boxSizing: "border-box",
                    pb: "50px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: "50px",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "white",
                            pb: "30px",
                            fontFamily: "Urbane,sans-serif",
                            fontWeight: "bold",
                            fontSize: "22px",
                            borderBottom: "4px solid rgba(220,174,100)",
                        }}
                    >
                        Содержимое Кейсов
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "90%",
                        heidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        pt: "50px",
                        borderTop: "1px solid gray",
                        flexWrap: "wrap",
                    }}
                >
                    {card.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundImage: `url(${step.steam_image})`,

                                backgroundSize: "100%,100%",
                                backgroundRepeat: "no-repeat",
                                width: "15%",
                                height: "100%",
                                display: "flex",
                                // justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: "10px",
                                border: "2px solid white",
                                mb: "30px",
                            }}
                        >
                            <img
                                style={{ zIndex: "1", height: "170px" }}
                                src="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iOSAwIDE4OC40IDE0MC40IiBzdHJva2U9IiNkY2FlNjQiIGZpbGw9Im5vbmUiPgogICAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIgZD0iTTEwMy4yIDk2TDY2LjcgMzIuOWg3Mi45TDEwMy4yIDk2eiIgLz4KICAgICAgPHBhdGgKICAgICAgICBvcGFjaXR5PSIwLjA1IgogICAgICAgIHN0cm9rZT0ibm9uZSIKICAgICAgICBmaWxsPSIjZmZmIgogICAgICAgIGQ9Ik0xMzEuMyAzLjZsMTAuMyAxNy45SDEyMWwxMC4zLTE3Ljl6TTU2LjEgMzguM2wxMC4zIDE3LjlINDUuOGwxMC4zLTE3Ljl6TTEyNC4zIDg0LjZsMTAuMyAxNy45SDExNGwxMC4zLTE3Ljl6IgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIHN0cm9rZS13aWR0aD0iMi41IgogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9Ijc5LDQwIgogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PSIxNSIKICAgICAgICBkPSJNMTYzLjQgMjAuNkwxMDMuMiAxMjEgNDMgMjAuNmgxMjAuNHoiCiAgICAgIC8+CiAgICAgIAogICAgPC9zdmc+"
                            />
                            <Typography sx={{ color: "gray" }}>
                                {step.skin_name}
                            </Typography>
                            <Typography sx={{ color: "white" }}>
                                {step.weapon_name}
                            </Typography>
                            <Typography sx={{ color: "white" }}>
                                {step.price}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default ProductCarus;
