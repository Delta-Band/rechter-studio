import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.scss';
import { cms, landscapeBlocker } from '../../store';
import { ContactrForm, Page } from '../../components';

const WriteToUsPage = () => {
  const dispatch = useDispatch();
  const contactCMS = useSelector(cms.selectors.contact);

  dispatch(landscapeBlocker.actions.enable(false));

  return (
    <Page gaLogPage='write-to-us'>
      <div className={styles.spacer} />
      <h2>{contactCMS.writeToUsHeader}</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ContactrForm actionLabel='Send' />
        </Grid>
      </Grid>
    </Page>
  );
};

export default WriteToUsPage;
