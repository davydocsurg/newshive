import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { ListSubheader } from "@mui/material";

interface customSelectProps {
    label: string;
    options: string[];
}

const CustomSelect = ({ label, options }: customSelectProps) => {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
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
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
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
