import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Button, Card, Divider, FormHelperText, FormLabel, List, ListItem, ListItemButton, Radio, RadioGroup, Stack, Textarea, Typography } from "@mui/joy";
import { say, ACKBAR, APERTURE, APERTURE_BLANK, ARMADILLO, ATAT, ATOM, AWESOME_FACE, BANANA, BEARFACE, BEES, BILL_THE_CAT, BIOHAZARD, BISHOP, BLACK_MESA, BONG, BOX, BROKEN_HEART, BUD_FROGS, BUNNY, C3PO, CAKE, CAKE_WITH_CANDLES, CAT, CATFENCE, CHARIZARDVICE, CHARLIE, CHEESE, CHESSMEN, CHITO, CLAW_ARM, CLIPPY, COMPANION_CUBE, COWER, COWFEE, CTHULHU_MINI, CUBE, DAEMON, DALEK, DALEK_SHOOTING, DOCKER_WHALE, DOGE, DOLPHIN, DRAGON, DRAGON_AND_COW, ELEPHANT, ELEPHANT_IN_SNAKE, EXPLOSION, EYES, FAT_BANANA, FAT_COW, FENCE, FIRE, FLAMING_SHEEP, FOX, GHOST, GHOSTBUSTERS, GLADOS, GOAT, GOLDEN_EAGLE, HAND, HAPPY_WHALE, HEDGEHOG, HELLOKITTY, HIPPIE, HIYA, HIYOKO, HOMER, HYPNO, IBM, IWASHI, JELLYFISH, KILROY, KING, KISS, KITTEN, KITTY, KNIGHT, KOALA, KOSH, LAMB, LIGHTBULB, LOBSTER, LOLLERSKATES, LUKE_KOALA, MAILCHIMP, MAZE_RUNNER, MECH_AND_COW, MEOW, MILK, MINOTAUR, MONA_LISA, MOOFASA, MOOGHIDJIRAH, MOOJIRA, MOOSE, MULE, MUTILATED, NYAN, OCTOPUS, OKAZU, OWL, PAWN, PERIODIC_TABLE, PERSONALITY_SPHERE, PINBALL_MACHINE, PSYCHIATRICHELP, PTERODACTYL, QUEEN, RADIO, REN, RENGE, ROBOT, ROBOTFINDSKITTEN, ROFLCOPTER, ROOK, SACHIKO, SATANIC, SEAHORSE, SEAHORSE_BIG, SHEEP, SHIKATO, SHRUG, SKELETON, SMALL, SMILING_OCTOPUS, SNOOPY, SNOOPYHOUSE, SNOOPYSLEEP, SPIDERCOW, SQUID, SQUIRREL, STEGOSAURUS, STIMPY, SUDOWOODO, SUPERMILKER, SURGERY, TABLEFLIP, TAXI, TELEBEARS, TEMPLATE, THREADER, THREECUBES, TOASTER, TORTOISE, TURKEY, TURTLE, TUX, TUX_BIG, TWEETY_BIRD, USA, VADER, VADER_KOALA, WEEPING_ANGEL, WHALE, WIZARD, WOOD, WORLD, WWW, ZEN_NOH_MILK } from "cowsay"

// 牛の名前一覧はnode_modules/cowsay/build/cowsay.es.jsにある
const COWNAME_TO_COW = { "Default": "", ACKBAR, APERTURE, APERTURE_BLANK, ARMADILLO, ATAT, ATOM, AWESOME_FACE, BANANA, BEARFACE, BEES, BILL_THE_CAT, BIOHAZARD, BISHOP, BLACK_MESA, BONG, BOX, BROKEN_HEART, BUD_FROGS, BUNNY, C3PO, CAKE, CAKE_WITH_CANDLES, CAT, CATFENCE, CHARIZARDVICE, CHARLIE, CHEESE, CHESSMEN, CHITO, CLAW_ARM, CLIPPY, COMPANION_CUBE, COWER, COWFEE, CTHULHU_MINI, CUBE, DAEMON, DALEK, DALEK_SHOOTING, DOCKER_WHALE, DOGE, DOLPHIN, DRAGON, DRAGON_AND_COW, ELEPHANT, ELEPHANT_IN_SNAKE, EXPLOSION, EYES, FAT_BANANA, FAT_COW, FENCE, FIRE, FLAMING_SHEEP, FOX, GHOST, GHOSTBUSTERS, GLADOS, GOAT, GOLDEN_EAGLE, HAND, HAPPY_WHALE, HEDGEHOG, HELLOKITTY, HIPPIE, HIYA, HIYOKO, HOMER, HYPNO, IBM, IWASHI, JELLYFISH, KILROY, KING, KISS, KITTEN, KITTY, KNIGHT, KOALA, KOSH, LAMB, LIGHTBULB, LOBSTER, LOLLERSKATES, LUKE_KOALA, MAILCHIMP, MAZE_RUNNER, MECH_AND_COW, MEOW, MILK, MINOTAUR, MONA_LISA, MOOFASA, MOOGHIDJIRAH, MOOJIRA, MOOSE, MULE, MUTILATED, NYAN, OCTOPUS, OKAZU, OWL, PAWN, PERIODIC_TABLE, PERSONALITY_SPHERE, PINBALL_MACHINE, PSYCHIATRICHELP, PTERODACTYL, QUEEN, RADIO, REN, RENGE, ROBOT, ROBOTFINDSKITTEN, ROFLCOPTER, ROOK, SACHIKO, SATANIC, SEAHORSE, SEAHORSE_BIG, SHEEP, SHIKATO, SHRUG, SKELETON, SMALL, SMILING_OCTOPUS, SNOOPY, SNOOPYHOUSE, SNOOPYSLEEP, SPIDERCOW, SQUID, SQUIRREL, STEGOSAURUS, STIMPY, SUDOWOODO, SUPERMILKER, SURGERY, TABLEFLIP, TAXI, TELEBEARS, TEMPLATE, THREADER, THREECUBES, TOASTER, TORTOISE, TURKEY, TURTLE, TUX, TUX_BIG, TWEETY_BIRD, USA, VADER, VADER_KOALA, WEEPING_ANGEL, WHALE, WIZARD, WOOD, WORLD, WWW, ZEN_NOH_MILK }
const COWNAMES = Object.keys(COWNAME_TO_COW);

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

