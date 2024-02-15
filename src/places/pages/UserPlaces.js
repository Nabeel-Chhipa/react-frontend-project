import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Burj Khalifa',
        description: 'Burj Khalifa Description',
        imageUrl: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg',
        address: '1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates',
        location: {
            lat: 25.1972018,
            lng: 55.2718015
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Burj Al Arab',
        description: 'Burj Al Arab Description',
        imageUrl: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-al-arab/fallback-image/burj-al-arab-1-dtcm.jpg',
        address: 'Umm Suqeim 3 - Dubai - United Arab Emirates',
        location: {
            lat: 25.1411686,
            lng: 55.1028453
        },
        creator: 'u2'
    },
];

const UserPlaces = () => {

    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces