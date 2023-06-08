import React from 'react'
import {Box, Stack} from "@mui/material";
import {ChannelCard, VideoCard} from "./index";
import Loader from "./Loader";

const Videos = ({videos, direction}) => {
    if(!videos?.length) return <Loader />;
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent={"start"}
            sx={{
                justifyContent:{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start"
                }
            }}
            alignItems="start"
            gap={2}
        >
            {videos.map((item, idx) => (

                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}  />}
                </Box>
            ))}
        </Stack>
    )
}
export default Videos
