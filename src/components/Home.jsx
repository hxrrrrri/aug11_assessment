import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Button as MuiButton,
  Grid as MuiGrid,
} from "@mui/material";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
  
  @media (min-width: 960px) {
    padding: 30px;
  }
`;

const Card = styled(MuiCard)`
  transition: transform 0.3s ease-in-out;
  border-radius: 15px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContentStyled = styled(CardContent)`
  text-align: center;
`;

const Button = styled(MuiButton)`
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: #6200ea;
    color: white;
    transform: scale(1.1);
  }
`;

const Grid = styled(MuiGrid)`
  margin-bottom: 20px;
`;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <MuiGrid container spacing={3}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Card elevation={3}>
              <CardContentStyled>
                <Avatar
                  alt={val.EmpName}
                  src={val.img_url}
                  sx={{ width: 100, height: 100, margin: "0 auto 20px" }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  align="center"
                >
                  {val.EmpName}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {val.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {val.empId}
                </Typography>
              </CardContentStyled>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="outlined" color="secondary">
                  Delete
                </Button>
                <Button size="small" variant="outlined" color="primary">
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </MuiGrid>
    </Container>
  );
};

export default Home;
