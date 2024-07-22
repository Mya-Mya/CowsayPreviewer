import React from "react"
import { Box, Button, Card, List, ListItem, ListItemButton, Stack, Textarea } from "@mui/joy";
import { COWNAMES } from "./cowsayutil";



type CowNameListType = {
    currentCowName: string;
    setCurrentCowName: (name: string) => void;
    searchQuery: string;
}

export const CowNameList = (props: CowNameListType) => {
    const { currentCowName, setCurrentCowName, searchQuery } = props;

    const lowerQuery = searchQuery.toLowerCase()
    const mathesQuery = (target: string) => {
        const lowerTarget = target.toLowerCase();
        return lowerTarget.includes(lowerQuery);
    }
    const myCowNames = searchQuery === "" ? COWNAMES : COWNAMES.filter(target => mathesQuery(target) || target == currentCowName)
    return (
        <List sx={{ overflow: "scroll" }} size="sm">
            {myCowNames.map(name =>
                <ListItem>
                    <ListItemButton key={name} selected={name === currentCowName} onClick={() => setCurrentCowName(name)}>
                        {name}
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )
}