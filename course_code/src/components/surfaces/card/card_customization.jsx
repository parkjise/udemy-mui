import { Card, CardContent, CardActions, CardHeader, CardMedia, CardActionArea, Button, Avatar } from "@mui/material"

export function CardCustomization() {
    const cat = "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
    return (
        <Card sx={{ bgcolor: "green", maxWidth: 400 }} raised elevation={8} variant="elevation">
            <CardHeader
                avatar={<Avatar>Z</Avatar>}
                action={<Button variant="contained">Learn More</Button>}
                title="My Card"
                subheader="February 14 2022"
                sx={{
                    "& .MuiCardHeader-title": {
                        color: "#FFF",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                    "& .MuiCardHeader-subheader": {
                        color: "orange",
                        fontFamily: "Verdana",
                        fontSize: "0.75rem",
                    },
                }}
            />
            <CardActionArea
                sx={{
                    "& .MuiTouchRipple-ripple": {
                        color: "green",
                    },
                }}
                onClick={() => console.log("Clicked me!")}>
                <CardMedia component="img" image={cat} height={300} />
                <CardContent sx={{ color: "#FFF", fontFamily: "Verdana", fontSize: "1rem" }}>Here is the main body of my card!</CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <Button variant="contained">Confirm</Button>
                <Button>Cancel</Button>
            </CardActions>
        </Card>
    )
}
