import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField, Typography, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';

const Registration=()=> {
    const paperStyle={
        padding: "40px",
        height: '85vh',
        width: 280,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor: "green"
    }
    const textfield={
        margin: '10px'
    }
    const btnstyle={
        margin:'8px 0'
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                <h4>Registration</h4>
                </Grid>    
                <TextField 
                    label='Username' 
                    placeholder='Enter Username'
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>  
                <TextField 
                    label='Email' 
                    placeholder='Email' 
                    type='password' 
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>
                <TextField 
                    label='Phone Number' 
                    placeholder='Number' 
                    type='password' 
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>  
                <TextField 
                    label='Password' 
                    placeholder='Enter Password' 
                    type='password' 
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>
                <TextField 
                    label='Confirm Password' 
                    placeholder='Confirm Password' 
                    type='password' 
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>
                <FormControlLabel
                    control={
                        <Checkbox 
                            name='Checked' 
                            color="primary" 
                    />}
                    label='Remember me'
                />

                <Button 
                    type="submit" 
                    color="primary" 
                    variant="contained" 
                    style={btnstyle}
                    fullWidth
                > 
                    Sign Up
                </Button>

                <Typography
                    style={textfield}>
                    <Link href="#">
                        Already have an account? Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Registration;
