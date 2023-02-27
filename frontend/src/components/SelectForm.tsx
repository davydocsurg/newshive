import {
    languages,
    pageSize,
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
import React, { useContext, useEffect } from "react";

const SelectForm = ({ intialState }: any): React.ReactElement => {
    const {
        language,
        setLanguage,
        setPublishedWithin,
        setPublisherCountry,
        setSearchIn,
        setPageSize,
    } = useContext(NewsContext);

    useEffect(() => {
        setLanguage("en");
        setSearchIn("title and body");
        setPublishedWithin("2023/02/20");
        setPublisherCountry("CA");
        setPageSize(1);
    }, []);

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
                            setPublisherCountry(e.target.value as string)
                        }
                        defaultValue={publisherCountry[0].value!}
                    >
                        {publisherCountry.map((country, index) => {
                            return (
                                <MenuItem key={index!} value={country.value!}>
                                    {country.option}
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

            <ListSubheader>
                <FormControl
                    fullWidth
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        Page Size
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={"Published Within"}
                        onChange={(e: SelectChangeEvent) =>
                            setPageSize(+e.target.value)
                        }
                        defaultValue={pageSize[0].toString()}
                    >
                        {pageSize.map((option, index) => {
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
// SelectForm.getInitialProps = async () => {
//     return {
//         intialState: {
//             language: "en",
//         },
//     };
// };

export default SelectForm;
