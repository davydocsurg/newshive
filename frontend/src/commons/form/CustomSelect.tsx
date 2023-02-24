import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import { ListSubheader } from "@mui/material";
import { NewsContext } from "@/context";

interface customSelectProps {
    // value?: string;
    label: string;
    options: string[];
    defaultValue?: string;
}

const CustomSelect = ({
    // value,
    label,
    options,
    defaultValue,
}: customSelectProps) => {
    const {
        language,
        setLanguage,
        setPublishedWithin,
        setPublisherCountry,
        setSearchIn,
    } = useContext(NewsContext);

    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.name == "Article Language") {
            setLanguage(event.target.value);
            console.log(language);
        }
    };

    return (
        <ListSubheader>
            <FormControl
                fullWidth
                sx={{
                    marginBottom: "1rem",
                }}
            >
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    name={label}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={language}
                    label={label}
                    onChange={handleChange}
                    // defaultValue={defaultValue}
                >
                    {options.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </ListSubheader>
    );
};

export default CustomSelect;
