import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        "button": {
            backgroundColor: "#2196f3",
            color: '#fff',
            fontSize: 16,
            height: 48,
            marginBottom: 16,
            width: 256,
            "&:hover": {
                backgroundColor: "#64b5f6",
            }
        }
    })
)

const PrimaryButton = (props:any) => {
    const classes = useStyles()

    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    );
};

export default PrimaryButton;