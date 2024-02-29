import { AppBar, Toolbar } from "@mui/material"
import { styled } from "@mui/material/styles"

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

export function AppBarFunctionality() {
    return (
        <div>
            <Offset />
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <AppBar
                // sx={{ top: "auto", bottom: 0 }}
                position="fixed"
                color="secondary">
                <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
                    <div>Logo</div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            width: "20rem",
                        }}>
                        <div>Tab #1</div>
                        <div>Tab #2</div>
                        <div>Tab #3</div>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ height: "150rem" }} />
        </div>
    )
}
