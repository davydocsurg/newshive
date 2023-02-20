import * as React from "react";

import Link from "@mui/material/Link";
import DashboardContent from "./DashboardContent";

// function Copyright(props: any) {
//     return (
//         <Typography
//             variant="body2"
//             color="text.secondary"
//             align="center"
//             {...props}
//         >
//             {"Copyright © "}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{" "}
//             {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     );
// }

export default function Dashboard() {
    return <DashboardContent />;
}
