import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const TrophyImg = styled ("img")({
    right:36,
    bottom:20,
    height:105,
    position:"absolute",
})
const Achivement = () => {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:"0.25px"}}>
                Shop with Hammad
            </Typography>
            <Typography variant='body2'>
                Congratulations 🥳
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}>
                420.8K
            </Typography>
            <Button size='small' variant='contained'>
                View Sales
            </Button>
            <TriangleImg src=''></TriangleImg>
            <TrophyImg src="https://cdn2.vectorstock.com/i/1000x1000/66/01/trophy-on-a-white-background-vector-20786601.jpg"/>
        </CardContent>
    </Card>
  )
}

export default Achivement