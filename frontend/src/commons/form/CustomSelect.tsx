import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { ListSubheader } from "@mui/material";

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
    const [selected, setSelected] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value, "target");

        setSelected(event.target.value as string);
        console.log(selected, "selected");
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
                    value={selected}
                    label="Age"
                    onChange={handleChange}
                    defaultValue={defaultValue}
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
