import React from "react";
import {  Input, Label, useId, makeStyles, shorthands, Button } from "@fluentui/react-components";
import { Search24Filled } from "@fluentui/react-icons"


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        ...shorthands.gap("20px"),
        // Prevent the example from taking the full width of the page (optional)
        maxWidth: "100%",
        width:"100%",
        textAlign:"center",
        // Stack the label above the field (with 2px gap per the design system)
        "> div": {
            display: "flex",
            maxWidth:"100%",
            textAlign:"center",
            alignContent:"center",
            alignSelf:"center",
            flexDirection: "column",
            ...shorthands.gap("2px"),
        }
    },
});

export const Find = () => {
    const styles = useStyles();
    const beforeId = useId("content-before");

    return (
        <div className={styles.root}>
            <div>
                <Label size="large" style={{textAlign:"center"}}>Sabemos que en ocasiones no sabes por dónde empezar</Label>
                <Label size="medium" htmlFor={beforeId} style={{textAlign:"justify"}}>¿Qué tal si intentamos buscar por una iniciativa?</Label>
                <Input size="large" contentBefore={<Search24Filled />} id={beforeId} />
                <Button size="large" appearance="primary" shape="square">Buscar</Button>
            </div>
        </div>
    );

}