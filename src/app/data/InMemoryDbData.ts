import { InMemoryDbService, InMemoryBackendConfig } from "angular-in-memory-web-api";

import { AllPhian } from "../models/allphians.model";

export class InMemDbData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let allphians: AllPhian[] = [
            {
                "id": 1,
                "name": "David Vanderheyden",
                "imageUrl": "../../assets/images/AllPhians/davidvanderheyden.jpg",
                "keyrole": "demo coding - support"
            },
            {
                "id": 2,
                "name": "Benjamin Ceustermans",
                "imageUrl": "../../assets//images/AllPhians/benjaminceustermans.jpg",
                "keyrole": "demo coding - speaker - demo"
            },
            {
                "id": 3,
                "name": "Guy De Gruyter",
                "imageUrl": "../../assets//images/AllPhians/guydegruyter.jpg",
                "keyrole": "speaker - presentation"
            },
            {
                "id": 4,
                "name": "Bart Witters",
                "imageUrl": "../../assets//images/AllPhians/bartwitters.jpg",
                "keyrole": "support"
            },
            {
                "id": 5,
                "name": "Jimmy De Smet",
                "imageUrl": "../../assets//images/AllPhians/jimmydesmet.jpg",
                "keyrole": "speaker - presentation"
            },
            {
                "id": 6,
                "name": "Thomas Swinnen",
                "imageUrl": "../../assets//images/AllPhians/thomasswinnen.jpg",
                "keyrole": "support"
            },
            {
                "id": 7,
                "name": "Thomas Schelkens",
                "imageUrl": "../../assets//images/AllPhians/thomasschelkens.jpg",
                "keyrole": "speaker - presentation - Demo"
            },
            {
                "id": 8,
                "name": "Jonathan Stefanski",
                "imageUrl": "../../assets//images/AllPhians/jonathanstefanski.jpg",
                "keyrole": "support"
            },
            {
                "id": 9,
                "name": "Nathalie Verté",
                "imageUrl": "../../assets/images/AllPhians/nathalieverte.jpg",
                "keyrole": "speaker - presentation"
            },
            {
                "id": 10,
                "name": "Roel Jacobs",
                "imageUrl": "../../assets/images/AllPhians/roeljacobs.png",
                "keyrole": "support"
            }
        ]

        return { allphians };
    }
}