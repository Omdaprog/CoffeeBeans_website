import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    

}))
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function CollectionFilterNav() {
    const [selectedOption, setSelectOption] = useState(options[0])

    const handlechange = selectedOption => { 
        setSelectOption(selectedOption)
        console.log(`Option selected: `, selectedOption)
    };
    
    return (
        <Paper elevation={0} style={{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"}}>
            <Grid container justify="center" alignItems="center" >
                
                <Grid item justify='flex-end' >
                    <Box height="100%" display="flex" alignItems="center">
                        <Box component="div" p={1} m={1} bgcolor="background.paper">
                            inline
                        </Box>
                        <Box  width={150} component="div" p={1} m={1} bgcolor="background.paper">
                            <Select
                                value={selectedOption}
                                onChange={handlechange}
                                options={options}
                            />
                        </Box> 
                    </Box>
                    
                </Grid>
                <Grid item justify='flex-end' >
                    <Box height="100%" display="flex" alignItems="center">
                        <Box component="div" p={1} m={1} bgcolor="background.paper">
                            inline
                        </Box>
                        <Box  width={150} component="div" p={1} m={1} bgcolor="background.paper">
                            <Select
                                value={selectedOption}
                                onChange={handlechange}
                                options={options}
                            />
                        </Box> 
                    </Box>
                    
                </Grid>
                <Grid item lg={6} md={4} sm={3} xs={0}></Grid>
                <Hidden xsDown>
                    <Grid item>11 Items</Grid>
                </Hidden>
            </Grid>
            
            
        </Paper>
    )
}

export default CollectionFilterNav
