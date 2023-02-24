import {
    languages,
    publishedWithin,
    publisherCountry,
    searchIn,
} from "@/commons";
import { NewsContext } from "@/context";
import { Language } from "@mui/icons-material";
import {
    FormControl,
    InputLabel,
    ListSubheader,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import React, { useContext } from "react";

const SelectForm = (): React.ReactElement => {
    const {
        language,
        setLanguage,
        setPublishedWithin,
        setPublisherCountry,
        setSearchIn,
    } = useContext(NewsContext);

    return (
        <>
            <ListSubheader>
                <FormControl
                    fullWidth
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Language
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={"Language"}
                        onChange={(e: SelectChangeEvent) => {
                            setLanguage(e.target.value as string);
                            console.log(language);
                        }}
                        defaultValue={languages[0]}
                    >
                        {languages.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </ListSubheader>

            <ListSubheader>
                <FormControl
                    fullWidth
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Publisher's Country
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={"Publisher's Country"}
                        onChange={(e: SelectChangeEvent) =>
                            setPublisherCountry(e.target.value)
                        }
                        defaultValue={publisherCountry[0]}
                    >
                        {publisherCountry.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </ListSubheader>

            <ListSubheader>
                <FormControl
                    fullWidth
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Published Within
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={"Published Within"}
                        onChange={(e: SelectChangeEvent) =>
                            setPublishedWithin(e.target.value)
                        }
                        defaultValue={publishedWithin[0]}
                    >
                        {publishedWithin.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </ListSubheader>

            <ListSubheader>
                <FormControl
                    fullWidth
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Search In
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={"Published Within"}
                        onChange={(e: SelectChangeEvent) =>
                            setSearchIn(e.target.value)
                        }
                        defaultValue={searchIn[1]}
                    >
                        {searchIn.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </ListSubheader>
        </>
    );
};

export default SelectForm;
