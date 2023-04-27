import {Card, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material'
import Img from '../../../public/0620-28.webp'
import { formatCurrency } from '@/utils/formatCurrency'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Orders = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      {/* End hero unit */}
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card className='h-full flex flex-col'
            >
              <CardMedia className='p-2'
                component='img'
                image={Img}
                alt='random'
              />
              <CardContent className='!p-[10px] bg-slate-100' sx={{ flexGrow: 1 }}>
                <Typography className='!text-md truncate'>
                  Heading Heading Heading Heading Heading Heading
                </Typography>
                <Typography>
                {formatCurrency(100)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Orders
