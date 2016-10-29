import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { colors } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider, connect } from 'react-redux';

import TopBar from 'joggr/components/TopBar';
import Toolbar from 'joggr/components/Toolbar';
import WeeklyReport from 'joggr/components/WeeklyReport';
import JogEntryList from 'joggr/components/JogEntryList';
import {
  store,
  pushJogEntry,
  removeJogEntry,
  toggleWeeklyReport,
  updateFilters,
} from 'joggr/state';

// Needed for onTouchTap
// Check: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const ConnectedJogEntryList = connect(state => ({
  activities: state.jogEntries.orderByDate().reverse(),
}))(JogEntryList);

const ConnectedWeeklyReport = connect(state => ({
  expanded: state.options.showReport,
  data: state.jogEntries.reportSpeedPerWeek(),
}))(WeeklyReport);

const ConnectedToolbar = connect(({
    options: {
      showReport,
      filterDateFrom,
      filterDateTo,
    },
  }) => ({
    showReport,
    filterDateFrom,
    filterDateTo,
  })
)(Toolbar);

const AppTemplate = ({ dispatch }) => <div style={{ maxWidth: '1200px' }}>
  <TopBar />
  <Paper style={{ padding: '2ex', margin: '1ex' }}>
    <h1 style={{ color: colors.grey700 }}>
      Logged activities
    </h1>

    <ConnectedToolbar
      onAddOrEdit={
        (entry) => {
          dispatch(pushJogEntry(entry));
        }
      }
      onTogleWeeklyReport={
        () => {
          dispatch(toggleWeeklyReport());
        }
      }
      onDateFiltersUpdate={
        (filterDateFrom, filterDateTo) => {
          dispatch(updateFilters(filterDateFrom, filterDateTo));
        }
      }
    />
    <ConnectedWeeklyReport />
    <ConnectedJogEntryList
      onRemove={(activity) => {
        dispatch(removeJogEntry(activity));
      }}
    />
  </Paper>
</div>;

AppTemplate.propTypes = {
  dispatch: React.PropTypes.func,
};

const ConnectedAppTempalte = connect(() => ({}))(AppTemplate);

/* global document */
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <ConnectedAppTempalte />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);