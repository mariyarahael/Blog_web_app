//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
//Write your code here
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/get")
      .then((res) => {
        console.log(res.data)
        setBlogs(res.data)
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/${id}`)
      .then(() => {
        alert("Blog deleted successfully")
        fetchBlogs() 
      })
      .catch(err => console.log(err))
  }

  const handleUpdate = (id) => {
    navigate('/add', { state: { id } })
     axios.delete(`http://localhost:3001/update/${id}`)
      .then(() => {
        alert("Blog deleted successfully")
        fetchBlogs() 
      })
      .catch(err => console.log(err))
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 3
              }
            }}>
              <CardMedia
                sx={{ height: 200 }}
                image={blog.img_url }
                title={blog.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary" component="div">
                  {blog.title}
                </Typography>
                 <Typography gutterBottom variant="h5" component="h2">
                  {blog.content}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Box>
                  <Button 
                    size="small" 
                    color="error"
                    onClick={() => handleDelete(blog._id)}
                    sx={{ mr: 1 }}
                  >
                    Delete
                  </Button>
                  <Button 
                    size="small" 
                    color="secondary"
                    onClick={() => handleUpdate(blog._id)}
                  >
                    Update
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}

export default Home

