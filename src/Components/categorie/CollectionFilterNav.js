import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    

}))


function CollectionFilterNav() {
    return (
        <div>
            <Paper>
                <Box>
                    <Grid container>
                        <Grid item>
                            <Grid conatiner>
                                <Grid item>
                                    <Typography>
                                        <Box>
                                            FILTER BY
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid conatiner>
                                <Grid item>
                                    <Typography>
                                        <Box>
                                            FILTER BY
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography>
                                <Box>
                                    FILTER BY
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    )
}

export default CollectionFilterNav
