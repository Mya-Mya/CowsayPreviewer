import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Button, Card, Container, Input, List, ListItem, ListItemButton, Stack, Textarea, TextField, Typography } from "@mui/joy";
import { say } from "cowsay";
import { COWNAMES, COWNAME_TO_COW } from "./cowsayutil"

const App = () => {
    const [text, setText] = useState("")
    const [cowName, setCowName] = useState("Default")

    const output = say({
        text,
        cow: COWNAME_TO_COW[cowName]
    })

    const onCopyPress = async() => {
        await navigator.clipboard.writeText(output);
    }

    return <Box sx={{ display: "flex" }} maxHeight="100dvh">
        <Stack gap={1} direction="row" sx={{ flexGrow: 1 }} p="1rem">
            <Card>
                <FormLabel>Text</FormLabel>
                <Textarea minRows={1} value={text} onChange={e => setText(e.target.value)} />
                <FormLabel>Cow Name</FormLabel>
                <List sx={{ overflow: "scroll" }} size="sm">
                    {COWNAMES.map(name =>
                        <ListItem>
                            <ListItemButton key={name} selected={name === cowName} onClick={() => setCowName(name)}>
                                {name}
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Card>
            <Card sx={{ flexGrow: 1, overflow: "scroll", display: "flex", flexDirection: "column" }}>
                <Textarea value={output} sx={{ fontFamily: "Courier", flexGrow: 1 }} variant="plain" id="output" />
                <Stack direction={"row-reverse"}>
                    <Button variant="soft" onClick={() => onCopyPress()}>Copy</Button>
                </Stack>
            </Card>
        </Stack>
    </Box>
}



createRoot(document.body).render(<App />)

