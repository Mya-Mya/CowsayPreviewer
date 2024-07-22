import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Button, Card, Container, Input, List, ListItem, ListItemButton, Stack, Textarea, TextField, Typography } from "@mui/joy";
import { say } from "cowsay";
import { COWNAMES, COWNAME_TO_COW } from "./cowsayutil"
import { CowNameList } from "./components";

const App = () => {
    const [text, setText] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentCowName, setCurrentCowName] = useState("Default")

    const output = say({
        text,
        cow: COWNAME_TO_COW[currentCowName]
    })

    return <Box sx={{ display: "flex", height: "100dvh" }}>
        <Stack gap={1} direction="row" sx={{ flexGrow: 1 }} p="1rem">
            <Card>
                <Textarea minRows={1} value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
                <CowNameList currentCowName={currentCowName} setCurrentCowName={setCurrentCowName} searchQuery={searchQuery} />
            </Card>
            <Card sx={{ flexGrow: 1, overflow: "scroll", display: "flex", flexDirection: "column" }}>
                <Textarea value={output} sx={{ fontFamily: "Courier", flexGrow: 1 }} variant="plain" id="output" />
            </Card>
        </Stack>
    </Box>
}



createRoot(document.body).render(<App />)

