import React from 'react';
import { Wallet } from 'bitcore-client';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

interface Props {
  classes: any;
  address: string;
}

const styles = (theme: any) => ({
  paper: {
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    alignItems: 'center',
    borderTop: '2px solid #002855'
  } as any,
  greenpaper: {
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    alignItems: 'center',
    borderTop: '2px solid green'
  },
  textRight: {
    textAlign: 'right'
  } as any,
  avatar: {
    backgroundColor: 'white',
    color: 'green',
    border: '1px solid green',
    margin: 'auto'
  },
  defaultAvatar: {
    backgroundColor: 'white',
    color: '#002855',
    border: '1px solid #002855',
    margin: 'auto'
  },
  auto: {
    margin: 'auto'
  } as any,
  default: {
    color: '#002855'
  },
  green: {
    color: 'green'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
});

function Addresses(props: Props) {
  const { classes, address } = props;
  const copyTextToClipboard = (text: string) => {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying' + msg);
    } catch (err) {
      console.error('Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  };
  return (
    <Paper
      className={classes.paper}
      onClick={() => copyTextToClipboard(address)}
    >
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item className={classes.textRight}>
          <Typography variant="subtitle1" className={classes.default}>
            {address}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

const AddressList = withStyles(styles)(Addresses);

export { AddressList };
